const input_box=document.querySelector("input")
const btn=document.querySelector("button")
const para=document.querySelector("p")
// btn.addEventListener("click",()=>{

//     if(input_box.value){
//         let year=input_box.value.split("-")[0]
//         let para=document.createElement("p")
//         para.innerHTML=`your age is ${2024-year} !`
//         let body=document.querySelector("body")
//         body.append(para)
//     }
//     else{
//         alert("enter your date of birth")
//     }
// })

function caluculate_age(){

    let birthDate=new Date(input_box.value);


    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();

    let today=new Date();

    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let d3,m3,y3;

    d3=d2-d1;
    m3=m2-m1;
    y3=y2-y1;

    para.innerHTML=`you are <span>${y3}</span> years,<span>${m3} </span> months  and <span>${d3}</span> days old`;

}

btn.addEventListener("click",()=>{
    caluculate_age()
})












   


