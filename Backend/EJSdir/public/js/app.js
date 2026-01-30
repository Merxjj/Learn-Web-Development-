let buttons = document.querySelectorAll("button");

for(let btns of buttons){
    btns.addEventListener("click",()=>{
        console.log("button was clicked");
    })
}