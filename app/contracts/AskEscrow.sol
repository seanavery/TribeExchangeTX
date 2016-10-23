contract BidEscrow {
    struct Ask {
        address asker;
        uint blockstamp;
        uint amount;
        uint price;
    }

    Ask public AskInfo;

    function Escrow() {

    }

    modifier sufficientFunds(uint _amount, uint _price) {
        if(msg.value < _amount * _price) throw;
        _;
    }

    function submitEscrowAsk(uint _amount, uint _price) sufficientFunds(_amount, _price) returns (bool) {
        AskInfo.asker = msg.sender;
        AskInfo.blockstamp = now;
        AskInfo.amount = _amount;
        AskInfo.price = _price;
    }
}
