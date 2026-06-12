// const hero=["spiderman","hjahd"]
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values)

//filter()
// const nums=[1,2,3,4,5]
// const result=nums.filter((nums)=>{
//     return num>4;
// })
// console.log(result)

const books = [
    { title: "Book1", genre: "History" },
    { title: "Book2", genre: "Science" }
];

const historyBooks = books.filter(
    book => book.genre === "History"
);

// const nums1 = [1,2,3,4,5,6];

// const result = [];

// nums.forEach((num) => {
//     if (num > 4) {
//         result.push(num);
//     }
// });

// console.log(result);
//map

// const nums2 = [1,2,3];

// const result = nums2.map((num) => {
//     return nums2 + 10;
// });

// console.log(result);

//method chaining

const nums = [1,2,3];

const result = nums
    .map(num => num * 10)
    .map(num => num + 1);

console.log(result);
//reduce
const nums = [1,2,3,4];

const total = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(total);