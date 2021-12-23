let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let listEl = document.getElementById("list-el")
let alertEl = document.getElementById("alert-el")
let content = inputEl.value
 
let tasks=[]
 

 function buttonClick(){
     

    if(inputEl.value === ""){
     
    }
    else{


    tasks.push(inputEl.value) 
    renderTasks()
    

    }
 }
 


function renderTasks(){

    listEl.innerHTML=""
    for (i=0 ; i< tasks.length ; i++){

    
        listEl.innerHTML += "<li>" + tasks[i] + "<button id='delete-el' onclick='deleteEl("+i+")'><i id= 'uji' class='fa fa-trash'></i></button></li> <br>"
        inputEl.value=null
        
        alertEl.textContent = "You have" + " " + tasks.length + " " +"pending task(s)"
       
    }
}


function deleteEl(i){

    tasks.splice(i , 1)
    
    listEl.innerHTML = " "
    
    renderTasks()
    console.log(tasks.length) 
    alertEl.textContent = "You have" + " " + tasks.length + " " +"pending task(s)"
}

 

 






 

     







