const fs = require('fs')
const testFolder = './contractsTX'

// fs.readdir(contractFolder, (err, files) => {
//   console.log(files);
//   files.forEach(file => {
//     console.log(file)
//   })
// })
var contract_strings = []

fs.readdir(testFolder, (err, files) => {
  if(!err) {
    files.forEach(file => {
      console.log(file)
      fs.readFile(file, (err, data) => {
        if(!err) {
          console.log(data)
          contract_strings.push(data)
        } else {
          console.log(err)
        }
      })
    })
  }
  else {
    console.log(err)
  }
})
