
# TX TRIBE EXCHANGE
Modular, Scalable, Decentralized Exchange

## Summary
TX is a financial exchange that runs entirely within the Ethereum Virtual Machine. A set of programs (or Smart Contracts) contain all of the computation and data necessary to run a full scale double-auction for Ethereum based Digital Assets. This means Startups can spin up their own exchange that runs completely autonomously and with zero cost.

## Continuous-Time Double Auction
The Exchange matches bids/asks synchronously as they enter the market. Matching is based on the best price in the market: greatest bids and least asks processed first. Continous time auctions offer the highest fidelity interpolation of the true market value. Small scale arbitrage opportunities available appropriately incentivize market makers.

## Execution Flow
TX is able to exchange Ether with Digital Assets. User ‘B’ can submit a Buy order-- the Ether is sent to an individually owned escrow contract where it is locked in until response is received from Exchange Contract. Likewise, User 'A' submits a Sell order that transfers ownership of the Digital Assets to an escrow contract for the resultant time. Escrow Contracts check that sufficient funds are sent and submit orders to Exchange Contract. The exchange algorithm checks that the order is in the market and sorts the incoming market order into the Bid/Ask Ledger. The matching algorithm gives preference to favorable price meaning highest bid first, lowest ask first. The order is matched recursively until complete or none are left in the market. The Exchange Algorithm sends results to the Escrow Contracts, which then transfer Ether and Digital Assets to their matched peer directly.

## Significance
TX Exchange does not pool any funds into ‘hot wallets’-- Instead, user’s create a distributed web of escrow contracts, and the exchange algorithm serves solely as the data/computation hub. The contract set enforces a strict separation between the exchange algorithm and escrow contracts, allowing the exchange to run without holding any of the user’s funds. The Contracts are processed across all of the nodes running the EVM, giving probabilistic certainty that the system will run with no downtown and as deployed. Companies can independently deploy a second-hand market without relying on exchange companies to adopt their token.

## Fees/Costs

## Contract Review

### Exchange Contract (ExchangeTX.sol)
```
contract Exchange {

    struct Bid {
        address owner;
        uint price;
        uint amount;
        uint date;
    }

    struct Ask {
        address owner;
        uint price;
        uint amount;
        uint date;
    }

    Bid[] public Bids;
    Ask[] public Asks;

    modifier bidInMarket(uint _price) {
        if (Asks.length > 0) {
            if (_price < Asks[Asks.length -1].price) throw;
        }
        _;
    }

    modifier askInMarket(uint _price) {
        if (Bids.length > 0) {
            if (_price > Bids[Bids.length-1].price) throw;
        }
        _;
    }

    function submitBid(uint _price, uint _amount) bidInMarket(_price) external returns (bool) {
        Bid memory b;
        b.owner = msg.sender;
        b.price = _price;
        b.amount = _amount;
        b.date = now;
        for(uint i = 0; i < Bids.length; i++) {
            if(Bids[i].price > _price) {
                Bid[] memory tempBids = new Bid[](Bids.length - i);
                for(uint j = i; j < Bids.length; j++) {
                    tempBids[j-i] = Bids[j];
                }
                Bids[i] = b;
                Bids.length = Bids.length + 1;
                for(uint k = 0; k < tempBids.length; k++) {
                    Bids[i+k+1] = tempBids[k];
                }
                if(Asks.length > 0) {
                    matchBid(i, Asks.length-1);   
                }
                return true;
            }   
        }
        Bids.push(b);
        if(Asks.length > 0) {
            matchBid(Bids.length-1, Asks.length-1);   
        }
        return true;
    }

    function submitAsk(uint _price, uint _amount) askInMarket(_price) external returns (bool) {
        Ask memory a;
        a.owner = msg.sender;
        a.price = _price;
        a.amount = _amount;
        a.date = now;
        for (uint i = 0; i < Asks.length; i ++) {
            if(Asks[i].price < _price) {
                Ask[] memory tempAsks = new Ask[](Asks.length - i);
                for (uint j = i; j < Asks.length; j++) {
                    tempAsks[j-i] = Asks[j];
                }
                Asks[i] = a;
                Asks.length = Asks.length + 1;
                for (uint k = 0; k < tempAsks.length; k++) {
                    Asks[i+k+1] = tempAsks[k];
                }
                if(Bids.length > 0) {
                    matchAsk(i, Bids.length-1);   
                }
                return true;
            }
        }
        Asks.push(a);
        if(Bids.length > 0) {
            matchAsk(Asks.length-1, Bids.length-1);  
        }
        return true;
    }

    function matchBid(uint bid_index, uint ask_index) returns (bool) {
        if (Bids[bid_index].amount <= 0 || Bids[bid_index].price < Asks[ask_index].price) {
            cleanAskLedger();
            return true;
        }
        Asks[ask_index].amount = Asks[ask_index].amount - 1;
        Bids[bid_index].amount = Bids[bid_index].amount - 1;
        if (Asks[ask_index].amount == 0) {
            if (ask_index == 0) {
                cleanAskLedger();
                return true;
            }
            ask_index = ask_index - 1;
            return(matchBid(bid_index, ask_index));
        }
        return(matchBid(bid_index, ask_index));
    }

    function matchAsk(uint ask_index, uint bid_index) returns (bool) {
        if(Asks[ask_index].amount <= 0 || Asks[ask_index].price > Bids[bid_index].price) {
            cleanBidLedger();
            return true;
        }
        Bids[bid_index].amount--;
        Asks[ask_index].amount--;
        if(Bids[bid_index].amount == 0) {
            if(bid_index == 0) {
                cleanBidLedger();
                return true;
            }
            bid_index--;
            return(matchAsk(ask_index, bid_index));
        }
        return(matchAsk(ask_index, bid_index));
    }

    function cleanAskLedger() returns (bool) {
        for(uint i = Asks.length - 1; i >= 0; i--) {
            if (Asks[i].amount > 0) {
                break;
            }
        }
        Asks.length = i + 1;
        return true;
    }

    function cleanBidLedger() returns (bool) {
        for(uint i = Bids.length -1; i >= 0; i--) {
            if(Bids[i].amount > 0) {
                break;
            }
        }
        Bids.length = i + 1;
        return true;
    }
}
```

#### Design Decisions:
#### Sorting:
#### Matching:
#### Cleaning:

### Escrow Registry

### Bid Escrow

### Ask Escrow

## Installation
1. git clone https://github.com/SeanAvery/Tribe_Exchange-TX.git
2. npm install
3. node build/ContractBuild.js
4. node build/ContratDepoloy.js
5. Install Metamask

## Usage
Solidity contracts are in app/contracts
React.js front end using es6 syntax
Webpack bundles into app/build/bundle.js

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request
