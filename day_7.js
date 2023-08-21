//Nested loop =loop vitra loop
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        console.log("inside inner loop")
    }
    console.log("outside outer loop")
}
// for(i=0;i<5;i++){
//     let test=[];
//     for(j=0;j<5;j++)
//     console.log(test.join(","))
// }
for(i=1;i<=10;i++){
for(j=1;j<=10;j++){
    mul=i*j
    console.log(`${i}*${j}=${mul}`)

}
}
for(k=1;k<=10;k++){
    console.log(`table of ${k}`);

for(j=1;j<=10;j++){
    mul=k*j
    console.log(`${k}*${j}=${mul}`)
}
}
//Array
let arr=[1,2,3]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

let newArray=[] //  empty array-value rakheko push use garera last ko rakhthiyo
newArray.push(1)
newArray.push(8)
newArray.push(10)
newArray.push("string")
console.log(newArray)
console.log(newArray.length)

/*newArray.pop() // pop le last element hatauxa
console.log(newArray)*/

newArray.shift() // agadi ko element hatauxa
console.log(newArray)
newArray.unshift("element at first")//first ma gayera add garxa naya element
console.log(newArray)

let Arr=[1,4,0,7,100,8,32]; 
for(i=0;i<=Arr.length;i++)
{
    console.log(Arr[i])
}

let sum=0
let array=[1,4,0,7,100,8,32];
for(i=0;i<=array.length-1;i++)
{
  sum=sum+array[i]  
   
}
console.log(sum)