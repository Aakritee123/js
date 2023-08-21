//STRING
let collegeName="nepathya"
console.log(collegeName.length) //calcute length of string
console.log(collegeName.toUpperCase())//changing nepathya to uppercase
console.log(collegeName.toLowerCase())//upper and lower case are property so we use ()
console.log(collegeName.slice(0,4))//writing word inseperate line giving condition like 0to3
console.log(collegeName.slice(2,8))
//Split method
let commaString="Nepathya,College";
let spaceString="Nepathya College Rita Gita SITA";
console.log(commaString.split(","));
console.log(spaceString.split(" "));

//numbers
let num1="5";
console.log(typeof num1);//string to num
let num2=parseInt(num1);
console.log(typeof num2);//number
console.log(parseInt("someRandomString"));//NaN not a number
let num3=18
console.log(typeof num3.toString())
console.log(num3.toString(2))//to binary
console.log(num3.toString(16))//to hexadecimal

let num4=5.45678903524565
console.log(num4.toFixed(0))
console.log(num4.toFixed(1))
// check age
let age=19
if (age>18){
    console.log("you can vote")
}   
else
{
    console.log("you cannot vote")
}
// to check number greater than 0 or smaller than zero
let value=-1
if (value>1){
    console.log("greater than 0")
}   
else 
{
    console.log("smaller than 0")
}