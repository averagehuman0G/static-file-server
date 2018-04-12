const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    //get the path to the file
    const path = __dirname + '/public' + req.url

    fs.stat(path, (err, stats) => {
      //if this errors then there is no file and it is a 404
      if(err) {
        res.statusCode = 404;
        res.write('404');
        res.end();
      } else if(stats.isFile()) {
        
        //create a read stream if it is a file and it exists
        const fileStream = fs.createReadStream(path);

        fileStream.on("open", function() {
          //GET MIME TYPE
          // res.setHeader to mime type

          res.statusCode = 200;
          fileStream.pipe(res);
        });


        fileStream.on("error", function(err) {
          res.statusCode = 403;
          res.write("There was an error with the file permissions");
          res.end();
        });
      } else {
        // it is a directory and we don't want to give access to it
        res.statusCode = 403;
        res.write("No access is given to directories");
        res.end();
      }
    });
  }).listen(4000);




