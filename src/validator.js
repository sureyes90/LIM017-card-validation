
const validator = {
  isValid: function (cardNumber){
// pasar los numeros a un array

let newArray = Array.from(cardNumber);

// los string del array a  numeros
let secondArray =[];
for(let i=0; i<newArray.length; i++){
  secondArray.push(parseInt(newArray[i]));
}
//invertir los numeros del array
let reverseArray=secondArray.reverse();
let sumaPares = 0;
let sumaImpares=0;
//ubicar los numeros de indice par
for(let i=1 ; i<reverseArray.length; i+=2){
//multiplicar por 2 los numeros encontrados
  let positionPar=reverseArray[i]*2;
  if (positionPar>=10){
  sumaPares= sumaPares+ 1+ positionPar%10;
  }
  else sumaPares= sumaPares + positionPar;
}
for (let i=0;i<reverseArray.length;i+=2){
sumaImpares=sumaImpares + reverseArray[i];
}
let sumaTotal=sumaPares+sumaImpares;

if(sumaTotal%10==0){
return true;
} else  {
return false;
}
  },
  maskify :function (cardNumber){
    let numberCard = cardNumber.length;
    let mascara =numberCard-4;
    let ocultar=cardNumber.slice(mascara,numberCard);
    let mascaraCard;
if(numberCard > 5){
mascaraCard = "#".repeat(mascara) + ocultar;

 }else {
  
   mascaraCard = cardNumber;
 }
  return mascaraCard;
  }
}
export default validator;

