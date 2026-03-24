//================================================Data Tyeps==============================================

// 🔹 What Are Data Types?
// 👉 Data types tell JavaScript what kind of value a variable is storing.

// Example:
// let age = 25;      // number
// let name = "Yuvraj";  // string


// Different types of data = different behavior.
// 🔥 JavaScript Has 2 Main Categories
// 1. Primitive Data Types                          2. Non-Primitive (Reference) Data Types
// 

// 🟢 1️⃣ Primitive Data Types  -- These store single simple values.
// There are 7 primitive types in JS:

// 1. Number -  Used for numbers (integer + decimal)
// let age = 25;
// let price = 99.99;
// No separate int or float in JS — everything is number.

// 2. String  --  Used for text
// let name = "Yuvraj";
// let message = 'Hello';
// Text always inside quotes.

// 3. Boolean  -- Only two values: true (1), false(0)
// let isLoggedIn = true;
// let isAdmin = false;
// Used in conditions mostly.

// 4. Undefined  -- When a variable is declared but not assigned value.  - Means: "Value not given yet"
// let x;
// console.log(x); // undefined

// 5. Null  -- Means intentionally empty.
// let data = null;
 
// Difference:
// undefined → value not assigned
// null → intentionally empty

// 6. BigInt  -- Used for very large numbers
// let bigNumber = 12345678901234567890n;
// Notice n at the end.
// Used rarely unless working with huge numbers.

// 7. Symbol -- Used to create unique values.
// let id = Symbol("id");
// Mostly used in advanced JS or frameworks.



// 🟡 2️⃣ Non-Primitive (Reference) Data Types  -- These store collections or complex data.
// Mainly 3 types:  Object,  Array,  Function

// 1. Object  -- Stores data in key-value pairs.
// let person = {
//   name: "Yuvraj",
//   age: 22
// };
// Very important in JavaScript.

// 2. Array -- Stores multiple values in order.
// let colors = ["red", "blue", "green"];
// Index starts from 0.

// 3. Function -- Function is also treated as an object in JS.
// function greet() {
//    console.log("Hello");
// }


// 🔥 Primitive vs Non-Primitive (Very Important)
// Primitive	                        Non-Primitive
// Stores single value	                Stores multiple values
// Stored by value	                    Stored by reference
// Simple data	                        Complex data

// 🔹 Stored by Value vs Reference (Simple Example)
// Primitive (Stored by value)
// let a = 10;
// let b = a;
// b = 20;
// console.log(a); // 10
// Why? Because copy is separate.

// Object (Stored by reference)
// let obj1 = { name: "Yuvraj" };
// let obj2 = obj1;
// obj2.name = "Rahul";
// console.log(obj1.name); // Rahul
// Both point to same memory location.

// 🧠 Super Quick Revision Notes
// Number → numeric values
// String → text
// Boolean → true/false
// Undefined → declared but not assigned
// Null → intentionally empty
// BigInt → very large numbers
// Symbol → unique values
// Object → key-value data
// Array → list of values
// Function → reusable block of code


// ==================================IMPORTANT JS METHODS - NUMBER/STRING==============================

// Number methods :-
// Number("10")                         // Converts string to number → 10
// parseInt("25px")                     // Extracts integer → 25
// parseFloat("3.14kg")                 // Extracts float → 3.14
// (10.456).toFixed(2)                  // Rounds to 2 decimals → "10.46"
// Number.isInteger(10)                 // Checks if integer → true
// Number.isNaN("abc")                  // Checks if NaN → false
// isNaN("abc")                         // Checks if not a number → true
// (1000000).toLocaleString()           // Formats number → "1,000,000"
// Math.round(4.6)                      // Rounds → 5
// Math.floor(4.9)                      // Lowest integer → 4
// Math.ceil(4.1)                       // Highest integer → 5
// Math.random()                        // Random number between 0 and 1
// Math.max(10, 20)                     // Maximum → 20
// Math.min(10, 20)                     // Minimum → 10

