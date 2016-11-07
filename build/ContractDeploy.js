var TestRPC = require("ethereumjs-testrpc");
var Web3 = require("web3")
var web3 = new Web3();
var server = TestRPC.server();

server.listen(8545, function(err, blockchain) {
  if(!err) {
    console.log('test rpc started on port 8545')
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
console.log('made ithere')
    var coinbase = web3.eth.coinbase;

    console.log(coinbase)
  } else {
    console.log(err)
  }
})
