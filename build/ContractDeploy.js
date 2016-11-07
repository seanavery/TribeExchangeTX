var TestRPC = require("ethereumjs-testrpc");
var server = TestRPC.server();
server.listen(8545, function(err, blockchain) {
  if(!err) {
    console.log('test rpc started on port 8545')
  } else {
    console.log(err)
  }
});
