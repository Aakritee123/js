/////Syntax no 1
let cars={
    name:"BMW", //key:value
    price:"100k",
    speed:"200mph",
    gear:5
}
cars.insurance="20k"
console.log(cars.name,cars.price,cars.speed,cars.gear)
console.log(typeof cars)
console.log(cars.insurance)


let college= new Object();
console.log(college);{}//null

college.name="Nepathya"; //
console.log(college.name)
console.log(college['name']);

let  keyName='name'; //key ko name clear nahuda yo syntax use garni
college[keyName]
console.log(college[keyName])

let keys= Object.keys(cars);
console.log(keys);
for(i=0;i<keys.length;i++){
    let key=keys[i];
    console.log(cars[key]);
}
//
let obj={college:"Nepathya"};
let obj2=obj;
obj2.collegeName="Another college";
console.log(obj.collegeName);

let arr=[4,5,6,7]
arr2=arr;
arr2.push(15);
console.log(arr);


