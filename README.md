
# TX TRIBE EXCHANGE
Modular, Scalable, Decentralized Exchange

## Summary
TX is a financial exchange that runs entirely within the Ethereum Virtual Machine. A set of programs (or Smart Contracts) contain all of the computation and data necessary to run a full scale double-auction for Ethereum based Digital Assets. This means Startups can spin up their own exchange that runs completely autonomously and with zero cost.

## Execution Flow
TX is able to exchange Ether for Digital Assets. User ‘B’ can submit a Buy order-- the Ether is sent to an individually owned escrow contract where it is locked in until response is received from Exchange Contract. Likewise, User 'A' submits a Sell order that transfers ownership of the Digital Assets to an escrow contract for the resultant time. Escrow Contracts check that sufficient funds are sent and submit orders to Exchange Algorithm. The exchange algorithm checks that the order is in the market and sorts the incoming market order into the Bid/Ask Ledger. The matching algorithm gives preference to favorable price meaning highest bid first, lowest ask first. Once the market order is fulfilled the ledger  The Escrow contracts then transfer Ether and Digital Assets to their matched peer directly. 

## Significance
The contract set enforces a strict separation between the exchange algorithm and escrow contracts. This allows the exchange to run without holding any of the user’s funds. The orders are processed by the Exchange Algorithm which sends results back to Escrow Contracts.

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
