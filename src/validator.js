
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
let respuesta;
if(sumaTotal%10==0){
respuesta=true;
} else respuesta=false;
return respuesta;
  },
  maskify :function (cardNumber){
  return cardNumber;
  },
};
export default validator;

