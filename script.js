let form = document.getElementById("taskform");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let input = document.getElementById("taskinput");
    let inputvalue = input.value;
    let li = document.createElement("li");
    li.textContent = inputvalue;
    let ul =document.getElementById("tasklist");
    ul.appendChild(li);
    
    
    // bouton supprimer
    let button = document.createElement("button");
    button.innerHTML = "supprimer";
    button.addEventListener("click",function(){
        li.remove()
    });
    
    
    // bouton modifier
    let btn = document.createElement("button");
    btn.textContent = "modifier";
    btn.addEventListener("click",function(){
        let inputM = document.createElement("input");
        li.appendChild(inputM);
        inputM.setAttribute("type", "text");
        inputM.value = inputvalue;
        
        
        // bouton sauvegarder
        let btnS = document.createElement("button");
        btnS.textContent = "sauvegarder";
        li.appendChild(btnS);
        btnS.addEventListener("click", function(){
            li.replaceChild()
        })
    });
    li.appendChild(btn);
    li.appendChild(button);
    
    });