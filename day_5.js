//for loop 
for(i=1;i<=10;i++)
{
    console.log(i)
}


for(i=10;i>=1;i--)
{
    console.log(i)
}

//odd and even
for(i=1;i<=20;i+=2){         //i=0 rakhevani even hunxa
    if(i % 2 === 0){
        console.log("even "+i )
    }
    else{
        console.log("odd "+i)
    }
}
 // multiply by 3 upto 10
 for(i=3;i<=10;i+=3){
    console.log(i)
 }
 // numbers upto 10 but without 3
 for(i=1;i<=10;i+=1){        
    if(i ==3){
        {
            continue
        }
        console.log(i )
    }
    // 
    }
    for(i=1;i<5;i++)
{
    console.log(i)
    break;
}
for(i=1;i<5;i++)
{
    console.log(i)
    continue
    console.log("test")    
}
//multiplication table of 2;
for(i=2,j=1;j<=10;j++){
    console.log(` 2 * ${j} =${i*j}`)
 }
// console.log(`my name is ${Name}`)