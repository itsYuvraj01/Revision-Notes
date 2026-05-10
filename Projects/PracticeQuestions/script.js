console.log('Practice questions');

// Top 50 questions to practice

// Question 1=====================================================
// const users = [
//     {name:'Yuvraj', age:'24', id:'AIX123'},
//     {name:'Aryan', age:'13', id:'AIX143'},
//     {name:'Keshav', age:'45', id:'AIY923'},
//     {name:'Vikash', age:'24', id:'YUF322'},
//     {name:'Ajay', age:'45', id:'AJU766'},
//     {name:'Abdul', age:'34', id:'AIK023'},
//     {name:'Rehman', age:'34', id:'AIQ897'},
// ]

// let result = {};
// let property = 'age';

// users.forEach((obj) => {
//     let resultKey = obj[property];
//     if(!result[resultKey]){
//         result[resultKey] = [];
//     }
//     result[resultKey].push(obj);
// })

// console.log('output', result)

// let newOutput = users.reduce((result, obj) => {
//     let resultKey = obj[property];
//     if(!result[resultKey]){
//         result[resultKey] = [];
//     }
//     result[resultKey].push(obj);
//     return result;
// },{})

// console.log('output 2', newOutput);

// =======================================================================================================

// Question 2==================================================================

// Find last ele of and array

// const arr = [1,2,3,4,5,'ere','else',2,2,34,'Yuvraj']

// const getLastElem = (a) => {
//     return a[a.length - 1];
// }

// let lastElem = getLastElem(arr);
// console.log('Last element', lastElem)

// Question 3 ==================================================================
// Find combination of two arrays 

// let arr1 = [1,2,3]
// let arr2 = [5,8,10]

// Method 1------------------------
// let combArray = arr1.concat(arr2);
// console.log('combArray',combArray);

// Method 2------------------------
// let combArray2 = [...arr1,...arr2];
// console.log('cobmArra2', combArray2)

// Question 4=====================================================
// Generating a number betweeen 0-18 (included)

// let num = Math.floor(Math.random()*19);
// console.log('num', num)

// Genrate random number in given range (10-34)
// const num = Math.floor(Math.random() * (34 - 10 + 1)) + 10;
// console.log(num);

// Question 5===================================================================

// Create a func that takes both strings and number and return a new array containing only string value
// const arr = [1,2,'Yuvraj',3,4,'Singh',45,55,'Nermi','Kajal'];

// const stringFun = (array) => {
//     return array.filter((a) => typeof a === 'string' )
// }

// let newArr = stringFun(arr);
// console.log('String Array', newArr)

// Question 6===================================================================
// Max value in array

// let arr = [3,65,2,8,19];
// // Max value
// console.log('max value',Math.max(...arr));

// // Arr sorting
// console.log('Sorting array',arr.sort((a,b) => a-b));    //ascending order
// console.log('Sorting array',arr.sort((a,b) => b-a));    //descending order

// Question 7===================================================================
// Write a function that returns the lenght of give object

// let obj = {
//     name:'Yuvraj',
//     age:32,
//     job:'Developer'
// };

// console.log('length of object', Object.keys(obj).length)

// Question 8===================================================================
// In an arr of obj which have genders value as male

// const data = [
//     {name:'Yuvraj', gender:'Male'},
//     {name:'Khushi', gender:'Female'},
//     {name:'Raju', gender:'Male'},
//     {name:'Sakshi', gender:'Female'}
// ]

// Both methods give same output
// let newData1 = data.filter((d) => d.gender === 'Male');
// let newData2 = data.filter((d) =>{ return d.gender === 'Male'});
// console.log('newData', newData1,newData2)

// Question 9===================================================================
// Given an array of strings, return a new array where all strings are in uppercase
 
// let arr = ['asb', 'vfd', 'dfe', 'hsvdjf', 'jsvdhc'];

// let newData = arr.map((a) => a.toUpperCase());
// console.log('data', newData)

// Question 10===================================================================
// Check if an object is empty or not

// if there os no keys than obj is empty

// Flattened array
// const obj = {
//   user: {
//     name: "Yuvraj",
//     address: {
//       location: {
//         city: "Delhi",
//         geo: {
//           lat: 28.61,
//           lng: 77.23
//         }
//       }
//     }
//   },
//   transactions: [
//     { amount: 100, type: "income" },
//     { amount: 200, type: "expense" }
//   ]
// };

