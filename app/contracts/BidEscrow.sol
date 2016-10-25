pragma solidity ^0.4.3;

contract BidEscrow {
    struct Bid {
        address bidder;
        uint blockstamp;
        uint amount;
        uint price;
    }

    Bid public BidInfo;

    bool Approved;

    modifier sufficientFunds(uint _amount, uint _price) {
        if(msg.value < _amount * _price) throw;
        Approved = true;
        _;
    }


    function submitEscrowBid(uint _amount, uint _price)  {
        BidInfo.bidder = msg.sender;
        BidInfo.blockstamp = now;
        BidInfo.amount = _amount;
        BidInfo.price = _price;
    }


    function submitToExchange() {

    }
}
