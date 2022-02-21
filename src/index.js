
import validator from './validator.js';
function comprobar (){
document.getElementById ("principal").style.display = "none";
document.getElementById ("welcome").style.display = "block";
}
let btn = document.getElementById ("bienvenidos");
btn.addEventListener("click",comprobar);

function confirmar (){
document.getElementById ("welcome").style.display = "none";
document.getElementById ("date").style.display = "block";
}
let  btn1 = document.getElementById("ingresar");
btn1.addEventListener("click",confirmar);

let message=document.getElementById("message");

function validarTarjeta (){
let  cardNumber= document.getElementById ("ingreso").value;

let numberValidator =  validator.isValid(cardNumber);


if (numberValidator == true){

    message.innerHTML="";
    message.innerHTML="Tarjeta válida";
    console.log(numberValidator);
} else  {
    message.innerHTML="";
    message.innerHTML="Su tarjeta no es válida";
    console.log(numberValidator);
}
}
let  btn2 = document.getElementById("buttonbuy");
btn2.addEventListener("click",validarTarjeta);