// const flattenObject = (obj, parent = "", res = {}) => {
//   for (let key in obj) {
//     const newKey = parent ? `${parent}.${key}` : key;
//     const value = obj[key];

//     if (typeof value === "object" && value !== null) {
      
//       // Handle arrays
//       if (Array.isArray(value)) {
//         value.forEach((item, index) => {
//           flattenObject(item, `${newKey}[${index}]`, res);
//         });
//       } 
//       // Handle nested objects
//       else {
//         flattenObject(value, newKey, res);
//       }

//     } else {
//       res[newKey] = value;
//     }
//   }
//   return res;
// };

// Question 11===============================================================================================
// Double value of array

// let array = [1,2,3,4,5,6,7,8,9,10]

// let newArray = array.map((a) => a*2);

// console.log('data', newArray)

// Question 12===============================================================================================

// Convert array to string

// let arr = ['Yuvraj', 'Singh', "is", 'a', 'Software', 'Developer']

// let stringValue = arr.join(' ');
// let reverseArr = stringValue.split(' ');

// console.log('value', stringValue, reverseArr)

// Question 13===============================================================================================

// Write a function to flatten array 1 level

// Method 1----------------------------------------
// let arr = [1,2,3,[4,4,5],6,7,8] 
// let newArr = [] 

// for(let a=0; a<arr.length; a++){
//     if(typeof arr[a] === 'object'){
//         newArr.push(...arr[a]);
//     }else{
//         newArr.push(arr[a]);
//     }
// }

// console.log('flatten array', newArr)

// Method 1----------------------Very Simple------------------
// console.log(arr.flat(1));

// Question 14===============================================================================================

// Check all elems are numbers or not in an array
// let arr = [1,2,3,4,5,'a','f','j',8,9,10]
// M1--------------------------------------

// let val = arr.filter((a) => typeof a === 'number');
// if(arr.length === val.length){
//     console.log('true')
// }else{
//     console.log('false')
// }

// const isAllNumbers = (arr) => {
//   const onlyNumbers = arr.filter((a) => typeof a === "number");
//   return arr.length === onlyNumbers.length;
// };

// M2--------------------------------------

// let isNumber = arr.every((elem) => typeof elem === 'number')
// console.log(isNumber);

// Question 15=================================================================================================
// Check is number a prime or not

// function isPrime(num) {
//     for(let i=2; i<Math.sqrt(num); i++){
//         if(num%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(52))
// console.log(isPrime(58))
// console.log(isPrime(17))
// console.log(isPrime(56))
// console.log(isPrime(51))
// console.log(isPrime(59))
// console.log(isPrime(50))

// Question 16=================================================================================================
// Create a function that remove duplicate values from an array
// Use Set which always store unique values

// let arr = [1,1,3,4,5,6,3,4,2,4,2];

// function removeDuplicate(arr) {
//     let newArr = new Set(arr)
//     console.log('n', newArr)
//     return [...newArr];
// }

// let val = removeDuplicate(arr);

// console.log(val)

// M2 - sort array in asc and then loop it and store it in new array without duplicating
// M3 - using check index of all elems and compare given below

// let arr = [1,2,3,4,1,4,2,4,6,5,7,6,5]

// let newArr = arr.filter((a,idx) => arr.indexOf(a) === index);
// console.log('first', newArr)

// ================================================================Intermediate============================================

// Difference between parseInt and Number
// parseInt("12.99")   // 12  ❗ (cuts decimal)
// Number("12.99")     // 12.99
// parseInt("123abc")   // 123 ✅      parseInt reads until it hits invalid character
// Number("123abc")     // NaN ❌      Number fails completely
// parseInt("")   // NaN
// Number("")     // 0 ❗

// Special Feature of parseInt() (Radix)  Number can not do this 
// parseInt("10", 2)  // 2 (binary)
// parseInt("10", 8)  // 8 (octal)
// parseInt("10", 10) // 10 (decimal)

// Question 18==================================
// Why 0.1+0.2 !== 0.3 ??   OR what is floating point precision values in JS
// 👉 Because JavaScript uses binary floating-point, and 0.1 & 0.2 cannot be represented exactly, causing small precision errors.
// 🔹 What actually happens

// Instead of:

