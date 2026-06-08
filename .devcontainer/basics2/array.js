//array

const arr=[1,2,3,4,5];
const myhero=["superman","batman","spiderman"]; 
console.log(arr[0]);
console.log(myhero[1]);

//array method
myhero.push("ironman");
myhero.push(1)
arr.unshift(0);
console.log(arr.includes(0));
console.log(myhero);

//sllice splice

console.log(myhero.slice(0,2));
myhero.splice(1,1,"wonderwoman");
console.log(myhero);

