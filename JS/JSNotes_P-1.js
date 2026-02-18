// ====================================INTRODUCTION=============================
// 🔹 What is JavaScript?
// JavaScript (JS) is a programming language used mainly for web development.
// It makes websites interactive.
// It is called the “Language of the Web”.

// ✅ What JS can do:
// Show/hide elements
// Validate forms
// Create animations
// Handle button clicks
// Build full web applications
// Create backend servers (with Node.js)

// 🕰 History of JavaScript (Short & Important)
// Created in 1995
// Developed by Brendan Eich
// Built in just 10 days
// Company: Netscape

// 🏷 Name Changes:
// Mocha
// LiveScript
// JavaScript (final name)

// 🔹 Is JavaScript a Scripting Language or Programming Language?
// 📌 Scripting Language
// Interpreted (runs line-by-line)
// No separate compilation step
// Used inside another environment (like browser)
// Example:
// JavaScript inside HTML

// 📌 Programming Language
// Usually compiled
// Converted into machine code
// Can build full applications

// ✅ Final Answer:
// 👉 JavaScript is both
// It behaves like a scripting language
// It also works as a full programming language
// All scripting languages are programming languages.

// 🔹 Client-Side vs Server-Side
// 💻 Client-Side JavaScript
// Runs in the browser.
// Used for:
// Button clicks
// Form validation
// Animations
// DOM manipulation

// 🖥 Server-Side JavaScript
// Runs on the server using Node.js
// Used for:
// Creating APIs
// Handling databases
// Authentication
// Backend logic

// ✅ Final Conclusion:
// JavaScript works on:
// Frontend ✅
// Backend ✅

// So it is both client-side and server-side.
// 🔹 JavaScript Engines
// A JavaScript engine converts JS code into machine code so the computer can understand it.

// Popular Engines:
// 1️⃣ V8  ->  Used in: Chrome, Node.js   ->  Made by Google
// 2️⃣ SpiderMonkey  ->  Used in: Firefox  ->  Made by Mozilla
// 3️⃣ JavaScriptCore  ->  Used in: Safari  ->  Made by Apple
// 4️⃣ Chakra  ->  Used in: Old Microsoft Edge

// 🧠 Interview Important Points (Very Important)
// JS was created in 10 days
// Creator: Brendan Eich
// JS is single-threaded
// JS is interpreted
// JS works on both client and server
// V8 engine powers Node.js


// ===========================================LET,VAR,CONST=================================

// 📘 ECMAScript (ES)
// Official name of JavaScript = ECMAScript
// JavaScript follows ECMAScript standards.
// ES6 = ECMAScript 2015 (major update)
// After ES6, updates happen yearly (ES2016, ES2017, etc.)

// ES6 Introduced:
// let,const,Arrow functions,Classes,Template literals,Before ES6 → only var was used


// 📦 var  -> Function Scoped NOT block scoped
// if (true) {
//   var x = 10;
// }
// console.log(x); // 10 (accessible)

// Reassignment  -> ✔ Allowed
// var x = 10;
// x = 20;

// Redeclaration  -> ✔ Allowed
// var x = 10;
// var x = 30; 

// Hoisting
// ✔ Hoisted and initialized as undefined
// console.log(x); // undefined
// var x = 10;

// Problems with var  -> No block scope, Can be redeclared, Hoisting causes confusion, Can create bugs

// 🚀 let -> Block Scoped
// if (true) {
//   let x = 10;
// }
// console.log(x); // Error

// Reassignment  -> ✔ Allowed
// let x = 10;
// x = 20;

// Redeclaration  -> ❌ Not allowed in same block
// let x = 10;
// let x = 20; // Error

// Hoisting
// ✔ Hoisted but NOT initialized
// → Temporal Dead Zone (TDZ)
// console.log(x); // Error
// let x = 10;

// 🏆 const  -> Block Scoped
// Must Initialize Immediately
// const x = 10; // Correct
// const y; // Error

// Reassignment and Redeclaration -> ❌ Not allowed
// const x = 10;
// x = 20; // Error

