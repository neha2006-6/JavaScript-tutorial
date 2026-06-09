
// function Say(){
//     console.log("hello");
// }
// Say()

// function twoadd(n1,n2)//n1 and n2 are parameter
// {
//     console.log(n1+n2);
// }
// twoadd(3,110)//3 and 110 is arumnet 

function addtwo(n1,n2)
{
//    let result=n1+n2
//    return result;
return n1+n2;
}

const result=addtwo(3,5)
// console.log("Result is ",result);


function loginuser(user="samay")
{
    if(user===undefined){
        console.log("Please enter th eusername");
        return 

    }
    return `${user} just logged in `
}


// console.log(loginuser())


function calculateprice(val1,val2,...num1)//... is a operator called rest 
{
return num1
}
console.log(calculateprice(200,400,500,267))

// const user=
// {
//     name: "neha",
//     price=6367
// }
// function handleobject(any)
// {
//     console.log(`user name is ${any.name} and price is ${any.price}`)
// }
// handleobject({
//     name:"sam",
//     price=792
// })
const  myarray=[200,400,46556]
function returnarr(getarray)
{
    return getarray[1]
}
console.log(returnarr(myarray))