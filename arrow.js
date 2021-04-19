//Converteix a funcions fletxa://




______________________________
function multiply(num1, num2) {
   return num1 * num2;
}
//arrow
const multiply=(num1,num2)=>
     num1*num2

_________________________________
function toCelsius(fahrenheit) {
   return (5/9) * (fahrenheit-32);
}
//arrow
const toCelsius= fahrenheit => 
 (5/9) * (fahrenheit-32);




________________________________________


// This function returns a string padded with leading zeros

function padZeros(num, totalLen) {
   var numStr = num.toString();
   var numZeros = totalLen - numStr.length;
   for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
 };

 //arrow

 const padZeros = (num,totalLen)=> {
    var numStr = num.toString();
   var numZeros = totalLen - numStr.length;
   for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
 };

__________________________________________
function power(base, exponent) { 
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
} 

//arrow
const power = (base,exponent)=>{
var result=1;
for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
};
____________________________________________
function greet(who) {
    console.log("Hello " + who);
}
// arrow
cont greet= who => 
console.log("Hello " + who);

