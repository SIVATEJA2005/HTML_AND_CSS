const input=document.querySelector("input")
const btn=document.querySelector("button")
const qrimage=document.querySelector("#qrImage")

const imageCont=document.querySelector(".imagecont")


function qrcodeGenerate(){

    // const qr_promise=await fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value)
    // const qrcode=await qr_promise.json();
    // console.log(qrcode);

    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    imageCont.classList.add("transform")



}

btn.addEventListener("click",()=>{
    qrcodeGenerate()
})

