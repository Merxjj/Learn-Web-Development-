const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));//parse url encoded data and covert it in usable js form 
app.use(express.json());
app.get("/register",(req,res)=>{
    let {username,password} = req.query;

    res.send(`This is standard Get request ${username}${password}`);
    

})
app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("This is standard Post request");
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})