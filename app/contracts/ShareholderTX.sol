contract ShareholderAgreement {

    uint totalShares;

    struct Shareholder {
        uint amount;
        uint date;
    }

    mapping(address=>Shareholder) public Shareholders;

    function ShareholderAgreement(uint _totalShares) {
        // will likely support customized implementation
        totalShares = _totalShares;
    }

    // modifier sufficientAssets(uint _amount) {
    //     if(Shareholders[msg.sender].amount <  _amount) throw;
    //     _;
    // }

    function transferShares(uint _amount) returns(bool) {
        Shareholders[msg.sender].amount = _amount;
        Shareholders[msg.sender].date = now;
        return true;
    }

    function getAddress() returns(address) {
        return msg.sender;
    }
}
