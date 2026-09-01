const express = require('express');
const app = express();
const port = 8080;


app.use((req,res,next)=>{
    console.log('Hi i am a Middleware1');
    next();
});
app.use((req,res,next)=>{
    console.log('Hi i am  Middleware2');
    next();
});
app.use('/api',(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveAccess"){
        next();
    }else{
        res.send("access denied");
    }
    
});
app.get('/api',(req,res)=>{
    res.send("sensitive data");
});
app.get('/random',(req,res)=>{
    res.send("this is a random route");
})
app.get('/',(req, res) => {
    res.send('Hello , I am root');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});