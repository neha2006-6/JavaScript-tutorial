array=[10,20 ,30,44]


// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);

// }

for (let i = 0; i < 10; i++) {
 console.log(`outer loop value: ${i}`);
 for (let j = 0; j < 10; j++) {
   console.log(`Inner loop ${j} and inner loop ${i}`);
    
 }

}

let myarray=["flash","hdjs","rfje"]
console.log(myarray.length);
for(let i=0;i<=myarray.length;i++)
{
    // const elem=myarray[i];
    // console.log(elem);
}


for(let i=0;i<=myarray.length;i++)
{
    if(i==5)
    {
        console.log("Detected 5");
        break
    }
   
    console.log(`element is ${i}`);
}

for(let i=0;i<=myarray.length;i++)
{
    if(i==5)
    {
        console.log("Detected 5");
        continue
    }
   
    console.log(`element is ${i}`);
}