// String Methods :-
// "hello".length                       // Length of string → 5
// "hello".toUpperCase()                // Converts to uppercase → "HELLO"
// "HELLO".toLowerCase()                // Converts to lowercase → "hello"
// "hello".charAt(1)                    // Character at index → "e"
// "hello".indexOf("l")                 // First index of value → 2
// "hello".lastIndexOf("l")             // Last index → 3
// "hello".includes("he")               // Checks if exists → true
// "hello".startsWith("he")             // Checks start → true
// "hello".endsWith("lo")               // Checks end → true
// "hello world".substring(0,5)         // Extract part → "hello"
// "hello world".slice(0,5)             // Extract part → "hello"
// "hello world".split(" ")             // Convert to array → ["hello","world"]
// ["hello","world"].join(" ")          // Convert to string → "hello world"
// "  hello  ".trim()                   // Removes spaces → "hello"
// "hello".replace("h","H")             // Replace value → "Hello"
// "hello".repeat(3)                    // Repeat string → "hellohellohello"
// "5".padStart(3,"0")                  // Add padding → "005"
// "5".padEnd(3,"0")                    // Add padding → "500"

// Boolean Methods :-
// Boolean(1)                           // true
// Boolean(0)                           // false
// Boolean("")                          // false
// Boolean("hi")                        // true


// Important type checks (Learn more from chatgpt)
// typeof 10                             // "number"
// typeof "hello"                        // "string".
// typeof true                           // "boolean"
// typeof undefined                      // "undefined"
// typeof null                           // "object" (JS bug)


// Important note:- 
// Both slice() and substring() are used to extract parts of a string.The main difference is 
// that slice() supports negative indexes and does not swap parameters,while substring() does not 
// support negative indexes and swaps start and end if start is greater than end.

// ====================================REFERENCE DATA TYPES ===================================

// 🔥 What Are Reference Data Types?
// Reference data types are complex data types.
// They don’t store value directly.
// They store reference (address) of value in memory.

// In simple words:
// Primitive = simple value
// Reference = complex structure (object-like)

// 📦 Types of Reference Data Types

// There are mainly 3: Objects, Arrays, Functions
// These are used 90% of the time in development.

// 🟢 1️⃣ Objects - collection of key-value pairs.
// Think of it like a real-world thing.
// Example: A user
// let person = {
//   name: "Yuvraj",
//   age: 22,
//   country: "India"
// };

// Here: name → key, "Yuvraj" → value

// 🔹 Accessing Object Values
// Dot Notation
// console.log(person.name);
// Bracket Notation
// console.log(person["name"]);

// 👉 Use bracket notation when: Key is dynamic, Key has spaces

// 🔹 Modify Object (Very Important in Dev)
// person.age = 23;          // Modify
// person.isAdmin = true;    // Add
// delete person.country;    // Delete

// Used in:Updating user profile, Modifying API response, Cleaning data before sending to backend

// 🔹 Object with Function (Method)
// let person = {
//   name: "Yuvraj",
//   greet: function() {
//     console.log("Hello " + this.name);
//   }
// };

// person.greet();

// 👉 Function inside object = Method

// Used heavily in: Classes, Services, Models

// 🟡 2️⃣ Arrays (List of Data) -  ordered collection of items.
// let fruits = ["Apple", "Banana", "Orange"];
// Index starts from 0.

// 🔹 Why Arrays Are Important?
// Because:List of users, List of products, Table data, Comments list, API returns arrays mostly

// 🔹 Access Array Items
// console.log(fruits[1]); // Banana

// 🔹 Modify Array (Very Important)
// Add items
// fruits.push("Kiwi");     // Add at end
// fruits.unshift("Mango"); // Add at start

// Remove items
// fruits.pop();   // Remove last
// fruits.shift(); // Remove first

// Used in:Adding new data, Removing deleted data, Updating UI list

// 🔵 3️⃣ Functions (Reusable Code) - block of reusable code.
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(3, 5));   // 8

// 🔹 Why Functions Are Important?
// Because:API logic, Validation logic, Business logic, Utility functions, Event handling,
// Everything runs through functions. 

// 🔹 Anonymous Function
// Function without name:
// let add = function(a, b) {
//   return a + b;
// };

// Used in:Callbacks, Event listeners, Array methods

// 🔹 Callback Example
// setTimeout(function() {
//   console.log("Runs after 1 second");
// }, 1000);

// Used in:Async programming, API calls, Promises

// 🔥 MOST IMPORTANT PART (Reference Concept)
// Now understand this carefully 👇

// Primitive (Copy) - Primitive creates separate copy.
// let a = 10;
// let b = a;
// b = 20;
// console.log(a); // 10

// Reference (Shared Memory)
// let obj1 = { name: "Yuvraj" };
// let obj2 = obj1;
// obj2.name = "Rahul";
// console.log(obj1.name); // Rahul
// Both point to same memory. - This is VERY IMPORTANT for React state management.

// So mastering reference types = mastering JavaScript.
// Reference types store memory address, not direct value.
// Changing one reference affects all linked variables.


