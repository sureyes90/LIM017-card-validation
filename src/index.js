
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

function validar (){
    document.getElementById ("date").style.display = "none";

let  cardNumber= document.getElementById ("ingreso").value;
validator.isValid(cardNumber);
let numberValidator =  validator.isValid(cardNumber);
alert(numberValidator);
}
let  btn2 = document.getElementById("buttonbuy");
btn2.addEventListener("click",validar);

