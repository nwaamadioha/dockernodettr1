import express from "express";

const app = express();


app.get("/", function(req, res){
    res.send("<h1>Hello I have learnt Docker and it's fun</h1>");
});


const port = 3000 || process.env.PORT
app.listen(port, function(){
    console.log("Server started on port 3000");
});