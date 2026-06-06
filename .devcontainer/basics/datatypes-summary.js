//primitive datatypes

//7 types
//1.string
//2.number
//3.boolean
//4.null
//5.undefined
//6.symbol
//7.bigint

// const score=100;
// const score2=100.3

const is=Symbol('123')
const is1=Symbol('123')

// console.log(is==is1);

const big=135612555555821n;
// console.log(big);

//NON primitive datatypes
//array,objects,function

const hero=["ironman","spiderman","thor"]; 
let myobject={
    name:"neha",
    age:22

}

 const myfunction=function(){
    // console.log("hello world");
 }

 /********************************************* */

 //stack->primitive datatypes
//heap->non primitive datatypes

let myname="neha";
let myname2=myname;
myname2="neha kumari";
console.log(myname);
console.log(myname2);


let user={
    email:"user@gmail.com",
    upi:1223
}

let user2=user;
user2.email="user2@gmail.com";
console.log(user.email);
console.log(user2.email);