// 0.1 → exact
// 0.2 → exact

// It becomes something like:

// 0.1 → 0.10000000000000000555...
// 0.2 → 0.20000000000000001110...

// Now when you add:

// 0.1 + 0.2 = 0.30000000000000004

// .Quesion 19=========================================================
// How would you handle high preciosion decimal values in JS ?
// 0.1 + 0.2 = 0.30000000000000004
// Using lib -> decimal.js or method toFixed();
// let sum = Number(0.1 + 0.2).toFixed(2); // 0.30

// Question 20============================================================
// Difference between slice and splice ??
// slice - works on array ans strings // immutable
// splice - works on arrays only     // Mutable

// Question 21=================================================================================
//  Write a function that reverse each word in a sentense;
// ex = mai hun manas -> sanam nuh iam

// let sentence = 'mai hun manas'
// let array = sentence.split(' ');
// let reversedData = array.map((a) => a.split('').reverse().join(''))

// console.log(reversedData.join(' '))

// Questio 22==============================================================
//  In an array of strings only add those numbers which are not string

// let array = [1,'22',43,'manas',7,'1'];
// let sum = 0;

// array.forEach(item => {
//     if(typeof item === 'number'){
//         sum = sum+item;
//     }
// });
// console.log(sum); // 51

// let array = [1, '22', 43, 'manas', 7, '1'];

// let sum = array.reduce((acc, item) => {
//   return typeof item === 'number' ? acc + item : acc;
// }, 0);

// console.log(sum); // 51

// Questino 23 how number is integer or not=========================================================
// let num = 123.23
// console.log(Number.isInteger(num))   //false m1
// console.log(num % 1 === 0)   //false m2 of remainder === 0 then true otherwise false

// Question 24 ====================================================================================
// Write a function to reverse a number
// let num = 3454
// m1
// let num2 = num.toString().split('').reverse();
// let num3 = num2.join('');

// console.log('reverse num',Number(num3))

// Question 25
// ['a','d','b','t'].sort() = ['a','b','d','t'] works on string properly

// waf thet return a passed string with letters in alphabetical order 

// let str = 'xjcabhuvwdgvchqsbxasvcjhs'
// let data = str.split('').sort().join('');
// console.log(data)

// Question 26
// waf that taked string as a param and return with first letter in uppercase

// let sentence = 'yuvraj singh thakur';

// const capitaliseLetter = (str) => {
//     let result = str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1));
//     return result.join(' ');
// }

// let data = capitaliseLetter(sentence)
// console.log(data)

// Question 27 write a func that takes n as param and return n elems of an array or if not passed then return first elem
// function getArray(arr, n) {
//     if (n === undefined) {
//         return arr[0]; // default: first element
//     } 
//     else if (n > arr.length) {
//         console.log('Itne elements to hai hi nahi');
//         return arr; // better fallback
//     } 
//     else {
//         return arr.slice(0, n);
//     }
// }

// let res = getArray([2,4,3,5,4],4)
// console.log(res)

// Question 28========================================================
// write a function to get the number of occurences of each letter in specified string
// let str = 'YuvrajYuvi'
// // global obj
// let obj = {};
// const occurences = (string) => {
//     string.toLowerCase().split('').forEach(letter => {
//         if(obj.hasOwnProperty(letter)){
//             obj[letter]++;
//         }else{
//             obj[letter] = 1;
//         }
//     });
//     console.log(obj);
// }

// occurences(str)

// Question 29 ===========================================================
// WAP to find the most frequent item in an array

// let numArr = [1,2,3,2,4,5,3,2,4,5,6,3];

// const frequency = (arr) => {
//     let obj = {};
//     let maxCount = 0;
//     let result = [];

//     arr.forEach(elem => {
//         if(obj.hasOwnProperty(elem)){
//             obj[elem]++;
//         }else {
//             obj[elem] = 1;
//         }
//     });
    
//     for(const key in obj){
//         if(obj[key] > maxCount){
//             maxCount = obj[key];
//         }
//     }

//     for(const key in obj){
//         if(obj[key] === maxCount){
//             result.push(key);
//         }
//     }   
    
//     return {
//         elem : result,
//         count : maxCount
//     }
// }

// let data = frequency(numArr)
// console.log('data', data)

// Question 30 ========================================================
// WAP to shuffle an array;

