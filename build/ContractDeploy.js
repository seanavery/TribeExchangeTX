var TestRPC = require("ethereumjs-testrpc");
var Promise = require("bluebird");
var Web3 = require("web3")
var web3 = new Web3();
// var server = TestRPC.server();
web3.setProvider(TestRPC.provider());

var eth = Promise.promisifyAll(web3.eth);

// server.listen(8545, function(err, blockchain) {
//   if(!err) {
//     console.log('test rpc started on port 8545')
// //     web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
// // console.log('made ithere')
// //     var coinbase = web3.eth.coinbase;
// //
// //     console.log(coinbase)
//   } else {
//     console.log(err)
//   }
// })

var coinbase = eth.coinbase;
console.log(coinbase)
// web3.eth.getBalance(web3.eth.coinbase, (err, res) => {
//   console.log(err + res)
// })
