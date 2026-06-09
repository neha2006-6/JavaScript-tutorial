//singleton
//object.create
//object literal


const mysym=Symbol("my symbol");

const jsuser = {
    name: "neha",
    "full name": "Neha Gujaran",
   [mysym]:"my symbol value",
    age: 18,
    loaction: "Udupi",
    email: "neha@gmail.com"
}

console.log(jsuser)
console.log(jsuser.name);
console.log(jsuser["full name"]);//if u declared as a string then u have access it using bracket notation
console.log(jsuser.age);
console.log(jsuser[mysym]);//accessing symbol property using bracket notation


jsuser.age=19;//updating the age property
console.log(jsuser.age);

// object.freeze(jsuser);//freezing the object to prevent any modifications


jsuser.greeting=function()
{
    console.log("Hello, I am");
}

jsuser.greeting2=function()
{
    console.log(`Hello, I am ${jsuser.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());