// 🔥 const with Objects & Arrays
// Const prevents reassignment, NOT modification.
// const person = { name: "Yuvraj" };
// person.name = "Singh"; // Allowed
// person = {}; // Error

// const arr = [1,2];
// arr.push(3); // Allowed
// arr = []; // Error

// 📊 Comparison Table
// Feature	                  var	                let	            const
// Scope	                  Function	            Block	        Block
// Reassign	                  Yes	                Yes	            No
// Redeclare	              Yes	                No	            No
// Hoisted	                  Yes (undefined) 	    Yes (TDZ)	    Yes (TDZ)
// Must Initialize	          No	                No	            Yes


// ===================HOISTING AND TEMPORAL DEAD ZONE (TDZ)==========================

// ✅ Hoisting (Definition)
// Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.
// Important point to add:
// Only the declaration is hoisted, not the initialization.
// var is hoisted and initialized with undefined.
// let and const are hoisted but not initialized.
// Short version (very crisp):
// Hoisting is when JavaScript internally moves declarations to the top of their scope before execution.

// ✅ Temporal Dead Zone (TDZ) – Definition
// Temporal Dead Zone is the time between the start of a block and the initialization of a let or const variable, during which the variable cannot be accessed.
// Short version:
// TDZ is the period where a let or const variable exists but cannot be accessed until it is initialized.


// =====================================VARIABLE NAMING========================================

// 📘 Variable / Function Naming Conventions (Short Notes)
// ✅ Why Naming Matters
// Good variable names improve readability and code quality.
// Meaningful names make debugging easier.

// 🔹 Camel Case
// First word lowercase, next words capitalized, no spaces.
// Example: firstName, totalAmount, isLoggedIn
// 👉 Mostly used for variables and functions in JavaScript.

// 🔹 Pascal Case (Upper Camel Case)
// Every word starts with capital letter, no spaces.
// Example: UserProfile, StudentData, CarModel
// 👉 Mostly used for class names and React components.

// 🔹 Snake Case
// All words lowercase, separated by underscore _.
// Example: first_name, total_amount
// 👉 Common in Python and databases.

// 🔹 Kebab Case
// All words lowercase, separated by hyphen -.
// Example: first-name, user-profile
// 👉 Common in file names and CSS class names.

// 🎯 Interview Quick Points
// JS variables → Camel Case
// JS classes / React components → Pascal Case
// Database columns → Snake Case
// CSS classes / file names → Kebab Case


// =========================================OPERATORS IN JS==========================================

// 1️⃣ Arithmetic Operators
// 👉 Used to perform mathematical calculations.
// Operator	    Meaning	            Example	        Type
// +	        Addition	        5 + 2 → 7	    Binary
// -	        Subtraction	        5 - 2 → 3	    Binary
// *	        Multiplication	    5 * 2 → 10	    Binary
// /	        Division	        10 / 2 → 5	    Binary
// %	        Remainder	        10 % 3 → 1	    Binary
// **	        Power	            2 ** 3 → 8	    Binary
// ++	        Increment by        1	x++	        Unary
// --	        Decrement by        1	x--	        Unary

// 2️⃣ Assignment Operators
// 👉 Used to assign or update values.
// Operator	    Meaning	                Example	    Type
// =	        Assign value	        x = 10	    Binary
// +=	        Add & assign	        x += 5	    Binary
// -=	        Subtract & assign	    x -= 5	    Binary
// *=	        Multiply & assign	    x *= 2	    Binary
// /=	        Divide & assign	        x /= 2	    Binary

// 3️⃣ Comparison Operators
// 👉 Used to compare values and return true/false.
// Operator	    Meaning	                        Example	                Type
// >	        Greater than	                5 > 3 → true	        Binary
// <	        Less than	                    5 < 3 → false	        Binary
// >=	        Greater equal	                5 >= 5 → true	        Binary
// <=	        Less equal	                    4 <= 3 → false	        Binary
// ==	        Loose equal (value only)	    "5" == 5 → true	        Binary
// ===	        Strict equal (value + type)	    "5" === 5 → false	    Binary
// !=	        Loose not equal	                "5" != 5 → false	    Binary
// !==	        Strict not equal	            "5" !== 5 → true	    Binary