// ==========================================ARRAYS IN JS===============================================

// 🔥 What is an Array?
// 👉 Array = Ordered collection of values
// 👉 Can store mixed data types
// 👉 Index starts from 0

// let arr = [10, 20, 30];
// arr[0] → 10
// arr[1] → 20

// 🧠 Why Arrays Are Important in Development?
// Because 90% API responses return:
// [
//   { id: 1, name: "User1" },
//   { id: 2, name: "User2" }
// ]

// Used in:
// Tables, Lists, Mapping in React, Filtering, Sorting, Searching, Pagination
 
// 🔥 Important Concept (Reference Type)
// Arrays are reference types.
// let a = [1, 2];
// let b = a;
// b.push(3);

// console.log(a); // [1,2,3]
// Both point to same memory.

// ⚠ Important for React state updates.

// 🟢 ARRAY INSERTION METHODS (Very Important)

// 1️⃣ push() → Add at End
// let arr = [1, 2];
// arr.push(3);  // [1,2,3]

// 2️⃣ unshift() → Add at Beginning
// arr.unshift(0);  // [0,1,2,3]

// 3️⃣ splice() → Insert Anywhere
// let arr = [1, 2, 4];
// arr.splice(2, 0, 3);  
// // Insert 3 at index 2
// // [1,2,3,4]
// Syntax:
// array.splice(index, deleteCount, newItem)

// 🔴 ARRAY DELETION METHODS

// 4️⃣ pop() → Remove Last
// arr.pop();

// 5️⃣ shift() → Remove First
// arr.shift();

// 6️⃣ splice() → Remove Specific
// let arr = [1,2,3,4];
// arr.splice(1, 2);
// // Removes 2 items from index 1
// // [1,4]

// 🟡 IMPORTANT ARRAY METHODS (Interview + Dev)

// 7️⃣ map() → Transform Array
// let nums = [1,2,3];
// let doubled = nums.map(n => n * 2);
// [2,4,6]

// 8️⃣ filter() → Filter Data
// let nums = [1,2,3,4];
// let even = nums.filter(n => n % 2 === 0);
// [2,4]
// Used in: Search, Status filter, Role filter

// 9️⃣ find() → Find First Match
// let users = [{id:1},{id:2}];
// let user = users.find(u => u.id === 2);
// // {id:2}

// Returns first match.
// 🔟 findIndex()
// let users = [{id:1},{id:2}];
// users.findIndex(u => u.id === 2);
// 1

// 1️⃣1️⃣ includes()
// [1,2,3].includes(2);
// // true

// 1️⃣2️⃣ indexOf()
// [10,20,30].indexOf(20);
// // 1

// 1️⃣3️⃣ slice() → Copy Part of Array
// let arr = [1,2,3,4];

// arr.slice(1,3);      syntax arr.slice(start{included}, end{not included})
// [2,3]

// Does NOT modify original.
// 1️⃣4️⃣ concat() → Merge Arrays
// [1,2].concat([3,4]);
// // [1,2,3,4]

// 1️⃣5️⃣ spread operator (Modern way)
// let newArr = [...arr, 5];

// Best for React state updates.

// 1️⃣6️⃣ sort()
// [5,2,1].sort();
// // [1,2,5]
// ⚠ Sort converts to string by default.

// Proper way:
// [5,2,10].sort((a,b) => a-b);

// 1️⃣7️⃣ reverse()
// [1,2,3].reverse();
// // [3,2,1]

// 1️⃣8️⃣ reduce() (Important for Interviews)
// let arr = [1,2,3];
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// // 6
// Used for:Total calculation, Grouping, Complex transformations

// 🟣 Iteration Methods
// arr.forEach(item => console.log(item));
// forEach → no return
// map → returns new array


// 🧠 Common Interview Questions
// Q1: Difference between map and forEach?

// map returns new array

// forEach does not return

// Q2: slice vs splice?
// slice	                                splice
// Does not modify original	                Modifies original
// Used to copy	                            Used to insert/delete

// Q3: How to remove duplicate?
// [...new Set(arr)]

// 🚀 Real Dev Pattern (React Safe Update)
// Wrong ❌                                  Correct ✅
// arr.push(newItem);                         setArr([...arr, newItem]);



// ======================Substring vs Slice vs Splice =========================================

// 🚀 Substring() :- 
// string.substring(start, end)
// Works only on strings
// Start included, end excluded
// ❌ Does NOT support negative index
// ✅ If start > end → it swaps automatically
// ❌ Does NOT modify original string

