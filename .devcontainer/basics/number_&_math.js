const score=400

const balance=new Number(1000)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const other=2356.5678
// console.log(other.toPrecision(3));

const hundred=1000000000000000000000000000000000000
// console.log(hundred.toLocaleString('en-IN'));

//****************************Maths****************** */

// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));


console.log(Math.random());//gve ans between 0 and 1
console.log((Math.random()*10)+1);//if we mutiply 10 then it will give us ans between 0 and 10 but if we add 1 then it will give us ans between 1 and 10
console.log(Math.floor(Math.random()*10)+1);//if we want to get only integer value then we can use Math.floor() method and if we want to get ans between 1 and 10 then we can add 1 to it


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);//if we want to get ans between min and max then we can use this formula
