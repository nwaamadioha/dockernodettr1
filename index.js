import express from "express";

const app = express();


app.get("/", function(req, res){
    res.send("<h1>Hello deploying Docker to Heroku is fun</h1>");
});


const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log(`Server started on port ${port}`);
});