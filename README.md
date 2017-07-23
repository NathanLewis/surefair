This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## SureFair: Overall Funcional Architecture

SureFair hosts **syndicated funds** for each category of (insurable) asset type. Each syndicate is crowdsourced by a pool of **underwriters (investors)**. We have provided two example asset classes -for **crop insurance and Mac-Book laptop insurance.**

**Agents / Oracles** are external authorirites that provide market-based pricing for specific insurance asset classes. Underwriters of the syndicate elect Oracle/Agents using a voting mechanism.

Upon a customer agreeing on premimum quote and the terms of insurance, underwriters issue a **policy** -thereby entering into a contract. Each policy is fully collateralized, and the corresponding funds are transferred from the syndicate pool to an **escrow account** (at the inception of the policy), and is held until the termination of the policy.

A policy is terminated either at the end of its term, or if the customer files a claim and the claim is authorised, the **policy is redeemed**. If the **policy expires** (no redemption), then the collateral is relesed to the syndicate pool. Otherwise, the collateral is redeemed as the insurance payout.

Any **unpaid premium amounts** during a given time interval in the syndicate pool is accumulated as **dividends** for the investors who participated in underwriting contracts during that period, that is, pro-rated to the amount of their investments.


## Why leverage Blockchain?

+ Disintermediate trust between customers, underwriters and agents / oracles.

+ Currency and asset-agnostic syndication of funds for underwriting. 

+ Democratic consensus mechanism for underwriters to vote for agents / oracles.



## Solidity Contracts


### Oracle:
The base-contract for Agent who implements price quoting and claims verification facilities for a specific insurable asset type.

### CropOracle:
Example implementation of an Oracle for crop insurance. The specific logic is greaty simplified and this exist solely for the purpose of demonstration.

### MacBookOracle:
Example implementation of an Oracle for Macbook laptop insurance. The specific logic is greaty simplified and this exist solely for the purpose of demonstration.

### Syndicate:
A Syndicate is for a given insurable asset type. Each insurance contract is underwritten using this syndicated fund-pool. Funds for each syndicate is crowd-sourced from a collection of investors / underwriters, who purchase crypto-tokens for the desired amount of investment. Issuance of a new insurance policy is fully collateralised from the fund pool, and the corresponding amount is transferred to an escrow account (SFEscrow) -see below.

### SFEscrow:
Holds total funding collateral for all open policies belongs to agiven Syndicate Conract at a point in time. Collateral corresponds to a given policy is released to the Syndicate pool when a policy is expired, or redeemed to the client if the claim is made during the policy period.




# Future Enhanements

+ Improve onboarding process of new (insurable) asset types, creation of corresponding syndicate pools in compliance to local regulation etc.

+ Improve onboarding process of new oracles / agents. Seperate the workflows of initial configuration / code development, from subsequent discovery / usage of oracles within syndicate pools.

+ Expand the consensus mechanism for underwriters to elect agents / oracles for a given syndicate. Thereby providing an crowd-based ratings / review methodology.

+ Support multiple currencies for investment and purchase of policies, and provide a transparent market-based mechanism.

