contract AskEscrow {
    struct Ask {
        address asker;
        uint blockstamp;
        uint amount;
        uint price;
    }

    Ask public AskInfo;

    bool public Response;

    function AskEscrow(uint _price, uint _amount) {
        AskInfo.asker = msg.sender;
        AskInfo.blockstamp = now;
        AskInfo.amount = _amount;
        AskInfo.price = _price;

        Response = false;
    }

    modifier sufficientAssets(uint _price, uint _amount) {
        // if(msg.value < _amount * _price) throw;

        _;
    }

    function vaultAssets() returns (bool) {
        return true;
    }

    function submitEscrowAsk()  returns (bool) {
        ExchangeTX e = ExchangeTX(0x692a70d2e424a56d2c6c27aa97d1a86395877b3a);
        e.submitAsk(AskInfo.price, AskInfo.amount);
        return true;
    }

    function withdrawAssets() {

    }
}