// 👉 Always prefer === in development.

// 4️⃣ Logical Operators
// 👉 Used to combine conditions.
// Operator	    Meaning	                Example	                Type
// &&	        AND (both true)	        true && false → false	Binary
// ||		    OR (any one true)       true && false → true    Binary
// !	        NOT (reverse)	        !true → false	        Unary

// 5️⃣ Bitwise Operators
// 👉 Work on binary (0 & 1) level.

// Operator	    Meaning	            Example     	Type
// &	        Bitwise AND	        5 & 3 → 1	    Binary
// |	        |	                5 | 3 → 7       Binary
// ^	        XOR	                 5 ^ 3 → 6	    Binary
// ~	        NOT	                ~5 → -6	        Unary
// <<	        Left Shift	        5 << 1 → 10	    Binary
// >>	        Right Shift	        5 >> 1 → 2	    Binary

// 🔥 Left Shift (<<) – Very Simple -> Shifts bits to left -> Multiplies number by 2 power n
// Example: rule -> a << b = a × (2^b)
// 5 << 1 → 10
// 5 << 2 → 20

// 🔥 Right Shift (>>) – Very Simple -> Shifts bits to right -> Divides number by 2 power n
// Example: rule -> a >> b = a ÷ (2^b)
// 8 >> 1 → 4
// 8 >> 2 → 2

// 6️⃣ Ternary Operator ->  Short form of if-else.
// Syntax:  condition ? value_if_true : value_if_false
// age >= 18 ? "Adult" : "Minor"

// 7️⃣ Operator Types Summary
// Unary → 1 operand
// Example: ++x, !true

// Binary → 2 operands
// Example: 5 + 2, x > y

// Ternary → 3 operands
// Example: condition ? a : b


// =========================================Literals in JS=============================================

// 🔹 What are Literals in JavaScript?
// 👉 Literal = A fixed value written directly in code.
// When you write a value directly inside your program, that value is called a literal.
// Example: let age = 21;
// Here 21 is a literal.
// So basically:  Literal = Actual value you store in a variable.

// 🔹 Types of Important Literals
// String Literal
// Template Literals
// Object Literals
// Array Literals

// 1️⃣ String Literals -> Used to store text.  Written inside: Single quotes ' ', Double quotes " "
// Example:
// let name = "Mayank";
// let message = 'JavaScript is awesome';

// 🔹 String Concatenation (Joining Strings)
// We use + operator.
// let firstName = "Mayank";
// let lastName = "Pandey";
// let fullName = firstName + " " + lastName;
// console.log(fullName); 
// Mayank Pandey
// 📝 Quick Notes (String Literals) -> Written in ' ' or " " , Used for text , Use + to join strings

// 2️⃣ Template Literals (ES6 Feature) -> Better way to write strings. , Written inside backticks: ` `
// ✨ Why use template literals?
// Insert variables easily, Multi-line strings allowed, Cleaner and readable
// 🔹 Example 1 (Using Variables)
// let a = 10;
// let b = 20;
// console.log(`The sum of ${a} + ${b} is ${a + b}`);

// 👉 ${} is called interpolation
// It inserts variable or expression inside string.

// 🔹 Example 2 (Multi-line String)
// let line1 = "Hello";
// let line2 = "World";
// let message = `
// ${line1}
// ${line2}
// `;
// console.log(message);
// No need for \n like old method.

// 📝 Quick Notes (Template Literals) -> Written using backticks ``, Use ${variable} inside string , Supports multi-line strings,
// More readable than normal strings

// 3️⃣ Object Literals
// 👉 Used to create objects directly. -> Objects store data in key-value pairs. Written inside { }
// Example:
// let person = {
//   name: "Mayank",
//   age: 21,
//   isRunning: true
// };


// Here: name, age, isRunning → keys
// "Mayank", 21, true → values
// ⚠ Important: -> Use , between properties, Do NOT use ; inside object

// ❌ Wrong:
// let obj = {
//   name: "Mayank";
// };

// ✅ Correct:
// let obj = {
//   name: "Mayank",
//   age: 21
// };

