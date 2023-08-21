let name="Aakritee";
console.log("My name is:" + name);//my name is aakritee
let a="Roshni"
let b="Neupane"
console.log(a+b)
console.log(a+""+b)
let Name="Rakshya"
console.log(`my name is ${Name}`) // ekkaithauma rakhna milxa ``yo sign le

let age=10;
let message=(age>=18)? "You are an adult":"You are not an adult" // ternary operator
console.log(message)

let num=3; //if if else else loop
if(num>0){
    console.log("number is positive")

if(num%2===0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}
}
else{
    console.log("number is negative")
}

//switch statement example1:
let c=3;
switch(c){
    case 1:
        c="one"
        break;
        
    case 2:
            c="two"
            break;
    case 3:
          c="three"
                break;        

     default:
        c="not found"
        break;      

}
console.log(`the value is :${c}`)
//ex-2
let num1=prompt("Enter the operation you want to perform(eg. +,-,*,/)" )
let num2=prompt("Enter a number")
let num3=prompt("Enter a number")
switch(num1){
    case"+":
        num1=num2+num3
        alert(`the sum is:${num1}`)
        break
        case"-":
        num1=num2-num3
        alert(`the diference is:${num1}`)
        break
        case"*":
        num1=num2*num3
        alert(`the multiplication is:${num1}`)
        break
        case"/":
        num1=num2/num3
        alert(`the division is:${num1}`)
        break
        case"%":
        num1=num2%num3
        alert(`the mod is:${num1}`)
        break
        default:
        num1="not found"     

}
console.log(`the value is ${num1}`)




