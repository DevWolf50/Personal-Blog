var http = require("http");
var router = require("./router.js");


http.createServer(function(request,response){
  router.home(request,response);
  router.user(request,response);
}).listen(3000);
console.log("server running at 127.0.0.1:1337")
