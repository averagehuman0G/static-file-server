const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    //get the path to the file
    const path = __dirname + '/public' + req.url

    fs.stat(path, (err) => {
      if(err) {
        res.statusCode = 404;
        res.write('404');
        res.end();
      } else {
        const fileStream = fs.createReadStream(path);
        fileStream.on("open", function() {
          res.statusCode = 200;
          fileStream.pipe(res);
        });
        fileStream.on("error", function(err) {
          res.statusCode = 404;
          res.write('404');
          res.end();
        })
      }
    })
    //create a read stream if all is good and read the file

    
    // pipe it to the response strem

  })
  .listen(4000);



//check if requested file exist and if it is indeed a file

