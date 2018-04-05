const fs = require('fs');
const http = require('http');

//Create server
const http = require('http');
http
  .createServer((req, res) => {
    // server code
    console.log(`${req.method} ${req.url}`);
    res.end('Just a server');
  })
  .listen(4000);

//get the path to the file

//check if requested file exist and if it is indeed a file

//create a read stream if all is good and read the file
// pipe it to the response strem
