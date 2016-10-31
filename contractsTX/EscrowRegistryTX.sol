contract EscrowRegistryTX {

    mapping(address=>address) BidContractList;
    mapping(address=>address) AskContractList;

    // need someway to check that contracts are valid TX escrow contracts

    function addBidEscrow(address _bidcontract) {
        BidContractList[msg.sender] = _bidcontract;
    }

    function addAskEscrow(address _askcontract) {
        AskContractList[msg.sender] = _askcontract;
    }
}