// Example:-
// "Hello".substring(1,4);   // "ell"
// "Hello".substring(4,1);   // "ell" (auto swap)

// 🚀 Slice() :- 
// Extracts part of string OR array.
// string.slice(start, end)
// array.slice(start, end)
// Works on string + array
// Start included, end excluded
// ✅ Supports negative index
// ❌ If start > end → returns ""
// ❌ Does NOT modify original

// Example:-
// "Hello".slice(1,4);   // "ell"
// "Hello".slice(-2);    // "lo"
// [1,2,3,4].slice(1,3);   // [2,3]

// Splice() :-

// 👉 Adds / removes / replaces elements in array.
// array.splice(index, deleteCount, newItem)
// Works only on arrays
// ✅ Modifies original array
// ❌ No negative index support like slice
// Used for insertion and deletion

// Example:- remove
// let arr = [1,2,3,4];
// arr.splice(1,2);  
// // removes 2 elements → [1,4]

// add elements
// let arr = [1,2,4];
// arr.splice(2,0,3);  
// // [1,2,3,4]

// replce elements
// let arr = [1,2,3];
// arr.splice(1,1,5);  
// // [1,5,3]



// =======================================IMPORTANT JS ARRAY METHODS=======================================

// JavaScript Array Methods (Super Simple Notes)
// 🔹 1. map()
// 👉 Kaam: Har element ko change karna (modify)
// arr.map(item => newItem)
// ✅ Example:
// [1,2,3].map(x => x * 2)
// [2,4,6]
// 🧠 Easy line:
// ➡️ “Same size array, but values changed”

// 🔹 2. filter()
// 👉 Kaam: Condition ke basis par select karna
// arr.filter(item => condition)
// ✅ Example:
// [1,2,3,4].filter(x => x > 2)
// // [3,4]
// 🧠 Easy line:
// ➡️ “Jo pass karega wahi rahega”

// 🔹 3. reduce()
// 👉 Kaam: Sabko mila ke ek value banana
// arr.reduce((acc, curr) => result, initialValue)
// ✅ Example:
// [1,2,3].reduce((sum, x) => sum + x, 0)
// // 6
// 🧠 Easy line:
// ➡️ “Sabko jod ke ek answer”

// 🔹 4. forEach()
// 👉 Kaam: Loop lagana (sirf chalana)
// arr.forEach(item => {})
// ✅ Example:
// [1,2,3].forEach(x => console.log(x))
// 🧠 Easy line:
// ➡️ “Sirf loop, return kuch nahi”

// 🔹 5. find()
// 👉 Kaam: Pehla matching element dena
// arr.find(item => condition)
// ✅ Example:
// [1,2,3].find(x => x > 1)
// // 2
// 🧠 Easy line:
// ➡️ “Pehla mil gaya toh wahi dega”

// 🔹 6. some()
// 👉 Kaam: Koi ek bhi match kare?
// arr.some(item => condition)
// ✅ Example:
// [1,2,3].some(x => x > 2)
// // true
// 🧠 Easy line:
// ➡️ “Ek bhi sahi hai kya?”

// 🔹 7. every()
// 👉 Kaam: Sab match karte hain kya?
// arr.every(item => condition)
// ✅ Example:
// [2,4,6].every(x => x % 2 === 0)
// // true
// 🧠 Easy line:
// ➡️ “Sab sahi hone chahiye”

// 🔹 8. includes()
// 👉 Kaam: Value exist karti hai ya nahi
// arr.includes(value)
// ✅ Example:
// [1,2,3].includes(2)
// // true
// 🧠 Easy line:
// ➡️ “Hai ya nahi?”

// 🔹 9. sort()
// 👉 Kaam: Sorting karna
// arr.sort((a,b) => a-b)
// ✅ Example:
// [3,1,2].sort((a,b) => a-b)
// // [1,2,3]
// 🧠 Easy line:
// ➡️ “Chhota se bada arrange”

// 🔹 10. slice()
// 👉 Kaam: Array ka part lena (copy)
// arr.slice(start, end)
// ✅ Example:
// [1,2,3,4].slice(1,3)
// // [2,3]
// 🧠 Easy line:
// ➡️ “Cut copy, original same”

// 🔹 11. splice()
// 👉 Kaam: Add/remove (original change hota hai)
// arr.splice(start, deleteCount)
// ✅ Example:
// let arr = [1,2,3]
// arr.splice(1,1)
// // [1,3]
// 🧠 Easy line:
// ➡️ “Original array ko change karega”

