pragma solidity ^0.4.3;

// import * as Exchange from "Exchange.sol";

contract BidEscrow {

    struct Bid {
        address bidder;
        uint blockstamp;
        uint amount;
        uint price;
    }

    Bid public BidInfo;

    bool Response;

    function BidEscrow(uint _amount, uint _price) {
        BidInfo.bidder = msg.sender;
        BidInfo.blockstamp = now;
        BidInfo.amount = _amount;
        BidInfo.price = _price;

        Response = false;
    }

    modifier sufficientFunds(uint _amount, uint _price) {
        if(msg.value < _amount * _price) throw;
        Response = true;
        _;
    }

    function withdrawFunds() {
        if(Response) {
            //send ether to Bid.bidder
            BidInfo.bidder.send(this.balance);
        }
    }


    // function submitToExchange() {

    // }
}
