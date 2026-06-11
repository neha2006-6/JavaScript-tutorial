const user=[]
if(user)
{
    console.log("got user email");
}
else{
    console.log("bhhsd");
}

//false values
// false,0,-0,bigint 0n,null, undefined,nan
//truthy values
//"0","fasle","",{},[],function(){}

if(user.length===0)
{
    // console.log("array")
}

const emptyObj={}

if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty")
}

// ??nullish coaleccing operator(??):null undefined

let val1;
// val1=5 ?? 10

// val1 = null ??10
// val1 =undefined ?? 16
val1=null ??10 ??20


// console.log(val1);

//ternary operator

//condition ? true: false

const tea=100;
tea <=80 ? console.log("less than 90"):console.log("greater than 90")