// 📝 Quick Notes (Object Literals) -> Used to represent real-world entities, Written using { }, 
// Contains key-value pairs, Keys separated by commas, Very important in JavaScript

// 4️⃣ Array Literals
// 👉 Used to store multiple values in one variable.  Written inside [ ]
// Example 1:
// let colors = ['red', 'green', 'blue'];

// Example 2 (Mixed Data Types)
// let container = [2, "laptop", true, "watch"];


// JavaScript arrays:Can store different types, Can store objects, Can store other arrays

// 📝 Quick Notes (Array Literals) -> Written using [ ], Elements separated by commas,
// Can store mixed data types,Ordered collection (index starts from 0)

// 🔥 Very Simple Difference Summary
// Type	                    Syntax	        Used For
// String Literal	        " " or ' '	    Text
// Template Literal	        ` `	            Formatted strings
// Object Literal	        { }            	Key-value data
// Array Literal	        [ ]	            List of values


// ======================================Conditional statements=======================================

// 🔹 What Are Conditional Statements? -> Conditional statements help us make decisions in code.
// Just like real life:
// If it’s raining → take umbrella
// Else → don’t take umbrella

// Same thing in JavaScript.
// They check a condition:
// If condition is true → run some code
// If condition is false → skip it or run something else

// 1️⃣ If Statement
// 👉 Runs code only if condition is true
// 🔹 Syntax:
// if (condition) {
//    // code runs if condition is true
// }

// 🔹 Example:
let speed = 87;
if (speed > 90) {
  console.log("OverSpeeding");
}
if (speed > 50 && speed <= 90) {
  console.log("Normal");
}
if (speed <= 50) {
  console.log("Slow");
}

// Here:
// speed = 87
// 87 is not > 90 ❌
// 87 is between 50 and 90 ✅
// So output: Normal 

// 📝 Quick Notes (If) ->Used to check condition, Runs only when condition is true, If false → nothing happens

// 2️⃣ If-Else Statement
// 👉 Used when we have two possibilities
// If true → do this Else → do something else
// 🔹 Syntax:
// if (condition) {
//    // if true
// } else {
//    // if false
// }

// 🔹 Example:
let myAge = 15;
if (myAge >= 18) {
   console.log("I can Drive");
} else {
   console.log("Cannot Drive");
}
// Since 15 < 18 → condition false
// So it prints: Cannot Drive

// 📝 Quick Notes (If-Else) -> Used when only 2 outcomes, Either this OR that

// 3️⃣ If-Else-If Statement
// 👉 Used when we have multiple conditions
// Like:
// If condition1
// Else if condition2
// Else (if none match)

// 🔹 Syntax:
// if (condition1) {
//    // run if true
// } else if (condition2) {
//    // run if condition1 false and condition2 true
// } else {
//    // run if all false
// }

// 🔹 Example:
let weight = 65;
if (weight > 70) {
   console.log("Overweight");
} else if (weight > 50 && weight <= 70) {
   console.log("Fit");
} else {
   console.log("Underweight");
}
// Here:
// 65 is not > 70 ❌
// 65 is between 50 and 70 ✅
// So output: Fit

// 📝 Quick Notes (If-Else-If)
// Used for multiple conditions
// Checks from top to bottom
// Stops when first true condition is found
// 🔥 Now Important: Ternary Operator (Conditional Literal)

// You wrote:
// a > b ? true : false;
// This is called the Ternary Operator.
// 👉 It is a shortcut for if-else.
// 🔹 Syntax of Ternary Operator
// condition ? value_if_true : value_if_false;
// It means:
// If condition is true → return first value Else → return second value

// 🔹 Example 1
let a = 10;
let b = 5;
let result = a > b ? true : false;
console.log(result);

// Since 10 > 5 → true
// So result = true
// 🔹 Real Useful Example
// let age = 20;
// let message = age >= 18 ? "Adult" : "Minor";
// console.log(message);

// Much cleaner than full if-else.

// 📝 Quick Notes (Ternary Operator)
// Shortcut of if-else
// Uses ? and :
// Syntax:
// condition ? true_value : false_value
// Used when only two outcomes
// Makes code shorter