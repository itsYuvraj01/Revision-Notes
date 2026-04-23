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

// ==============================================This keyword===============================================

// global - window
// function - window
// method with es5 func - object
// method with es6 arrow func - window
// es5 func inside es5 func - window
// arrow func inside es5 func - object
// event handler - element
// class - blank object

// function ko call krte time app set kr skte ho ki uski this ki value kya hogi

// let obj = {
//     name:'Yuvraj'
// }

// function abcd() {
//     console.log(this)
// }

// abcd(); ----> window

// call , apply & bind 
// Call
// let obj = {
//     name:'Yuvraj'
// }

// function abcd() {
//     console.log(this)
// }

// abcd.call(obj);   ---> abcd me obj ki property aaa gyi now it will give us obj this

// Apply
// let obj = {
//     name:'Yuvraj',
//     age:26
// }

// function abcd(a,b,c) {
//     console.log(this ,a ,b ,c)
// }

// abcd.apply(obj, [1,2,3]);   ---> apply me do params pass hote hai obj and array of values jitni bhi hai 


// let obj = {
//     name:'Yuvraj',
//     age:26
// }

// function abcd(a,b,c) {
//     console.log(this ,a ,b ,c)
// }

// let fnc = abcd.bind(obj,1,2,3);   ---> bind ek function deta hai aur isme apply ki trh array type nhi jata saari values jati hai  


// 🧠 What is this?

// 👉 this means:
// “Which object is currently calling this function?”

// It is NOT fixed — it depends on how the function is called.

// 🔑 Golden Rule (Very Important)

// 👉 this is decided at CALL TIME, not when function is written

// 📍 1. this in Global Scope
// console.log(this);
// In browser:

// 👉 this === window

// 📍 2. this inside a Normal Function
// function test() {
//   console.log(this);
// }

// test();

// 👉 In browser → window
// 👉 In strict mode → undefined

// 📍 3. this inside an Object Method
// const user = {
//   name: "Yuvraj",
//   greet() {
//     console.log(this.name);
//   }
// };

// user.greet();

// 👉 Output: Yuvraj

// 👉 Here:
// this = user
// (because user is calling the function)

// 📍 4. this in Event Handlers
// button.addEventListener("click", function () {
//   console.log(this);
// });

// 👉 this = button

// Because button triggered the event.

// ⚡ 5. Arrow Functions (IMPORTANT)

// 👉 Arrow functions DO NOT have their own this

// They take this from parent (lexical scope)

// ❌ Wrong Example
// const user = {
//   name: "Yuvraj",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet();

// 👉 Output: undefined

// Because:
// 👉 Arrow function takes this from outside (global)

// ✅ Correct Way
// const user = {
//   name: "Yuvraj",
//   greet() {
//     console.log(this.name);
//   }
// };
// 🤯 Why Arrow Functions “lose” this?

// Because they don’t create their own this.

// 👉 They just borrow from outer scope

// 📍 6. this in Classes
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(this.name);
//   }
// }

// const p1 = new Person("Yuvraj");
// p1.greet();

// 👉 this = instance (p1)

// 🔧 7. Manual Binding (bind, call, apply)

// Sometimes you want to control this manually

// ✅ call()
// function greet() {
//   console.log(this.name);
// }

// const user = { name: "Yuvraj" };

// greet.call(user);

// 👉 this = user

// ✅ apply()

// Same as call, but arguments in array

// greet.apply(user);
// ✅ bind() (Most Important)
// const newFunc = greet.bind(user);
// newFunc();

// 👉 permanently binds this

// 🧠 Mindset (From your image — VERY IMPORTANT)

// 👉 “this doesn’t lie — call site defines it”

// Meaning:

// Don’t see where function is written ❌
// See how it is called ✅
// ⚠️ Common Confusion
// ❓ Why this breaks in methods?
// const user = {
//   name: "Yuvraj",
//   greet() {
//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   }
// };

// user.greet();

// 👉 Output: undefined

// Because:
// 👉 inner() is called as normal function → this = window

// ✅ Fix using arrow
// greet() {
//   const inner = () => {
//     console.log(this.name);
//   };
//   inner();
// }

// 👉 Now works ✅

// 🛠️ Practice Tasks (from your image)
// ✅ 1. Counter with increment/decrement

// Use this inside object

// const counter = {
//   count: 0,
//   inc() {
//     this.count++;
//     console.log(this.count);
//   },
//   dec() {
//     this.count--;
//     console.log(this.count);
//   }
// };
// ✅ 2. Function that remembers config (Closure)
// function createLogger(prefix) {
//   return function (msg) {
//     console.log(prefix + ": " + msg);
//   };
// }