// let arr = [1,2,3,4,5,6,7,8,9]
// let temp = [...arr];
// let ans = [];
// arr.forEach((a) => {
//     let val = Math.floor(Math.random() * temp.length);
//     ans.push(temp[val]);
//     temp.splice(val,1);
// })

// console.log('Swapped arr', ans)

// Question 31 ==========================================================




// Date feature = >
// India time k liye 5:30 hours ko add krna pdta hai 
// let dateTime = '2024-04-30T08:23:13Z'
// isme agr Z lga hai mtlb UTC time and agr Z hat gya to indian time

// Question 44 =======================================================================
// let date = new Date(0);
// let date2 = new Date();
// console.log(date, date2)  //Epoc time or starting time
// date -> Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
// date2 -> Sun May 10 2026 14:30:10 GMT+0530

// console.log(date2.toLocaleString())
// indian standard time -> 5/10/2026, 2:31:00 PM

// Question 45 ========================================================
// Validate user selected a date range is no longer than 30 days
// let date = new Date('2025-01-25') //YYYY-MM-DDTHH:mm:ss.sss    india ka local time
// console.log(date.toLocaleString(), date)

// let nowDate = new Date('2026-07-25');

// let userDate = new Date('2026-08-25');

// let diff = userDate - nowDate
// console.log(diff)  // in milliseconds now convert in date

// let noOfDays = (Math.floor(diff/1000/60/60/24)) //for integer value;

// if(noOfDays > 30){
//     console.log('Date khtm ho gya bhaiya')
// }else{
//     console.log('Apka form submit ho gya hai')
// }


// Question 46 Calculate the difference between two dates in the format of year month days hours and minutes and seconds
// let startDate = '2024-04-30T08:23:13Z';
// let endDate = '2026-03-30T09:29:12Z';

// function takeDifference(start, end){
//     let date1 = new Date(start);
//     let date2 = new Date(end);
//     let diff = (date2-date1)/1000
//     // let year = Math.floor(diff/(60/60/24/365));
//     let year = Math.floor(diff/(60*60*24*365));
//     diff = diff % (60*60*24*365)

//     let months = Math.floor(diff/(60*60*24*30));
//     diff = diff % (60*60*24*30);

//     let days = Math.floor(diff / (60*60*24));
//     diff = diff % (60*60*24);

//     let hours = Math.floor(diff / (60*60));
//     diff = diff % (60*60);

//     let mins = Math.floor(diff / 60);
//     let seconds = diff % 60;

//     return `${year}-${months}-${days}-${hours}-${mins}-${seconds}`;
// }

// let d = takeDifference(startDate, endDate)

// console.log('diff', d)

// Use luxon js library for datetime difference

// Question 47=========================================================
// Add n days to given date ?

// let n = 25
// let date = new Date('2024-04-30T08:23:13Z');

// // console.log(date.getDate(), date.getFullYear(), date.getHours())

// let newDateTimeStamps = date.getTime() + n*24*60*60*1000;
// let finalDate = new Date(newDateTimeStamps)
// // console.log('final', finalDate);


// Question 48=============================================================
// Calculate age of user using their DOB

// let dob = new Date('2004-01-25');
// // console.log(dob.toISOString())  mainly for apis
// let currDate = new Date();

// console.log((currDate-dob)) // wrong approach

// let age = currDate.getFullYear() - dob.getFullYear();
// let monthDiff = currDate.getMonth() - dob.getMonth();
// let daysDiff = currDate.getDate() - dob.getDate();

// if(monthDiff < 0 || (monthDiff === 0 && daysDiff < 0)){
//     age--;
// }

// console.log('age', age)


// Question 49 =======================================================
// WAP to return a better date and also formattingDate
// let date = '2024-04-30T08:23:13Z';

// function utiliytyDateFunctin (dateStr) {
//     let date = new Date(dateStr);
//     return date.toLocaleDateString('en-IN', {
//         weekday: 'long',
//         month: 'short',
//         day : 'numeric',
//         year: 'numeric'
//     })
// }

// let finaldate = utiliytyDateFunctin(date);
// console.log('formateDate', finaldate)



// date.toLocaleDateString('en-IN', {
//         weekday: 'long',
//         month: 'short',
//         day : 'numeric',
//         year: 'numeric'
//     })

// date.toLocaleDateString(locale, option)


