// function print(){
//     console.log("hello world")
// }
////FUNCTION
/*function sum(a,b){ //a,b parameter
    let sum=a+b
    console.log(sum)
}
sum(10,11) //attributes
sum(3,9)*/


function sum(a,b){
    let c=a+b
    return c;
}
//let d=sum(20,40)
console.log(sum(20,50))
//program to reverse number
function reverseNumber(n){ //n=12345
    let a=n.toString();//a=12345
    let b=a.split("");//b=1,2,3,4,5
    let c=b.reverse();//c=5,4,3,2,1
    let d=c.join("")//d=54321
    console.log(d)
}
reverseNumber(12345)
reverseNumber(98765)

//another process

// console.log(reverse(3456))
// let a=reverse(3456)
// console.log(a)


//WAP  with function to check number is odd or even



//WAP too reverse and check the number is odd or even
// let b=reverse(65);
// check(b)

// function check(b){
//     if(b%2==0){
//         console.log("even")
//     }
//     else
//     {
//     console.log("odd")
//     }
// }


function reverse(n){
    let a=n.toString()
    return a.split("").reverse().join("")
}

function check(n){
    
        if(n%2==0)
        {
     console.log("even")
        } else{
            console.log("odd")
        }
    }



function example(){
    let a=reverse(456)
    check(a)
    // console.log(a)
}

example()