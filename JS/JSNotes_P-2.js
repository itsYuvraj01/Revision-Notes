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