// 🔹 12. push() / pop()
// arr.push(4) // add last
// arr.pop()   // remove last
// 🧠 Easy line:
// ➡️ “End se add/remove”

// 🔹 13. shift() / unshift()
// arr.unshift(1) // add start
// arr.shift()    // remove start
// 🧠 Easy line:
// ➡️ “Start se add/remove”

// ===============================================OBJECTS=============================================

// JS Objects – MOST IMPORTANT (Dev + Interview)
// 🔥 1. Object Basics (Must Clear)
// 👉 Object = key-value store

// const user = {
//   name: "Yuvraj",
//   age: 22
// };

// 👉 Access:

// user.name         // dot
// user["name"]      // bracket

// ⚠️ Interview Question:
// 👉 Dot vs Bracket?
// dot → normal cases
// bracket → dynamic / special keys
// const key = "name";
// user[key]; // works

// 🧠 IMPORTANT:
// ➡️ Dynamic access = only bracket works

// 🔥 2. MOST USED METHODS (Daily Dev Work)
// ✅ 1. Object.keys()
// 👉 Looping ke liye use hota hai
// Object.keys(user)
// // ["name", "age"]

// 📌 Dev use:
// Object.keys(user).map(key => {
//   console.log(key, user[key]);
// });

// ✅ 2. Object.values()
// Object.values(user)
// // ["Yuvraj", 22]
// 📌 Dev use:
// API response handling
// UI rendering

// ✅ 3. Object.entries() ⭐ VERY IMPORTANT
// Object.entries(user)
// // [["name","Yuvraj"], ["age",22]]

// 📌 Dev use (React 🔥):
// Object.entries(user).map(([key, value]) => {
//   console.log(key, value);
// });

// 🧠 Interview:
// ➡️ “Best way to loop object” = entries()

// ✅ 4. hasOwnProperty()
// user.hasOwnProperty("name")
// // true
// 📌 Interview:
// ➡️ Check key exist or not

// ✅ 5. Object.assign() / Spread ⭐
// const copy = { ...user };
// or
// Object.assign({}, user);

// 📌 Dev use:
// state update (React)
// immutability
// 🔥 3. VERY IMPORTANT CONCEPTS

// ⚡ 1. Shallow Copy (🔥 asked)
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { ...obj1 };
// obj2.b.c = 10;
// console.log(obj1.b.c); // 10 ❗
// 🧠 Meaning:
// ➡️ Nested object copy nahi hota (reference rehta hai)

// ⚡ 2. Deep Copy
// const deep = JSON.parse(JSON.stringify(obj1));
// 🧠 Meaning:
// ➡️ pura naya object banega
// ⚡ 3. this keyword ⭐ VERY IMPORTANT
// const user = {
//   name: "Yuvraj",
//   greet() {
//     console.log(this.name);
//   }
// };

// 🧠 Meaning:
// ➡️ this = current object
// ⚠️ Interview trap:
// const fn = user.greet;
// fn(); // undefined (this lost)
// 🔥 4. Add / Update / Delete (Daily Use)
// user.city = "Delhi";   // add
// user.name = "Rahul";   // update
// delete user.age;       // delete

// 📌 Dev use:
// ➡️ dynamic data handling

// 🔥 5. Looping Object (VERY COMMON)
// ✅ for...in
// for (let key in user) {
//   console.log(key, user[key]);
// }

// ✅ Best (Modern 🔥)
// Object.entries(user).forEach(([key, value]) => {
//   console.log(key, value);
// });

// 🔥 6. Freeze vs Seal (Interview favorite)
// ❄️ Object.freeze()
// Object.freeze(user);
// ➡️ kuch bhi change nahi hoga
// 🔒 Object.seal()
// Object.seal(user);
// ➡️ update allowed
// ➡️ add/delete not allowed

// 🔥 7. REAL DEV USE CASES (IMPORTANT FOR YOU)
// ✅ 1. API Data Handling
// const apiData = {
//   name: "Yuvraj",
//   age: 22
// };

// Object.entries(apiData).map(([key, value]) => {
//   console.log(key, value);
// });

// ✅ 2. React State Update
// setUser(prev => ({
//   ...prev,
//   name: "Yuvraj Singh"
// }));

// ✅ 3. Dynamic Form
// const form = {
//   username: "abc",
//   email: "xyz"
// };

// Object.keys(form).forEach(key => {
//   console.log(key);
// });
// 🔥 MOST ASKED INTERVIEW QUESTIONS

// 👉 ये pakka aayega:

