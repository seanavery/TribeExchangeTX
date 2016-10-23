contract BidEscrow {
    struct Bid {
        address bidder;
        uint blockstamp;
        uint amount;
        uint price;
    }

    Bid public BidInfo;

    function Escrow() {

    }

    modifier sufficientFunds(uint _amount, uint _price) {
        if(msg.value < _amount * _price) throw;
        _;
    }

    function submitEscrowBid(uint _amount, uint _price) sufficientFunds(_amount, _price) returns (bool) {
        BidInfo.bidder = msg.sender;
        BidInfo.blockstamp = now;
        BidInfo.amount = _amount;
        BidInfo.price = _price;
    }
}
