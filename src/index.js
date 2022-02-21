
import validator from './validator.js';
function comprobar (){
document.getElementById ("principal").style.display = "none";
document.getElementById ("welcome").style.display = "block";
}
let btn = document.getElementById ("bienvenidos");
btn.addEventListener("click",comprobar);

//function confirmar (){

//}
//let  btn1 = document.getElementById("ingresar");
//btn1.addEventListener("click",confirmar);



function validarTarjeta (){
//document.getElementById ("welcome").style.display = "none";
//document.getElementById ("date").style.display = "block";
let  cardNumber= document.getElementById ("ingreso").value;
let message=document.getElementById("message");
let hide=document.getElementById ("hide");
let numberValidator =  validator.isValid(cardNumber);
let maskValidator=  validator.maskify(cardNumber);

if (numberValidator == true){
hide.innerHTML=maskValidator;
    message.innerHTML="";
    message.innerHTML="Tarjeta válida";

} else  {
    hide.innerHTML=maskValidator;
    message.innerHTML="";
    message.innerHTML="Su tarjeta no es válida";

}
}
let  btn2 = document.getElementById("buttonbuy");
btn2.addEventListener("click",validarTarjeta);



