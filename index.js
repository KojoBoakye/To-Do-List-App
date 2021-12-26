 
let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let listEl = document.getElementById("list-el")
let alertEl = document.getElementById("alert-el")
let button1El = document.getElementById("button1-el")
let content = inputEl.value
let toggleEl = document.getElementById("all-el")
let indicatorEl = document.getElementById("small-el")
let backindicatorEl = document.getElementById("big-el")
let bigbodyEl = document.querySelector("body")
let iconEl = document.getElementById("icon-el") 
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

    
        listEl.innerHTML += "<li>" + "<span>"+ tasks[i] + "</span><button id='delete-el' onclick='deleteEl("+i+")'><i id= 'uji' class='fa fa-trash'></i></button> </li> <br>"
        inputEl.value=null
        
        alertEl.textContent = "You have" + " " + tasks.length + " " +"pending task(s)"
       
if( tasks.length > 1){
    
    button1El.innerHTML= "<button id='clear-el' onclick='clearOff()'>Clear All</button>"
    
} else{
    button1El.innerHTML=""
}

    }
}


function deleteEl(i){

    tasks.splice(i , 1)
    
    listEl.innerHTML = " "
    
    renderTasks()
    
    alertEl.textContent = "You have" + " " + tasks.length + " " +"pending task(s)"
  
}



function clearOff(){
     
    tasks= []
    button1El.innerHTML=""
    renderTasks()
    alertEl.textContent = "You have" + " " + tasks.length + " " +"pending task(s)"




}


 function toggle(){

 indicatorEl.style.cssText="float:right; background-color: rgb(25, 180, 128);"
 backindicatorEl.style.cssText="background:white;"
 bigbodyEl.style.cssText="background:#0b2027;"
 inputEl.style.cssText="background:#B1D0E0; color:white;"
 iconEl.innerHTML="     <i class='fa fa-moon-o' id='moon'></i> "






 toggleEl.addEventListener("click" , function(){

    indicatorEl.style.cssText="float:left; background-color: white;"
    backindicatorEl.style.cssText="background:rgb(70, 71, 71);"
    bigbodyEl.style.cssText="background:rgb(214, 237, 243);"
    inputEl.style.cssText="background:white;"
    iconEl.innerHTML=" <i class='fa fa-sun-o' id='sun'></i> "

    toggleEl.addEventListener("click" , function(){

        toggle()
         
        })
    
   })

  
 }






 


 








 




 

     







