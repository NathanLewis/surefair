pragma solidity ^0.4.10;


contract Oracle {
<<<<<<< HEAD
    function getClientData(address client, uint64 quoteId) constant returns (uint256, uint256, uint256);
||||||| merged common ancestors
    function getQuote(address client, uint64 quoteId) constant returns (uint256, uint256, uint256);
=======
    function getQuote(address client, uint64 quoteId) constant returns (uint256, uint256, uint256, bytes32);
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c
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

<<<<<<< HEAD
    // function getQuote(address _client, uint64 _quoteId) constant returns (uint256, uint256, uint256) {
        
    //     uint64 client = clientQuotes[_client];
    //     return (client.clientCost, client.clientPayout, client.duration);
    // }
||||||| merged common ancestors
     function getQuote(address _client, uint64 _quoteId) constant returns (uint256, uint256, uint256) {
        
         Quote quote = quoteData[_quoteId];
         return (quote.clientCost, quote.clientPayout, quote.duration);
     }
=======
     function getQuote(address _client, uint64 _quoteId) constant returns (uint256, uint256, uint256, bytes32) {
         Quote quote = quoteData[_quoteId];
         return (quote.clientCost, quote.clientPayout, quote.duration, quote.ipfsHash);
     }
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c

<<<<<<< HEAD
    function createQuote(bytes32 _macbookYear, bytes32 _serial_number, bytes32 _ipfsHash ) returns (uint64) 
||||||| merged common ancestors
    event Debug1(bytes32);
    function createQuote(uint256 _macbookYear, bytes32 _serial_number, bytes32 _ipfsHash ) returns (uint64) 
=======
    function createQuote(uint256 _macbookYear, bytes32 _serial_number, bytes32 _ipfsHash ) returns (uint64) 
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c
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
<<<<<<< HEAD
            throw;
        } 
||||||| merged common ancestors
         //   throw;
        }
=======
            throw;
        }
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c
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
<<<<<<< HEAD
||||||| merged common ancestors
  
    function Syndicate() {}
=======
  
    SFEscrow escrow;
    function Syndicate() {
        escrow = new SFEscrow();
    }
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c

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

