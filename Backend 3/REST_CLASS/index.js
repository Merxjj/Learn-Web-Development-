const express = require("express");
const { url } = require("inspector");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override'); 
const app = express();
const port = 8080;
const path = require("path");

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"views")));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    console.log("server working");
    res.send("server working properly");
})

let posts = [
    {   id : uuidv4(),
        user : "Meraj",
        content : "I am a fullstack developer"
    },
    {  id : uuidv4(),
        user : "ALI",
        content : "I am openCV"
    },
    {  id : uuidv4(),
        user : "Garvit",
        content : "laadle mai "
    }

];
//implementing GET/posts
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})



//implementing /posts/new -> to show form to get id and content data
app.get("/posts/new",(req,res)=>{

    res.render("form.ejs");
    console.log("form showed");

})

app.post("/posts",(req,res)=>{
    let {user , content} = req.body;
    console.log(req.body);
    let id = uuidv4();
    posts.push({id,user,content});
    console.log("post working");
    res.redirect("/posts");
});

// to get content of only one id 
// make a new post.ejs 

app.get("/posts/:id",(req,res)=>{

    let { id } = req.params;
    console.log(`${id} working properly `);
    let post = posts.find((p)=> id === p.id);
    
    console.log(post);
    res.render("post.ejs",{post});

    
});
/// get to the form to edit post content 

app.get("/posts/:id/edit",(req,res)=>{ 
    let {id } = req.params;

    let post = posts.find((p)=> id === p.id);
    console.log(post);
    console.log(id);
    res.render("edit.ejs",{post});
});

// to edit post content after getting the content in form 
app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let { content } = req.body;
    let post = posts.find((p) => id === p.id);
    if (post) {
        post.content = content;
    }
    res.redirect("/posts");
});

//Destroy route

app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let posts = posts.filter((p)=> id === p.id);
    console.log("post deleted");
    res.redirect("/posts");
});






// listening on this port
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})