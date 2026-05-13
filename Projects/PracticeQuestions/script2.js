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
// let products = [
//  {name:'Shirt', category:'Clothes'},
//  {name:'Phone', category:'Electronics'},
//  {name:'Jeans', category:'Clothes'}
// ]

// let ans = products.reduce((acc, curr) => {
//     let key = curr.category;
//     if(!acc[key]){
//         acc[key] = [];
//     }
//     acc[key].push(curr);
//     return acc;
// },{})

// console.log('ans', ans)

// Q17. Group students by grade
// let arr = [
//  {name:'Yuvraj', grade:'A'},
//  {name:'Khushi', grade:'B'},
//  {name:'Chetan', grade:'A'}
// ]

// let ans = arr.reduce((acc, curr) => {
//     let key = curr.grade;
//     if(!acc[key]){
//         acc[key] = [];
//     }
//     acc[key].push(curr);
//     return acc
// }, {})

// console.log('ans', ans)

// Q18. Department-wise salary total
// let arr = [
//  {dept:'IT', salary:2000},
//  {dept:'HR', salary:1000},
//  {dept:'IT', salary:3000},
//  {dept:'Ad', salary:3000},
//  {dept:'IT', salary:3000},
//  {dept:'Ad', salary:3000},
//  {dept:'IT', salary:3000},
// ]

// let ans = arr.reduce((acc, curr) => {
//     let key = curr.dept;
//     if(!acc[key]){
//         acc[key] = curr.salary;
//     }else {
//         acc[key] += curr.salary;
//     }
//     return acc;
// }, {})

// console.log('ans', ans);

// Q19. Count employees per department

// let emp = [
//  {dept:'IT'},
//  {dept:'HR'},
//  {dept:'IT'}
// ]

// let ans = emp.reduce((acc, curr) => {
//     let key = curr.dept;
//     acc[key] = (acc[key] || 0) + 1;
//     return acc;
// }, {})

// console.log('ans', ans)

// LEVEL 4 — OBJECT TRANSFORMATION

// Q20. Convert array to object using id
// let arr = [
//  {id:1, name:'Yuvraj'},
//  {id:2, name:'Rahul'}
// ]

// let ans = arr.reduce((acc, curr) => {
//     let key = curr.id;
//     acc[key] = curr;
//     return acc;
// },{})

// console.log('ans', ans)

// Q21. Create object from users

// let arr = [
//  {name:'A', age:20},
//  {name:'B', age:30}
// ]

// {
//     "A": 20,
//     "B": 30
// }

// let ans = arr.reduce((acc, curr) => {
//     let key = curr.name;
//     acc[key] = curr.age;
//     return acc
// },{})

// console.log('ans', ans)

// Q22. Convert array to dropdown options
// let arr = [
//  {id:1, country:'India'},
//  {id:2, country:'USA'}
// ]

// // [
// //  {label:'India', value:1},
// //  {label:'USA', value:2}
// // ]

// let ans = arr.map((a) => ({
//     label : a.country,
//     value: a.id
// }));

// console.log('ans', ans)

// LEVEL 5 — ARRAY + REDUCE COMBINATION

