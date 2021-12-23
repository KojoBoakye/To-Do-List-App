let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let listEl = document.getElementById("list-el")
let alertEl = document.getElementById("alert-el")
let tasks=[]

 

    


buttonEl.addEventListener("click" , function(){
    listEl.innerHTML=" "
    let content = inputEl.value
    tasks.push(content) 
    
 for (i=0 ; i< tasks.length ; i++){

    
    listEl.innerHTML += "<li>" + tasks[i] + " <button class='yapi' id='delete-el" + i + " ' onclick='deleteEl()'><i id= 'uji' class='fa fa-trash'></i></button></li>"

    inputEl.value=null

     alertEl.textContent = "You have" + " " + tasks.length + " " +"pending task(s)"
 }
 

})










 

     







