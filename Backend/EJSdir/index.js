const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

//public folder to serve for static files such as html, css , js

// app.use(express.static(path.join(__dirname,"public")));
// we can use public/css to include file in the folder css 

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

//app.listen() is same for every ejs file
app.set("view engine","ejs"); 
app.set("views",path.join(__dirname,"/views"));  

//home.ejs
app.get("/",(req,res)=>
{
    res.render("home.ejs");

});

//rolldice.ejs
// app.get("/rolldice",(req,res)=>{
//     res.render("rolldice.ejs");
// })
// app.get("/rolldice",(req,res)=>{
//     let diceVal = Math.floor(Math.random()*6)+1;
//     res.render("rolldice.ejs",{diceVal});
// })








//instagram.ejs and loops
// app.get("/ig/:username",(req,res)=>{
//     const followers = ["adam","smith","bob","john"];
//     let {username} = req.params;
//     res.render("instagram.ejs",{username, followers});

// });



//instagram.ejs2 with cats and dogs json data

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    //console.log(instaData);
    
    const data = instaData[username]; //used to access key name's value
    if(!data){
        res.render("home.ejs");
    }else{
    console.log(data);

    res.render("instagram2.ejs",{data});
    }
});



app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});