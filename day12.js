let i=2;
let a=i;
console.log(a); //primitive type

let car={
    name:"BMW",
    price:200
}
let car2=car; // reference type
car2.place="Butwal"
console.log(car.place)
console.log(car2.name)
//copying object
///let collegeInfo={name:"Nepathya College",address:"Manigram"}
/*let collegeInfo2=Object.assign({},collegeInfo);
collegeInfo2.place="Shankharnagar" 
console.log(collegeInfo) */
/*
let collegeInfo2={...collegeInfo}; //spread operator
collegeInfo2.address="Shankharnagar";
console.log(collegeInfo);
*/

let collegeInfo={
    name:"Nepathya college",
    address:{ 
        ward:5,
        street:"random street", 
        state:"Lumbini"
    }
};
//let collegeInfo2={...collegeInfo};
//let collegeInfo2=JSON.parse(JSON.stringify(collegeInfo));
let collegeInfo2=structuredClone(collegeInfo);
collegeInfo2.address.state="Bagmati";
console.log(collegeInfo.address);




