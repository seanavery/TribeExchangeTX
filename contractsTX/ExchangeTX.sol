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
            return true;
        }
        Bids[bid_index].amount--;
        Asks[ask_index].amount--;
        if(Bids[bid_index].amount == 0) {
            if(bid_index == 0) {
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
