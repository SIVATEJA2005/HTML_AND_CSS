const inputBox=document.querySelector("input")
const list_container=document.querySelector("ul")

function addTask(){

    if(inputBox.value===''){
        alert("you must enter something")
    }

    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        list_container.append(li)
        let span =document.createElement("span")
        span.innerHTML="\u00d7";
        li.append(span)


    }

    inputBox.value='';



}



   
list_container.addEventListener("click",(e)=>{

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("tasks")
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }





})
  