// Difference:
// dot vs bracket
// Shallow vs Deep copy
// Object.keys vs entries
// this keyword
// Object vs Array
// How to loop object
// How to clone object


// ===========================================Function=============================================

// 🚀 1. What is Function?
// 👉 Function = code ka reusable block

// function greet() {
//   console.log("Hello");
// }
// 👉 Call:
// greet();

// 🧠 Easy line:
// ➡️ “Ek baar likho, baar-baar use karo”

// 🔥 2. Types of Functions (IMPORTANT)
// 🔹 1. Function Declaration
// function add(a, b) {
//   return a + b;
// }
// 📌 Feature:
// Hoisting hota hai (upar call kar sakte ho)
// add(2,3); // works
// 🔹 2. Function Expression
// const add = function(a, b) {
//   return a + b;
// };

// 📌 Feature:
// Hoisting nahi hota
// 🔹 3. Arrow Function 🔥 (Most used)
// const add = (a, b) => a + b;

// 📌 Use:
// React me mostly yahi use hota hai

// 🔹 4. Anonymous Function
// 👉Function without name
// setTimeout(function() {
//   console.log("Hello");
// }, 1000);

// 🔹 5. Callback Function 🔥
// 👉 Function as argument
// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }
// greet("Yuvraj", () => {
//   console.log("Callback called");
// });

// 📌 VERY IMPORTANT (Async JS, APIs)

// 🔹 6. Higher Order Function 🔥🔥
// 👉 Function jo function accept ya return kare
// function multiplier(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// const double = multiplier(2);
// console.log(double(5)); // 10

// 🔹 7. IIFE (Immediately Invoked)
// (function() {
//   console.log("Run immediately");
// })();

// 🔹 8. Constructor Function
// function Person(name) {
//   this.name = name;
// }

// const p = new Person("Yuvraj");
// 🔥 3. Important Concepts (INTERVIEW MUST)
// ⚡ 1. Hoisting
// sayHi();

// function sayHi() {
//   console.log("Hi");
// }

// 👉 Works because of hoisting
// ⚡ 2. Function Scope
// function test() {
//   let a = 10;
// }

// console.log(a); // ❌ error
// 👉 Variable function ke andar hi accessible

// ⚡ 3. Closures 🔥🔥 VERY IMPORTANT
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn = outer();
// fn(); // 1
// fn(); // 2

// 🧠 Meaning:
// ➡️ Inner function outer variable ko yaad rakhta hai

// ⚡ 4. this keyword (functions me)
// const user = {
//   name: "Yuvraj",
//   greet() {
//     console.log(this.name);
//   }
// };

// 👉 Normal function → this works
// 👉 Arrow function → this nahi hota ❌

// ⚡ 5. Default Parameters
// function greet(name = "Guest") {
//   console.log(name);
// }
// ⚡ 6. Rest Operator
// function sum(...nums) {
//   return nums.reduce((a,b) => a+b, 0);
// }
// ⚡ 7. Spread Operator (with function)
// const arr = [1,2,3];

// sum(...arr);
// 🚀 4. REAL DEV USE CASES (VERY IMPORTANT)
// 🔥 1. API Call (Callback / Async)
// fetchData(() => {
//   console.log("Data received");
// });

// 🔥 2. Array methods (callback use)
// [1,2,3].map(x => x * 2);

// 🔥 3. React Event Handling
// <button onClick={() => handleClick()} />

// 🔥 4. Reusable logic
// function calculateTotal(price, tax) {
//   return price + tax;
// }
// 🔥 MOST IMPORTANT FOR INTERVIEW

// 👉 Ye pakka aayega:

// Difference:
// function declaration vs arrow
// this in arrow vs normal
// closure
// callback & higher order function
// hoisting
// rest vs spread
// 💥 FINAL REVISION (30 sec)
// Function → reusable code
// Arrow → modern use
// Callback → function inside function
// Closure → memory
// Hoisting → declaration upar
// this → object context
// 🧠 Real Advice for YOU (Important)

// Bhai tu MERN dev hai → focus kar:

// 👉 Arrow functions
// 👉 Callbacks
// 👉 Closures
// 👉 this
// 👉 Higher order functions

// 📘 1. What is Function?
// 👉 Function = ek block of code jo repeat use hota hai
// function greet() {
//   console.log("Hello");
// }

// 👉 Call karne ke liye:

// greet();

// 🧠 Easy line:
// ➡️ “Function = reusable code”

