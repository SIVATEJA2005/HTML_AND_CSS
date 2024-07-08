let nameError=document.getElementById("name-error");

let numberError=document.getElementById("num-error");

let emailError=document.getElementById("email-error");

let textError=document.getElementById("text-error");

let btn=document.getElementById("btn-error");


function validName(){

    let name=document.getElementById("name").value;




    if(name.length == 0)
    {
        nameError.innerHTML="Name is requiured";
        return false;

    }
    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML="Enter full name";
        console.log("checking>>>>")
        return false;
    }
    else{
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true ;
    }




}

function validNumber(){

    let num=document.getElementById("number").value;

    if(num.length==0){
        numberError.innerHTML="Number required";
        return false;
    } 
     else if(!num.match(/^[0-9]{10}$/)){
        numberError.innerHTML="only digits please";

        return false;
       
    }
    else if(num.length!=10){
        numberError.innerHTML="phone number should be 10 digits"

        return false;
       
        
    }

    
  
    else{
        numberError.innerHTML='<i class="fa-solid fa-circle-check"></i>';

        return true;
    }




}

function validEmail(){

    let email=document.getElementById("email").value;

    if(email.length==0)
    {
        emailError.innerHTML="eamil is required"
        return false;
    }
    else if(!(email.match(/^[A-Za-z\._\-[0-9]*@[A-Za-z]*[\.][a-z]{2,4}$/))){
        emailError.innerHTML="Invalid eamil";
        return false;
    }
    else{
        emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        console.log("sivateja");
        return true
    }

}



function validMessage(){

    let message=document.getElementById("text").value;
    let req=30;
    let still_required=req-message.length;
    


    if(message.length==0)
    {
       textError.innerHTML="enter the text"
       return false;
    }
    else if(message.length<req)
    {
        textError.innerHTML=still_required+"more items required"
        console.log(still_required)
        return false;
    
    }
    else{
        textError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

}


function validate()
{

    let submitbtn=document.querySelector(".submitbtn")
    if(!validName()||!validNumber()||!validEmail()||!validMessage()){


        btn.style.display="block";

        setTimeout(() => {
            btn.style.display="none"
            
        }, 5000);
        btn.innerHTML="please fix error"

        // return false;
    }







}