<<<<<<< HEAD
    function insureClient(address _client, uint64 _oracleQuoteId) { 
||||||| merged common ancestors
    event DebugB(uint256, uint256, uint256, uint256);
    function insureClient(address _oracle, uint64 _oracleQuoteId) { 
=======
    function getUserContracts constant returns (uint64[]) {

    }

    function insureClient(address _oracle, uint64 _oracleQuoteId) { 
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c
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
<<<<<<< HEAD
        var (clientCost, clientPayout, blockLength) = oracle.getClientData(_client, _oracleQuoteId);
        if (clientCost > 0 && clientPayout > 0 && clientCost < balances[_client] && clientPayout < totalBalance) {
||||||| merged common ancestors
        var (clientCost, clientPayout, blockLength) = oracle.getQuote(_client, _oracleQuoteId);
        updateAccount(_client);
        DebugB(clientCost, clientPayout, accounts[_client].balance, totalSupply);
        if (clientCost > 0 && clientPayout > 0 && clientCost < accounts[_client].balance && clientPayout < totalSupply) {
=======
        var (clientCost, clientPayout, blockLength, ipfsHash) = oracle.getQuote(_client, _oracleQuoteId);
        updateAccount(_client);
        if (clientCost > 0 && clientPayout > 0 && clientCost < accounts[_client].balance && clientPayout < totalSupply) {
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c
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
<<<<<<< HEAD
            
            //updateBalance(_client);
            balances[_client] -= clientCost;
            totalDividends += clientCost;
||||||| merged common ancestors
            
            accounts[_client].balance -= clientCost;
            disburse(clientCost);
=======

            totalSupply -= clientPayout;
            escrow.deposit(clientPayout);

            accounts[_client].balance -= clientCost;
            disburse(clientCost);
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c
        }
    }

    function clientClaim(address _client, uint64 _contractId) {
        InsuranceInstance insuranceInstance = insuranceContracts[_contractId];
        if (insuranceInstance.client == _client) {
            Oracle oracle = Oracle(insuranceInstance.oracle);
            if (isContract(oracle) && oracle.verifyClaim(insuranceInstance.oracleQuoteId)) {
                updateAccount(insuranceContracts.client);
                accounts[insuranceContracts.client].balance += insuranceInstance.clientPayout;
                drawDown(insuranceInstance.clientPayout);
            }
        }
    }

<<<<<<< HEAD
    function Syndicate() {}
||||||| merged common ancestors
    //dividend handling
    function dividendsOwing(address account) internal returns(uint) {
        var newDividendPoints = totalDividendPoints - accounts[account].lastDividendPoints;
        return (accounts[account].balance * newDividendPoints) / pointMultiplier;
    }

    event Debug(uint);
    function updateAccount(address account) {
        var owing = dividendsOwing(account);
        Debug(owing);
        if(owing > 0) {
            unclaimedDividends -= owing;
            accounts[account].balance += owing;
            accounts[account].lastDividendPoints = totalDividendPoints;
        }
    }
=======
    function redeemFromEscrow(uint64 _contractId) {
        InsuranceInstance insuranceInstance = insuranceContracts[_contractId];
        if (insuranceContracts.expiryBlock < block.number) {
           // escrow.[]//??
            totalSupply += clientPayout;
        }
    }

    //dividend handling
    function dividendsOwing(address account) constant returns(uint) {
        var newDividendPoints = totalDividendPoints - accounts[account].lastDividendPoints;
        return (accounts[account].balance * newDividendPoints) / pointMultiplier;
    }

    //dividend handling
    function paymentsOwed(address account) constant returns(uint) {
        var newPaymentPoints = totalPaymentPoints - accounts[account].lastPaymentPoints;
        return (accounts[account].balance * newPaymentPoints) / pointMultiplier;
    }

    function updateAccount(address account) {
        var owing = dividendsOwing(account);
        var owed = paymentsOwed(account);
        
        if(owing > 0) {
            unclaimedDividends -= owing;
            accounts[account].balance += owing;
        }
        if(owed > 0 && accounts[account].balance >= owed) {
            unfulfilledPayments -= owed;
            accounts[account].balance -= owed;
        }

        accounts[account].lastPaymentPoints = totalPaymentPoints;
        accounts[account].lastDividendPoints = totalDividendPoints;
    }
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c

<<<<<<< HEAD
||||||| merged common ancestors
    function disburse(uint256 amount) {
        totalDividendPoints += (amount * pointMultiplier / totalSupply);
        DebugB(amount, pointMultiplier, totalSupply, totalDividendPoints);
        totalSupply += amount;
        unclaimedDividends += amount;
        Debug(unclaimedDividends);
    }
=======
    function disburse(uint256 amount) internal {
        totalDividendPoints += (amount * pointMultiplier / totalSupply);
        totalSupply += amount;
        unclaimedDividends += amount;
    }

    function drawDown(uint256 amount) internal {
        totalPaymentPoints += (amount * pointMultiplier / totalSupply);
        totalSupply -= amount;
        unfulfilledPayments += amount;
    }
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c

//##########################################################################

    //basic ERC20 token stuff
<<<<<<< HEAD
    mapping (address => uint256) balances;
||||||| merged common ancestors
    struct UserData {
        uint256 balance;
        uint256 lastDividendPoints;
    }
    mapping (address => UserData) accounts;
=======
    struct UserData {
        uint256 balance;
        uint256 lastDividendPoints;
        uint256 lastPaymentPoints;
    }
    mapping (address => UserData) accounts;
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c
    mapping (address => mapping (address => uint256)) allowed;
<<<<<<< HEAD

    uint256 public totalContribution = 0;
    uint256 public totalSupply = 0;
||||||| merged common ancestors
    
    uint256 public totalSupply;
    uint256 public totalDividendPoints;
    uint256 public unclaimedDividends;
=======
    
    uint256 public totalSupply;
    uint256 public totalDividendPoints;
    uint256 public unclaimedDividends;
    uint256 public totalPaymentPoints;
    uint256 public unfulfilledPayments;
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c

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
<<<<<<< HEAD
||||||| merged common ancestors
}

contract SFEscrow{
    
    address public owner;
    uint256 public totalBalance;
    
    // Helper to restrict invocation to owner
    modifier only_owner() {
        if (msg.sender == owner) {
            _;
        }
    }
    
    // Constructor
    function SFEscrow() {
        owner = msg.sender;
        totalBalance = 0;
    }
    
    
    function deposit(uint256 amount) external only_owner{
        if(amount < 0){
            throw;
        }
        totalBalance += amount;
    }
    
    function payout(address payee, uint256 amount) external only_owner{
        if(amount <= 0 || amount > totalBalance){
            throw;
        }
        totalBalance -= amount;
        Syndicate syndicate = Syndicate(owner);
        syndicate.transfer(amount);
    }
=======
}

contract SFEscrow{
    
    address public owner;
    uint256 public totalBalance;
    
    // Helper to restrict invocation to owner
    modifier only_owner() {
        if (msg.sender == owner) {
            _;
        }
    }
    
    // Constructor
    function SFEscrow() {
        owner = msg.sender;
        totalBalance = 0;
    }
    
    
    function deposit(uint256 amount) external only_owner{
        if(amount < 0){
            throw;
        }
        totalBalance += amount;
    }
    
    function redeem(uint256 amount) external only_owner{
        if(amount < 0) {
            throw;
        }
        totalBalace -= amount;
    }

    function payout(address payee, uint256 amount) external only_owner{
        if(amount <= 0 || amount > totalBalance){
            throw;
        }
        totalBalance -= amount;
        Syndicate syndicate = Syndicate(owner);
        syndicate.transfer(amount);
    }
>>>>>>> bb47183d0bcfe2f8a2cc4a3a8af0ea55a658356c
}