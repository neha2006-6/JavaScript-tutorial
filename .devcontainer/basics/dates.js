let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
// console.log(mydate.getFullYear());


let mycreate=new Date("2020-01-01")
// console.log(mycreate);


let mytime=Date.now()
console.log(mytime);
console.log(mycreate.getTime());

console.log(Math.floor(Date.now()/1000));


let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

// newDate.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'})


