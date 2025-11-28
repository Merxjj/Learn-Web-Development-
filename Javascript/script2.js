let userSeq = [];
let gameSeq = [];
let btns = ["red","blue","purple","yellow"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(start == false){
        console.log("game start");
        start = true;
        levelUp();
    }
});

function flash(btn){
    btn.classList.add("color");
    setTimeout(function(){
        btn.classList.remove("color");
        
    },250);
    
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let random = Math.floor(Math.random()*3);
    let randomBtn = btns[random];
    let btn = document.querySelector(`.${randomBtn}`);
    flash(btn);
    gameSeq.push(randomBtn);
    console.log(gameSeq);
}

function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);

            
        }
        
    }else{
        reset();
        console.log("wrong value , game over!");
        h2.innerText = "game over , press any key to restart"
    }
}
function btnPress(btn){
    let currBtn = this;
    flash(currBtn);

    let userColor = currBtn.getAttribute("id");
    console.log(userColor); 
    userSeq.push(userColor);  
    checkAns(userSeq.length -1);  
}
let allBtns = document.querySelectorAll(".colors");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}