// const log = createLogger("INFO");
// log("Hello");
// ✅ 3. Fix this using bind
// const user = {
//   name: "Yuvraj",
//   greet() {
//     console.log(this.name);
//   }
// };

// const fn = user.greet;
// fn(); // ❌ undefined

// const fixed = user.greet.bind(user);
// fixed(); // ✅ Yuvraj
// 🚀 Final Summary (Keep This in Mind)

// 👉 this depends on how function is called
// 👉 Arrow functions don’t have this
// 👉 Use bind when this is lost
// 👉 Methods → this = object
// 👉 Events → this = element



// ====================================================OOPS=================================================
// 🧠 What is OOP in JavaScript?

// 👉 OOP = Organizing code using objects (real-world style)

// Instead of writing random functions, you create:

// Objects (like real things)
// Properties (data)
// Methods (actions)
// 🧱 1. Constructor Functions (Old Way)

// Before ES6 classes, we used functions to create objects.

// function User(name, balance) {
//   this.name = name;
//   this.balance = balance;
// }

// const u1 = new User("Yuvraj", 1000);

// 👉 new does 4 things:

// Creates empty object {}
// Sets this to that object
// Adds properties
// Returns object
// 🔗 2. Prototypes (VERY IMPORTANT)

// 👉 Problem: If you define methods inside constructor → memory waste

// function User(name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log("Hi");
//   };
// }

// ❌ Every object gets its own copy

// ✅ Solution: Prototype
// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };

// 👉 Now all objects share ONE method

// 🚀 3. ES6 Classes (Modern Way)

// Cleaner syntax over same concept

// class User {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }
// }

// 👉 Behind the scenes → still uses prototype

// 🧬 4. Inheritance (extends, super)

// 👉 Child class can reuse parent class

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Admin extends User {
//   constructor(name, role) {
//     super(name); // call parent constructor
//     this.role = role;
//   }
// }

// 👉 extends → inheritance
// 👉 super() → parent constructor call

// 🔒 5. Encapsulation (Private Fields)

// 👉 Hide internal data

// class Bank {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// 👉 #balance = private (cannot access outside)

// ⚠️ Confusions (From your image)
// ❓ Class vs Function + Prototype

// 👉 Both do SAME thing

// Old Way	New Way
// Constructor + prototype	class
// More manual	Cleaner
// ❓ Prototype Chain
// obj → User.prototype → Object.prototype → null

// 👉 JS looks up properties step by step

// ❓ Shared vs Own Properties
// this.name = "Yuvraj"; // own property
// User.prototype.sayHi // shared
// 🧠 Mindset (IMPORTANT)

// 👉 Classes are for structure
// 👉 Functions are for flexibility

// 🛠️ Practice Example (Bank Account)
// class BankAccount {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`${amount} deposited`);
//   }

//   withdraw(amount) {
//     this.balance -= amount;
//     console.log(`${amount} withdrawn`);
//   }
// }

// const acc = new BankAccount("Yuvraj", 1000);
// acc.deposit(500);
// acc.withdraw(200);
// 🧬 Extend User → Admin
// class Admin extends BankAccount {
//   deleteUser() {
//     console.log("User deleted");
//   }
// }
// 🎬 STORY TIME (Best Way to Remember)

// Imagine this 👇

// 🏦 Bank System Story

// You build a Bank App

// 👤 Step 1: User Blueprint (Class)

// You say:

// “Every user should have name + balance”

// 👉 That’s your class

// 💰 Step 2: Methods

// Users can:

// deposit 💵
// withdraw 💸

// 👉 These are methods

// 🧬 Step 3: Many Users

// From one class:

// new BankAccount("Yuvraj", 1000)
// new BankAccount("Rahul", 2000)

// 👉 Same structure, different data

// 🧠 Step 4: Prototype Magic

// All users share:

// deposit()
// withdraw()

// 👉 Saves memory ⚡

// 👑 Step 5: Admin Power

// Now you say:

// “Admin is also a user… but with extra powers”

// 👉 extends User

// Admin can:

// delete accounts ❌
// manage users ⚙️
// 🔒 Step 6: Secret Balance

// You don’t want anyone to directly change balance:

// 👉 Use private field (#balance)

// 🧠 Final Memory Trick

// 👉 Class = Blueprint
// 👉 Object = Real instance
// 👉 Prototype = Shared brain
// 👉 Inheritance = Copy powers
// 👉 Encapsulation = Hide secrets