const btn = document.getElementById("btn");
const input = document.getElementById("input");
const qrCodeBox = document.getElementById("qr");
const imgQrcode = document.getElementById("imgQrcode");

async function Generate() {
    if (input.value.length > 0) { 
        imgQrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        qrCodeBox.classList.add("showQrcode")
        input.value = ""; 
    } else {
        input.classList.add("error")
        setInterval(() =>{
            input.classList.remove("error")
        }, 1000)
        
    }
    
}

btn.addEventListener("click", Generate);
