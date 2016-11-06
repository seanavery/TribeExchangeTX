const fs = require('fs')
const testFolder = './contractsTX'

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
    })
  }
  else {
    console.log(err)
  }
})

// const testFolder = './tests/';
// const fs = require('fs');
// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// })
