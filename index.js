//import express module from express framework
import express from "express";
//assign express module to variable "app"
const app = express();
//assign port number to variable port
const PORT = 3000;
//make get request to server 
app.get("/", function(req, res){
    // console.log(req);
    res.send("<h1>Hello</h1>");
});

//listen for request at port 3000
app.listen(3000, function(){
    console.log("Server started on: http://localhost:3000/");
});