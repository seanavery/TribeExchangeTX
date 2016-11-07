const fs = require('fs')
const testFolder = './contractsTX'
const solc = require('solc')

fs.readdir(testFolder, (err, files) => {
  if(!err) {
    files.forEach(file => {
      console.log(file)
      var filename = './contractsTX/' + file
      fs.readFile(filename, 'utf-8', (err, data) => {
        if(!err) {
          // console.log(data)
          var output = solc.compile(data, 1)
          for (var contractName in output.contracts) {
            // code and ABI that are needed by web3
            console.log(contractName + ': ' + output.contracts[contractName].bytecode);
            console.log(contractName + '; ' + output.contracts[contractName].interface);
            
          }
        } else {
          console.log(err)
        }
      })
    })
  } else {
    console.log(err)
  }
})
