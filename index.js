let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let listEl = document.getElementById("list-el")
let tasks=[]

 

    


buttonEl.addEventListener("click" , function(){
    listEl.innerHTML=" "
    let content = inputEl.value
    tasks.push(content) 
    
 for (i=0 ; i< tasks.length ; i++){

    
    listEl.innerHTML += "<li>" + tasks[i] +"</li>" 
 
 }

})
