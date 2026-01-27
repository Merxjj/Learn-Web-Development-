const express = require("express");
const app = express();

let port = 8080;

//listening
app.listen(port,()=>{
    console.log(`listening to request on port ${port}`);
})




//Sending a response
// app.use((req,res)=>{
//    // console.log(req);
//    //console.log(res);
//     console.log("new incoming request");
//    // res.send("Hi how are you");
//     //res.send("<h1> HTML </h1>");
//     res.send({
//         color:"apple",
//         name:"apple"
//     })

// })






//Routing
// app.get("/",(req,res)=>{
//     res.send("you contacted root path");
// });
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple paath");
// });
// app.use((req, res) => {
//     res.status(404).send("this path doesn't exist");
// });





//Path Parameters
app.get("/:username/:id",(req,res)=>{
    let{username,id}= req.params;

    res.send(`welsome to the page @${username}!`);
});


