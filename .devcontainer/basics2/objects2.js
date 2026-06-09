// const user1=new objects()

// const user1={}
// user1.id= "1234"
// user1.name= "Samay"
// user1.isloggedin=false

// console.log(user1);


const user2 = {
  email: "h@gmail.com",
  fullname: {
    usefullname: {
      fname: "Neha",
      lname: "Gujaran"
    }
  }
}
console.log(user2.fullname.usefullname)

const obj1={1:"a",2:"b"}
const obj2={3:"n",4:"e"}

// const obj3={obj1,obj2}
// console.log(obj3)


// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3={...obj1,...obj2}
console.log(obj3)

const user=[
{
    id:1,
    email:"n@gmail.com"
},
{}
]
user[1].email
console.log(user2)
console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));

console.log(user2.hasOwnProperty('age'))


const constr={
    cname:"DAA",
    price:"23443"
}
const{cname:newname}=constr
console.log(newname)