const express = require("express");
const { url } = require("inspector");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"views")));

app.get("/",(req,res)=>{
    res.send("app working properly");
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})