// Q23. Separate even and odd
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let ans = arr.reduce((acc, curr) => {

//     if(curr%2===0){
//         acc.even.push(curr);
//     }else{
//        acc.odd.push(curr); 
//     }
//     return acc

// }, {even : [], odd : []})

// console.log('ans', ans)

// Q24. Get unique departments
// let arr = [
//  {dept:'IT'},
//  {dept:'HR'},
//  {dept:'IT'}
// ]

// // M1 using Set
// let ans = [...new Set(arr.map((a) => a.dept))];
// console.log('ans', ans);

// // M2 using reduce
// let ans2 = arr.reduce((acc, curr) => {
//     if(!acc.includes(curr.dept)){
//         acc.push(curr.dept)
//     }
//     return acc;
// }, [])

// console.log('ans2', ans2)

// Q25. Flatten nested array
// let arr = [[1,2],[3,4,[2,3,4]],[5]];
// let ans1 = arr.flat(1);
// let ans2 = arr.flat();
// console.log('ans', ans1, ans2)

// Q26. Get all hobbies
// let hobbies = [
//  {name:'A', hobbies:['Cricket','Music']},
//  {name:'B', hobbies:['Coding', 'Cricket']}
// ]

// let ans = hobbies.reduce((acc, curr) => {
//     acc.push(...curr.hobbies);
//     return [...new Set(acc)]
// },[])

// console.log('ans', ans)

// LEVEL 6 — ADVANCED

// Q27. Nested grouping

// let data = [
//  {name:'A', dept:'IT', role:'Dev'},
//  {name:'B', dept:'IT', role:'Tester'},
//  {name:'C', dept:'HR', role:'Manager'}
// ]

// let ans = data.reduce((acc, curr) => {
//     if(!acc[curr.dept]){
//         acc[curr.dept] = {}
//     }
//     if(!acc[curr.dept][curr.role]){
//         acc[curr.dept][curr.role] = []
//     }
//     acc[curr.dept][curr.role].push(curr);
//     return acc;
// }, {})

// console.log('ans', ans)

// expected ans:-
// {
//  IT:{
//    Dev:[...],
//    Tester:[...]
//  },
//  HR:{
//    Manager:[...]
//  }
// }

// Q28. Find most repeated word
// let str = "js react js node react js react"

// let ans = str.split(' ').reduce((acc, curr) => {
//     if(!acc[curr]){
//         acc[curr] = 1
//     }else{
//         acc[curr]+=1
//     }
//     return acc;
// },{})

// let maxCount = 0;
// let word = [];
// for(let key in  ans){
//     if(maxCount <= ans[key]){
//         maxCount = ans[key];
//     }
// }

// for(let key in  ans){
//     if(maxCount === ans[key]){
//         word.push(key);
//     }
// }

// console.log('ans', word, maxCount)

// Q29. Group orders by status
// let data = [
//  {status:'pending', amount:100},
//  {status:'completed', amount:200},
//  {status:'pending', amount:300}
// ]

// let ans = data.reduce((acc, curr) => {
//     if(!acc[curr.status]){
//         acc[curr.status] = []
//     }
//     acc[curr.status].push(curr);
//     return acc;
// }, {})

// console.log('ans', ans)

// Q30. Group orders and calculate total

// let data = [
//  {status:'pending', amount:100},
//  {status:'completed', amount:200},
//  {status:'pending', amount:300}
// ]

// let ans = data.reduce((acc, curr) => {
//     if(!acc[curr.status]){
//         acc[curr.status] = {}
//     }
//     if(!acc[curr.status]['total']){
//         acc[curr.status]['total'] = 0;
//     }
//     if(!acc[curr.status]['orders']){
//         acc[curr.status]['orders'] = []
//     }
//     acc[curr.status]['total']+=curr.amount;
//     acc[curr.status]['orders'].push(curr);
//     return acc
// },{})

// console.log('ans', ans);

// LEVEL 7 — REAL API TRANSFORMATION
// Q31. Prepare chart data
// let data = [
//  {month:'Jan', sales:100},
//  {month:'Feb', sales:200}
// ]
// expected
// {
//  labels:['Jan','Feb'],
//  data:[100,200]
// }

// let chartData = data.reduce((acc, curr) => {
//     acc.label.push(curr.month);
//     acc.data.push(curr.sales);
//     return acc;
// },{label: [], data: []})

// console.log('ans', chartData);

// Q32. Create users lookup map
// let userData = [
//   { id: 101, name: 'Alice', email: 'alice@email.com' },
//   { id: 102, name: 'Bob', email: 'bob@email.com' },
//   { id: 103, name: 'Charlie', email: 'charlie@email.com' }
// ];

// let ans = userData.reduce((acc, curr) => {
//     acc[curr.id] = curr;
//     return acc
// },{});

// console.log('ans', ans)

// Q33. Get total completed orders amount
// let data = [
//  {status:'completed', amount:100},
//  {status:'pending', amount:200},
//  {status:'completed', amount:300}
// ]

// let ans = data.reduce((acc, curr) => {
//     if(curr.status === 'completed'){
//         acc+=curr.amount
//     }
//     return acc;
// },0)

// console.log('ans', ans)

// Q34. Get unique categories from products
// const products1 = [
//   { id: 1, name: 'Laptop', category: 'Electronics' },
//   { id: 2, name: 'Shirt', category: 'Clothing' },
//   { id: 3, name: 'Phone', category: 'Electronics' },
//   { id: 4, name: 'Jeans', category: 'Clothing' },
//   { id: 5, name: 'Book', category: 'Books' }
// ];

// // Expected output: ['Electronics', 'Clothing', 'Books']

// let ans = products1.reduce((acc, curr) => {
//     acc.push(curr.category);
//     // return acc;
//     return [...new Set(acc)];
// },[])

// console.log('ans', ans)

// Q35. Create API response summary

// let responses = [
//  {status:'success'},
//  {status:'failed'},
//  {status:'success'}
// ]

// let summary = responses.reduce((acc, curr) => {
//     if(!acc[curr.status]){
//         acc[curr.status] = 1
//     }else{
//         acc[curr.status]+=1
//     }
//     return acc;
// },{})

// console.log('ans', summary)
