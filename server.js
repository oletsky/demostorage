let express = require('express');

let server=express();
const PORT=8888;
server.listen(PORT);
console.log('Server is running on port '+PORT);

server.use(express.static(__dirname));
server.use(function(req,res,next){
    console.log("Dear client connected");
   next();
});

server.get('/', function(req, res){

    res.sendFile(__dirname+"/rootpage.html");
});