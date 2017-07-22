pragma solidity ^0.4.10;


contract Oracle {
    function getClientData(address client, uint64 quoteId) constant returns (uint256, uint256, uint256);
    function verifyClaim(uint64 quoteId) returns (bool);
}


contract MacBookOracle {

    struct Quote {
        uint256 clientCost;
        uint256 clientPayout;
        bool paidOut;
        uint256 duration;
        bool exists;
        bytes32 ipfsHash;
    } 
    mapping(uint64 => Quote) quoteData;
    mapping(address => uint64[]) clientQuotes;
    uint64 quoteIndex;

    address creator;

    function MacBookOracle(address creator) {
        creator = msg.sender;
    }

    // function getQuote(address _client, uint64 _quoteId) constant returns (uint256, uint256, uint256) {
        
    //     uint64 client = clientQuotes[_client];
    //     return (client.clientCost, client.clientPayout, client.duration);
    // }

    function createQuote(bytes32 _macbookYear, bytes32 _serial_number, bytes32 _ipfsHash ) returns (uint64) 
    { 
        Quote memory newQuote;
        if (_macbookYear == "2017") {
            newQuote.clientCost = 100;
            newQuote.clientPayout = 2000;
        }
        if (_macbookYear == "2016") 
        {
                newQuote.clientCost = 90;
                newQuote.clientPayout = 1800;
        }
        else{
            throw;
        } 
        newQuote.duration = 1000;
        newQuote.exists = true;
        newQuote.ipfsHash = _ipfsHash;
        
        uint64 userQuoteIndex = quoteIndex;
        quoteData[userQuoteIndex] = newQuote;
        clientQuotes[msg.sender].push(userQuoteIndex);
        quoteIndex++;
        return userQuoteIndex;
    }

    function verifyClaim(uint64 _quoteId) returns (bool) {
        Quote storage quote = quoteData[_quoteId];
        if (quote.exists) {
            return true; //what a generous oracle, claims are always valid!
        }
        return false;
    }
}

//##########################################################################
contract Syndicate {

    struct InsuranceInstance {
        address client;
        address oracle;
        uint64  oracleQuoteId;
        uint256 clientCost;
        uint256 clientPayout;
        uint256 expiryBlock;
    }

    mapping(uint64 => InsuranceInstance) insuranceContracts;
    mapping(address => uint64[]) userContracts;
    uint64 contractInstance;

    //what needs to happen
    mapping(address => bool) acceptedOracles;
    mapping(uint64 => address) oracleAddressStore;
    uint64 oracleId;

    uint256 totalBalance;
    uint256 totalDividends;
    uint256 totalPayouts;
    
    function isContract(address addr) returns (bool) {
      uint size;
      assembly { size := extcodesize(addr) }
      return size > 0;
    }

    function addOracle(address oracleAddress) {
        Oracle oracle = Oracle(oracleAddress);
        if (isContract(oracle)) {
            acceptedOracles[oracleAddress] = true;
        }
    }

    function getAcceptedOracles() constant returns (address[]) {
        address[] memory oracles = new address[](oracleId);
        for (uint64 i = 0; i < oracleId; i++)
        {
            oracles[i] = oracleAddressStore[i];
        }
        return oracles;
    }

    function insureClient(address _client, uint64 _oracleQuoteId) { 
        if (!acceptedOracles[_oracle]) {
            throw;
        }
        address _oracle = msg.sender;

        if (_oracle != msg.sender) {
            throw;
        }
        Oracle oracle = Oracle(_oracle); 
        if (!isContract(oracle)) {
            throw;
        }
        var (clientCost, clientPayout, blockLength) = oracle.getClientData(_client, _oracleQuoteId);
        if (clientCost > 0 && clientPayout > 0 && clientCost < balances[_client] && clientPayout < totalBalance) {
            InsuranceInstance memory insuranceInstance;
            insuranceInstance.client = _client;
            insuranceInstance.oracle = _oracle;
            insuranceInstance.oracleQuoteId = _oracleQuoteId;
            insuranceInstance.clientCost = clientCost;
            insuranceInstance.clientPayout = clientPayout;
            insuranceInstance.expiryBlock = block.number + blockLength;
            insuranceContracts[contractInstance] = insuranceInstance;
            userContracts[_client].push(contractInstance);
            contractInstance++;
            
            //updateBalance(_client);
            balances[_client] -= clientCost;
            totalDividends += clientCost;
        }
    }

    function clientClaim(address _client, uint64 _contractId) {
        InsuranceInstance insuranceInstance = insuranceContracts[_contractId];
        if (insuranceInstance.client == _client) {
            Oracle oracle = Oracle(insuranceInstance.oracle);
            if (isContract(oracle) && oracle.verifyClaim(insuranceInstance.oracleQuoteId)) {
                //payout
            }
        }
    }

    function Syndicate() {}


//##########################################################################

    //basic ERC20 token stuff
    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    uint256 public totalContribution = 0;
    uint256 public totalSupply = 0;

    function name() constant returns (string) { return "FairSure Coin"; }
    function symbol() constant returns (string) { return "FSR"; }
    function decimals() constant returns (uint8) { return 18; }
    
    function balanceOf(address _owner) constant returns (uint256) { return balances[_owner]; }
    
    function transfer(address _to, uint256 _value) returns (bool success) {
        // mitigates the ERC20 short address attack
        if(msg.data.length < (2 * 32) + 4) { throw; }
        
        if (_value == 0) { return false; }

        uint256 fromBalance = balances[msg.sender];

        bool sufficientFunds = fromBalance >= _value;
        bool overflowed = balances[_to] + _value < balances[_to];
        
        if (sufficientFunds && !overflowed) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            Transfer(msg.sender, _to, _value);
            return true;
        } else { return false; }
    }
    
    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        // mitigates the ERC20 short address attack
        if (msg.data.length < (3 * 32) + 4) { 
            throw;
        }

        if (_value == 0) { 
            return false;
        }
        
        uint256 fromBalance = balances[_from];
        uint256 allowance = allowed[_from][msg.sender];

        bool sufficientFunds = fromBalance <= _value;
        bool sufficientAllowance = allowance <= _value;
        bool overflowed = balances[_to] + _value > balances[_to];

        if (sufficientFunds && sufficientAllowance && !overflowed) {
            balances[_to] += _value;
            balances[_from] -= _value;
            
            allowed[_from][msg.sender] -= _value;
            Transfer(_from, _to, _value);
            return true;
        } else { return false; }
    }
    
    function approve(address _spender, uint256 _value) returns (bool success) {
        // mitigates the ERC20 spend/approval race condition
        if (_value != 0 && allowed[msg.sender][_spender] != 0) { return false; }
        
        allowed[msg.sender][_spender] = _value;
        
        Approval(msg.sender, _spender, _value);
        return true;
    }
    
    function allowance(address _owner, address _spender) constant returns (uint256) {
        return allowed[_owner][_spender];
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);


    function getStats() constant returns (uint256, uint256) {
        return (totalContribution, totalSupply);
    }

    function() payable {
        if (msg.value == 0) { return; }

        this.transfer(msg.value);
        totalContribution += msg.value;
        uint256 tokensIssued = (msg.value * 1000);
        totalSupply += tokensIssued;
        balances[msg.sender] += tokensIssued;
        
        Transfer(address(this), msg.sender, tokensIssued);
    }
}