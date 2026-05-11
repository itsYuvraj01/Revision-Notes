// Self practice questions for js transformation type
// MAP() Method
// Q1. Double all numbers
// let arr = [1,2,4,5,6,7]
// let ans = arr.map((a) => a*2);
// console.log(ans, arr)

// Q2. Convert all names to uppercase
// let names = ['yuvraj', 'shubham', 'virat', 'keshav'];
// let ans = names.map((n) => n.toUpperCase());
// console.log('ans',ans)

// Q3. Extract prices from products in array
// let products = [
//     {name:'Shoes', price:2000},
//     {name:'Bag', price:3000}
// ];

// let ans = products.map((p) => p.price);
// console.log('ans', ans)

// Q4. Add fullName field
// let arr = [
//  {first:'Yuvraj', last:'Singh'},
//  {first:'Rahul', last:'Sharma'}
// ]

// let ans = arr.map((a) => {
//     return {
//         first : a.first,
//         last : a.last,
//         fullName : a.first + ' ' +a.last
//     }
// });

// console.log('ans', ans)

// Filter() Method
// Q5. Get only even numbers
// let nums = [1.2,3,4,5,6,7,8,9,13,11,10,45,32];

// let even_nums = nums.filter((n) => n%2===0);
// console.log('ans', even_nums);

// Q6. Filter users age > 18
// let arr = [
//  {name:'A', age:12},
//  {name:'B', age:22},
//  {name:'C', age:20},
// ]

// let ans = arr.filter((a) => a.age > 18);
// console.log('ans', ans)

// Q7. Get active users only
// let arr = [
//  {name:'A', active:true},
//  {name:'B', active:false}
// ]

// let ans = arr.filter((s) => s.active === true);
// console.log('ans', ans)

// Find() Method
// Q8. Find user with id = 3
// let arr = [
//  {id:1},
//  {id:3},
//  {id:5}
// ]

// let ans = arr.find((a) => a.id === 3);
// console.log('ans', ans)

// Q9. Find first number greater than 50
// let arr = [10,20,60,70]

// let ans = arr.find((a) => a>50);
// console.log('ans', ans)

// Reduce() Method
// Q10. Sum all numbers
// let arr = [1,2,3,4]

// let ans = arr.reduce((acc, curr) => {
//     return acc+curr;
// }, 0)

// console.log('ans', ans);

// Q11. Total cart price
// let cartData = [
//  {name:'Shoes', price:2000},
//  {name:'Bag', price:3000}
// ]

// let totalPrice = cartData.reduce((acc, cart) => {
//     return acc+cart.price
// },0)

// console.log('ans', totalPrice)

// Q12. Count total characters
// let arr = ['hi','hello','js']
// console.log(arr[0].length, arr.length)

// let totalChars = arr.reduce((acc, curr) => {
//     return acc+curr.length
// },0)

// console.log('ams', totalChars);

// Q13. Count occurrences
// let arr = ['apple','banana','apple','orange']

// let ans = arr.reduce((acc,curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc
// },{})

// console.log('ans', ans)

// Q14. Count letters in string
// let str = "javascript"
// let arr = str.split('').reduce((acc,curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// },{})

// console.log('ans', arr);

// Grouping Questions
// Q15. Group users by department
// let data = [
//  {name:'A', dept:'HR'},
//  {name:'B', dept:'IT'},
//  {name:'C', dept:'HR'}
// ]

// expected ans 
// {
//  HR:[...],
//  IT:[...]
// }

// let ans = data.reduce((acc, curr) => {
//     let key = curr.dept;
//     if(!acc[key]){
//         acc[key] = []
//     };
//     acc[key].push(curr);
//     return acc;
// },{})

// console.log('ans', ans)

// Q16. Group products by category
let products = [
 {name:'Shirt', category:'Clothes'},
 {name:'Phone', category:'Electronics'},
 {name:'Jeans', category:'Clothes'}
]

let ans = products.reduce((acc, curr) => {
    let key = curr.category;
    if(!acc[key]){
        acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
},{})

console.log('ans', ans)

