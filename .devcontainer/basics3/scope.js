// let a=10;
// const b= 20;
// var c= 30

let a=90
if(true)
{
    let a=10
    const b=5
   var c=90
  

}

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope

function one()
{
    const name = "neha"

    function two(){
        const website = "youtube"
        console.log(name)
    }
    // console.log(website);

    two()
}
// one()

if(true)
{
    const name = "neha"
    if(name === "neha")
    {
        const website = "utube"
        // console.log(name+website)
    }
    // console.log(website);
}
// console.log(name)


//////////======================
console.log(addone(5))

function addone(value)
{
    return value + 1

  
}
  

  const addtwo= function(num)
  {
    return num+2
  }
  console.log(addtwo(5))