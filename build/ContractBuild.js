const fs = require('fs')
const testFolder = './contractsTX'
const solc = require('solc')


// fs.readdir(contractFolder, (err, files) => {
//   console.log(files);
//   files.forEach(file => {
//     console.log(file)
//   })
// })

fs.readdir(testFolder, (err, files) => {
  if(!err) {
    files.forEach(file => {
      console.log(file)
      var filename = './contractsTX/' + file
      fs.readFile(filename, 'utf-8', (err, data) => {
        if(!err) {
          // console.log(data)
          var output = solc.compile(data, 1)
          console.log(output.contracts)
        } else {
          console.log(err)
        }
      })
    })
  } else {
    console.log(err)
  }
})
