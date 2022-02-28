
import validator from './validator.js';
function comprobar (){
document.getElementById ("principal").style.display = "none";
document.getElementById ("welcome").style.display = "block";
}
let btn = document.getElementById ("bienvenidos");
btn.addEventListener("click",comprobar);

function validarTarjeta (){

let  cardNumber= document.getElementById ("ingreso").value;
let message=document.getElementById("message");
let hide=document.getElementById ("hide");
let numberValidator =  validator.isValid(cardNumber);
let maskValidator=  validator.maskify(cardNumber);
let alertaTarjeta=document.getElementById ("alertaTarjeta");
if  (cardNumber===""){
    alertaTarjeta.innerHTML="digite su numero de tarjeta";
}
    else{
if (numberValidator == true){
hide.innerHTML=maskValidator;
alertaTarjeta.innerHTML="";
    message.innerHTML="";
    message.innerHTML="Tarjeta válida";
} else  {
    alertaTarjeta.innerHTML="";
    message.innerHTML="";
    message.innerHTML="Su tarjeta no es válida";
}
}
}
let  btn2 = document.getElementById("buttonbuy");
btn2.addEventListener("click",validarTarjeta);


document.getElementById ("message").style.display = "none";
document.getElementById ("hide").style.display = "none";

