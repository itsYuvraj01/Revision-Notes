//================================================Data Tyeps==============================================

// 🔹 What Are Data Types?
// 👉 Data types tell JavaScript what kind of value a variable is storing.

// Example:
// let age = 25;      // number
// let name = "Yuvraj";  // string


// Different types of data = different behavior.
// 🔥 JavaScript Has 2 Main Categories
// 1. Primitive Data Types                      2. Non-Primitive (Reference) Data Types
// 

// 🟢 1️⃣ Primitive Data Types

// 👉 These store single simple values.

// There are 7 primitive types in JS:

// 1. Number

// 👉 Used for numbers (integer + decimal)

// let age = 25;
// let price = 99.99;


// No separate int or float in JS — everything is number.

// 2. String

// 👉 Used for text

// let name = "Yuvraj";
// let message = 'Hello';


// Text always inside quotes.

// 3. Boolean

// 👉 Only two values:

// true

// false

// let isLoggedIn = true;
// let isAdmin = false;


// Used in conditions mostly.

// 4. Undefined

// 👉 When a variable is declared but not assigned value.

// let x;
// console.log(x); // undefined


// Means: "Value not given yet"

// 5. Null

// 👉 Means intentionally empty.

// let data = null;


// Difference:

// undefined → value not assigned

// null → intentionally empty

// 6. BigInt

// 👉 Used for very large numbers

// let bigNumber = 12345678901234567890n;


// Notice n at the end.

// Used rarely unless working with huge numbers.

// 7. Symbol

// 👉 Used to create unique values.

// let id = Symbol("id");


// Mostly used in advanced JS or frameworks.

// 🟡 2️⃣ Non-Primitive (Reference) Data Types

// 👉 These store collections or complex data.

// Main ones:

// Object

// Array

// Function

// 1. Object

// Stores data in key-value pairs.

// let person = {
//   name: "Yuvraj",
//   age: 22
// };


// Very important in JavaScript.

// 2. Array

// Stores multiple values in order.

// let colors = ["red", "blue", "green"];


// Index starts from 0.

// 3. Function

// Function is also treated as an object in JS.

// function greet() {
//    console.log("Hello");
// }

// 🔥 Primitive vs Non-Primitive (Very Important)
// Primitive	Non-Primitive
// Stores single value	Stores multiple values
// Stored by value	Stored by reference
// Simple data	Complex data
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