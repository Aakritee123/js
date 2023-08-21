//For each
let a=[1,2,3,4,5]
// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }

a.forEach(function(item){ //function vitra function
console.log(item);
})

function isPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
            return console.log("composite");
    }
}
      console.log("prime")   
    

}
isPrime(1)



function test_prime(n)
{

  if (n===1)
  {
    return console.log("not prime no.")
  }
  else if(n === 2)
  {
    return console.log("prime no.");
  }else
  {
    for(i = 2; i< n; i++)
    {
      if(n % i === 0)
      {
        return console.log("not prime no.");
      }
    }
    return console.log("prime no.");  
  }
}

console.log(test_prime(37));