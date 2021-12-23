let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let listEl = document.getElementById("list-el")
let alertEl = document.getElementById("alert-el")
 
let tasks=[]

 

    


 function buttonClick(){
    listEl.innerHTML=" "
    let content = inputEl.value
    tasks.push(content) 
    renderTasks()
     
 }
 






function renderTasks(){


    for (i=0 ; i< tasks.length ; i++){

    
        listEl.innerHTML += "<li>" + tasks[i] + " <button id='delete-el' onclick='deleteEl("+i+")'><i id= 'uji' class='fa fa-trash'></i></button></li>"
    
        inputEl.value=null
         

         alertEl.textContent = "You have" + " " + tasks.length + " " +"pending task(s)"
    
}
}









function deleteEl(i){

    tasks.splice(i , 1)
    listEl.innerHTML = " "
    renderTasks()
     
}

 









 

     







