let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let qrImg = document.querySelector(".qrImg");

let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


function generateQr()
{
    qrImg.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value)
}