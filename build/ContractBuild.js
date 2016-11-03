const fs = require('fs')

fs.readdir('../contractsTX', (err, files) => {
  console.log(files);
})
