const marvel = ["Thor", "Ironman"];
const dc = ["Batman", "Flash"];

// marvel.push(dc);

console.log(marvel);


//concat opeartion
const allhero=marvel.concat(dc);

console.log(allhero);

//spedd[...]//modern way to concat two arrays
const heroes = [...marvel, ...dc];

console.log(heroes);

//nested array and flats 

const arr1=[1,2,3,[5,5,7,8],9];
// console.log(arr1);
//flat method
const flatarray=arr1.flat(Infinity);//infinity means it will flatten all the nested arrays regardless of their depth
// console.log(flatarray);

// is array
const neew=[1,2,3,4];
console.log(Array.isArray(neew));

//array.of() creates an array from the values
const score1 = 100;
const score2 = 200;
const score3 = 300;

const scores = Array.of(score1, score2, score3);

console.log(scores);
