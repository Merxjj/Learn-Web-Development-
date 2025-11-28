let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(event){
    if(inp.value.trim()===""){
        return;
    }
    let item = document.createElement("li");
    item.innerText = inp.value;
    inp.value = "";
    let dltBtn = document.createElement("button");
    dltBtn.classList.add("delete");
    dltBtn.innerText = "delete";
    item.appendChild(dltBtn);
    ul.appendChild(item);
    
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})
