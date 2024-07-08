const questionele=document.querySelector(".questions h3")
const options=document.querySelector(".opitons button")
const btn=document.querySelector(".btn button")

questions=[
    {
        question:"largest continent?",
         answer:[
            {option:"america",correct:false},
            {
                option:"africa",correct:false
            },
            {
                option:"asia",correct:true
            },
            {
                option:"australia",correct:false
            }

         ]

        },
        {
            question:"oldest country?",
             answer:[
                {option:"india",correct:true},
                {
                    option:"china",correct:false
                },
                {
                    option:"iran",correct:false
                },
                {
                    option:"australia",correct:false
                }
    
             ]
    
        },
        {
            question:"biggest animal?",
             answer:[
                {option:"shark",correct:false},
                {
                    option:"blue whale",correct:true
                },
                {
                    option:"lion",correct:false
                },
                {
                    option:"dog",correct:false
                }
    
             ]
    
        }
]

let currentIndex=0;
let score =0;


function startQUiz()
{
    currentIndex=0;
    score =0;
    btn.innerHTML="NEXT";
    showQuestions();

}

function resetQuestions(){

    while(document.querySelector(".options").firstChild){
        document.querySelector(".options").firstChild.remove()
    }


}





function showQuestions(){

    resetQuestions()
    

    let currentQuestion=questions[currentIndex].question
    var questionNO=currentIndex+1;

    questionele.innerHTML=questionNO+"."+currentQuestion;

    questions[currentIndex].answer.forEach(element => {




        let option=document.createElement("button")
        option.innerHTML=element.option
        // let un_order_list=document.querySelector("ul")
        // un_order_list.appendChild(option)
        option.dataset.correct=element.correct

        
        
        document.querySelector(".options").appendChild(option)

        option.addEventListener("click",(e)=>{
            if(element.correct==true){
                option.style.background="rgb(134, 206, 134)"
                score++; 
            }
            else{
                option.style.background="red"
                
            }

            selectAnswer(e);
        })

        
        


    });

}


function selectAnswer(e){

    console.log(  document.querySelectorAll(".options button"))

    document.querySelectorAll(".options button").forEach(ele=>{

        console.log(ele.dataset.correct,typeof ele.dataset.correct )

        if(ele.dataset.correct==="true")
        {
            
            ele.style.background="rgb(134, 206, 134)"
        }
        ele.disabled=true
            
            
        
    })
    btn.style.display="block";
   

    
}


function showScore(){
    resetQuestions()
    questionele.innerHTML=`Your Score is ${score} out of ${questions.length}!`

    btn.innerHTML="play again"
}



btn.addEventListener("click",()=>{

    if(btn.innerHTML == "play again"){
        startQUiz()
    }


    currentIndex++;
    if(currentIndex < questions.length){
       
        showQuestions()
    }
    else{
        showScore()
    }
})


startQUiz()