// 📘 2. Function Structure (IMPORTANT)
// function functionName(parameters) {
//   // code
//   return value; // optional
// }
// Example:
// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3)); // 5
// 📘 3. Types of Functions
// 🔹 1. Function Declaration
// function sayHi() {
//   console.log("Hi");
// }

// 📌 Feature:

// Hoisting hota hai
// sayHi(); // works
// 🔹 2. Function Expression
// const sayHi = function() {
//   console.log("Hi");
// };

// 📌 Feature:

// Hoisting nahi hota
// 🔹 3. Arrow Function (Most Used 🔥)
// const add = (a, b) => a + b;

// 📌 Simple version:
// const greet = () => console.log("Hello");
// 🧠 Easy:
// ➡️ Short syntax, React me use hota hai

// 🔹 4. Anonymous Function
// 👉 Function without name
// setTimeout(function() {
//   console.log("Hello");
// }, 1000);
// 🔹 5. Callback Function ⭐

// 👉 Function jo dusre function me pass hota hai

// function greet(name, callback) {
//   console.log(name);
//   callback();
// }

// greet("Yuvraj", () => {
//   console.log("Done");
// });

// 🧠 Easy:
// ➡️ “Function ke andar function”

// 🔹 6. Higher Order Function ⭐

// 👉 Function jo:

// function accept kare OR
// function return kare
// function outer() {
//   return function() {
//     console.log("Hello");
//   };
// }
// 📘 4. Important Concepts
// ⚡ 1. Hoisting

// 👉 Function declaration upar se call ho sakta hai

// sayHi();

// function sayHi() {
//   console.log("Hi");
// }
// ⚡ 2. Scope

// 👉 Function ke andar variable bahar use nahi hota

// function test() {
//   let a = 10;
// }

// console.log(a); // error
// ⚡ 3. Return

// 👉 Function value return karta hai

// function sum(a, b) {
//   return a + b;
// }
// ⚡ 4. Parameters vs Arguments
// function add(a, b) { // parameters
//   return a + b;
// }

// add(2, 3); // arguments
// ⚡ 5. Default Parameters
// function greet(name = "Guest") {
//   console.log(name);
// }
// ⚡ 6. Rest Operator
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }
// 📘 5. this Keyword (IMPORTANT 🔥)
// ✅ Normal Function
// const user = {
//   name: "Yuvraj",
//   greet() {
//     console.log(this.name);
//   }
// };

// user.greet(); // Yuvraj

// 👉 this = current object

// ❌ Arrow Function
// const user = {
//   name: "Yuvraj",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet(); // undefined

// 👉 arrow me this nahi hota

// 📘 6. Closures (VERY IMPORTANT 🔥)
// function outer() {
//   let count = 0;

//   return function() {
//     count++;
//     console.log(count);
//   };
// }

// const fn = outer();

// fn(); // 1
// fn(); // 2

// 🧠 Easy:
// ➡️ “Function apni purani value yaad rakhta hai”

// 📘 7. Real Dev Use
// 🔥 Array methods (callback)
// [1,2,3].map(x => x * 2);
// 🔥 Event handling
// button.onclick = () => console.log("clicked");
// 🔥 Reusable logic
// function calculateTotal(price, tax) {
//   return price + tax;
// }
// 📘 8. Common Mistakes

// ❌ Missing return:

// const add = (a, b) => {
//   a + b; // no return
// };

// ❌ this in arrow:

// greet: () => console.log(this.name); // wrong
// 💥 FINAL REVISION
// Function → reusable code
// Arrow → short syntax
// Callback → function inside function
// Closure → memory
// this → current object
// Hoisting → declaration works before

// 📘 1. IIFE (Immediately Invoked Function Expression)
// 👉 Kya hota hai?

// 👉 Function jo define hote hi turant run ho jata hai

// ✅ Syntax
// (function() {
//   console.log("Hello");
// })();
// 🔥 Arrow version
// (() => {
//   console.log("Hello");
// })();

// 🧠 Easy samajh:

// ➡️ “Banate hi chal gaya function”

// 🎯 Purpose (VERY IMPORTANT)

// ✅ 1. Private variables banana

// (function() {
//   let secret = "12345";
//   console.log("Inside:", secret);
// })();

// // console.log(secret); ❌ error

// 👉 Bahar access nahi hoga → data safe

// ✅ 2. Global scope pollution avoid karna

// 👉 JS me sab global me aa jata hai (problem)

// var a = 10; // global

// 👉 IIFE use karo:

// (function() {
//   var a = 10;
// })();

// 👉 Ab global me a nahi hai

// ✅ 3. One-time execution

