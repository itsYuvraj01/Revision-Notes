// 🔹 1. Scope (Where can I access a variable?)

// 👉 Scope = where your variable lives and can be used

// Types of Scope:
// Global Scope → available everywhere
// Function Scope → inside a function
// Block Scope → inside {} (with let & const)
// Example:
// let name = "Yuvraj"; // Global scope

// function greet() {
//   let msg = "Hello"; // Function scope
//   console.log(msg + " " + name);
// }

// greet(); // Hello Yuvraj
// console.log(msg); // ❌ Error (msg not accessible)

// 👉 Simple line:
// Scope decides who can see your variable

// 🔹 2. Execution Context (How JS runs your code)

// 👉 Execution Context = environment where JS runs code

// Whenever JS runs:

// It creates an execution context
// It stores variables + functions
// Then executes line by line
// Types:
// Global Execution Context (runs first)
// Function Execution Context (created when function is called)
// Example:
// let a = 10;

// function test() {
//   let b = 20;
//   console.log(a + b);
// }

// test();
// What happens internally:
// Global context created → a = 10, test = function
// test() called → new execution context created
// b = 20
// a + b = 30

// 👉 Simple line:
// Execution Context = “JS ka workspace” where code runs

// 🔹 3. Closures (Memory power 💡)

// 👉 Closure = function + its remembered variables

// Even after a function is finished, it remembers variables from its outer scope

// Example:
// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3
// Why this works?
// outer() finishes ❌
// But inner() still remembers count ✅

// 👉 That memory = Closure

// 👉 Simple line:
// Closure = “function apni purani yaadein nahi bhoolta” 😄

// 🔥 How All 3 Work Together
// function parent() {
//   let x = 10;

//   function child() {
//     console.log(x);
//   }

//   return child;
// }

// const fn = parent();
// fn(); // 10
// Breakdown:
// x → Scope (inside parent)
// parent() → Execution context created
// child() → Closure (remembers x)
// 🔹 Real Use Cases (Important for Interviews + Dev)
// 1. Data Privacy
// function bankAccount() {
//   let balance = 1000;

//   return function(amount) {
//     balance += amount;
//     console.log(balance);
//   };
// }

// const deposit = bankAccount();
// deposit(500); // 1500

// 👉 Balance cannot be accessed directly → secure

// 2. Counters / State
// function counter() {
//   let count = 0;
//   return () => ++count;
// }
// 3. React (VERY IMPORTANT ⚛️)

// Closures are used in:

// useState
// Event handlers
// API calls
// 🧠 Quick Revision (Interview Ready)
// Scope → where variable is accessible
// Execution Context → how JS runs code
// Closure → function remembers outer variables

// If you want, I can give you:

// 🔥 tricky interview questions on closures
// 💡 real React examples (very useful for your job prep)
// 🧪 visual diagram to remember forever

// Just tell me 👍