// 👉 Jab function sirf ek baar chalana ho

// (function init() {
//   console.log("App started");
// })();
// 🧠 Interview Line

// 👉 “IIFE is used to create private scope and avoid global pollution”

// 📘 2. Named Function Expression

// 👉 Function ka naam hota hai but variable me store hota hai

// const fn = function greet() {
//   console.log("Hello");
// };

// 👉 greet() outside use nahi hota

// 📘 3. First-Class Functions ⭐

// 👉 JS me function ek value ki tarah treat hota hai

// Example:
// const sayHi = function() {
//   console.log("Hi");
// };

// function callFn(fn) {
//   fn();
// }

// callFn(sayHi);

// 🧠 Easy:
// ➡️ “Function ko variable me store, pass, return kar sakte hain”

// 📘 4. Pure vs Impure Function
// ✅ Pure Function

// 👉 Same input → same output
// 👉 No side effects

// function add(a, b) {
//   return a + b;
// }
// ❌ Impure Function
// let count = 0;

// function increase() {
//   count++;
// }

// 👉 External variable change kar raha hai

// 🧠 Interview:
// ➡️ Pure function predictable hota hai

// 📘 5. Recursive Function

// 👉 Function khud ko call kare

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); // 120

// 🧠 Easy:
// ➡️ “Function apne aap ko call karta hai”

// 📘 6. Generator Function (Advanced - but useful)

// 👉 Special function jo pause/resume hota hai

// function* gen() {
//   yield 1;
//   yield 2;
// }

// const g = gen();

// console.log(g.next()); // {value:1, done:false}

// 🧠 Easy:
// ➡️ “Step by step values deta hai”

// 📘 7. Async Function (VERY IMPORTANT 🔥)

// 👉 Promise handle karne ke liye

// async function getData() {
//   let res = await fetch("api");
//   console.log(res);
// }

// 🧠 Easy:
// ➡️ “Async code ko sync jaisa likhne ke liye”

// 📘 8. Immediately Returned Function (Closure use)
// function outer() {
//   let count = 0;

//   return function() {
//     count++;
//     console.log(count);
//   };
// }

// 👉 Ye closure ka real use hai

// 🚀 MOST IMPORTANT FOR INTERVIEW

// 👉 Ye pakka aayega:

// IIFE (purpose + syntax)
// Callback & Higher Order
// Closure
// this keyword
// Arrow vs Normal
// Pure vs Impure
// Async/Await
// 💥 FINAL QUICK REVISION
// IIFE → immediately run
// Callback → function inside function
// Closure → memory
// Recursion → self call
// Pure → no side effect
// Async → API handling


// ===============================Difference between Primitive and Non Primitive==========================
// Bilkul bhai 👍 — yeh le clean + complete + simple tabular notes (direct revise kar sakta hai)

// 📘 Primitive vs Reference Data Types (Table Format)

//      Feature	                Primitive Data Types	                        Reference Data Types
// =========================================================================================================
// 🔹   Meaning	                Simple value store karta hai	                Complex data (object, array, function)
// 🔹   Examples	            number, string, boolean, null, undefined	    object, array, function
// 🔹   Copy behavior	        Value copy hoti hai	                            Reference (address) copy hota hai
// 🔹   Change effect	        Ek variable change → dusre pe effect nahi	    Ek change → sab pe effect
// 🔹   Memory location	        Stack memory	                                Heap memory
// 🔹   Comparison	            Value compare hota hai	                        Reference (address) compare hota hai
// 🔹   Mutability	            Mostly immutable	                            Mutable (change ho sakta hai)
// 🔹   Performance	            Fast (simple data)	                            Thoda slow (complex structure)
// 🔹   Example (copy)	        b = a → new copy	                            b = a → same reference
// 🔹   Real use	            simple values	                                objects, arrays, functions

// 🔥   Example Difference (VERY IMPORTANT)
// Case	            Primitive	                    Reference
// Code	            let a=10; let b=a; b=20;	    let a={x:1}; let b=a; b.x=2;
// Output	        a = 10 ✅	                   a.x = 2 ❗
// Reason	        copy bana	                    same object use hua

// 💥 One Line Revision (Interview)

// 👉 Primitive → value copy
// 👉 Reference → address copy

// 🧠 Super Simple Memory Trick
// Primitive = alag dabba 📦
// Reference = same dabba share 🤝
// 🚀 Most Asked Interview Lines

// 👉 “Primitive types are copied by value, while reference types are copied by reference.”

// 👉 “Objects share memory, primitives do not.”