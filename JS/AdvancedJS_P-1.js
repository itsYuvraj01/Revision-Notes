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


//====================================== Callbacks , Promises & Async-await==================================

// 1. Synchronous vs Asynchronous JS
// 👉 Synchronous (Normal JS)
// Code runs line by line
// One task at a time
// console.log("Start");
// console.log("Middle");
// console.log("End");

// 👉 Output:

// Start
// Middle
// End
// 👉 Asynchronous (Async JS)
// Some tasks take time (API, timer, file, DB)
// JS doesn’t wait → it moves forward
// console.log("Start");

// setTimeout(() => {
//   console.log("Inside Timeout");
// }, 2000);

// console.log("End");

// 👉 Output:

// Start
// End
// Inside Timeout   (after 2 sec)

// 👉 Why?
// Because JS says: “I’ll do this later, let me continue now”

// 🔥 2. Callback Pattern & Callback Hell
// 👉 Callback = function inside function
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// fetchData((data) => {
//   console.log(data);
// });
// ❌ Callback Hell (Problem)
// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);

//   }, 1000);

// }, 1000);

// 👉 This becomes:

// Hard to read 😵
// Hard to debug 😤
// 🔥 3. Promises (Solution to Callback Hell)

// 👉 Promise = “I will give result in future”

// 👉 States:
// Pending
// Resolved (success)
// Rejected (error)
// 👉 Basic Example
// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Data fetched");
//   } else {
//     reject("Error occurred");
//   }
// });

// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// 👉 Chaining Promises
// Promise.resolve(1)
//   .then((num) => num + 1)
//   .then((num) => num + 1)
//   .then((num) => console.log(num));

// 👉 Output:

// 3
// 🔥 4. async / await (Best & Cleanest Way)

// 👉 Makes async code look like normal sync code 😍

// 👉 Example
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// async function fetchData() {
//   let result = await getData();
//   console.log(result);
// }

// fetchData();
// ⚠️ Important Rule

// 👉 await works only inside async function

// 🔥 5. Error Handling (try-catch)
// async function fetchData() {
//   try {
//     let result = await getData();
//     console.log(result);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// 🔥 6. Chaining Async Operations
// 👉 Sequential (one after another)
// async function run() {
//   let a = await Promise.resolve(1);
//   let b = await Promise.resolve(2);
//   let c = await Promise.resolve(3);

//   console.log(a + b + c);
// }
// 👉 Parallel (faster)
// async function run() {
//   let [a, b, c] = await Promise.all([
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
//   ]);

//   console.log(a + b + c);
// }
// ⚠️ Confusions (VERY IMPORTANT)
// ❓ 1. "Async functions always return promises"
// async function test() {
//   return 10;
// }

// test().then(console.log);

// 👉 Output:

// 10

// 👉 Even if you return normal value → it becomes promise

// ❓ 2. Mixing async/await with then/catch

// 👉 ❌ Not recommended:

// async function test() {
//   await getData().then(res => console.log(res));
// }

// 👉 ✅ Better:

// async function test() {
//   let res = await getData();
//   console.log(res);
// }
// 🧠 Mindset (Most Important Line)

// 👉 Async is NOT magic

// It simply means:

// “Pause here, wait for result, then continue”

// 🛠 Practice Examples
// ✅ 1. Delay Simulator
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function run() {
//   console.log("Start");
//   await delay(2000);
//   console.log("After 2 sec");
// }

// run();
// ✅ 2. Fetch Multiple Users Sequentially
// async function fetchUser(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`User ${id}`);
//     }, 1000);
//   });
// }

// async function run() {
//   let user1 = await fetchUser(1);
//   let user2 = await fetchUser(2);

//   console.log(user1);
//   console.log(user2);
// }

// run();
// 🚀 Final Story (Easy Memory Trick)

// Imagine:

// 👨‍🍳 You are cooking food:

// Synchronous → Cook 1 dish → finish → then next
// Async (callback) → Ask friend: “Tell me when ready”
// Promises → Friend says: “I promise I’ll inform you”
// async/await → You say: “I’ll wait here until it's ready”

// 🔁 Callback vs Promise vs Async/Await
// 🔹 1. Callbacks (Old way)

// 👉 A callback is just a function passed inside another function
// 👉 It runs after some task is completed

// function getData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }

// getData((data) => {
//   console.log(data);
// });
// ✅ Pros:
// Simple for small tasks
// ❌ Cons:
// Becomes messy when nested → Callback Hell
// Hard to debug
// 🔹 2. Promises (Better way)

// 👉 Promise = “I’ll give result later”
// 👉 Handles async operations more cleanly

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 1000);
//   });
// }

// getData()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ✅ Pros:
// Cleaner than callbacks
// Supports chaining (.then())
// ❌ Cons:
// Still can become complex with many .then()
// 🔹 3. Async/Await (Best & Modern way)

// 👉 Built on top of promises
// 👉 Makes async code look like normal sync code

// async function fetchData() {
//   let data = await getData();
//   console.log(data);
// }

// fetchData();
// ✅ Pros:
// Very clean and readable
// Easy error handling (try-catch)
// Best for real projects
// ❌ Cons:
// Must understand promises first
// ⚡ Key Difference (Quick Table)
// Feature	                Callback	        Promise	            Async/Await
// Readability	            ❌ Low	            ⚠️ Medium	        ✅ High
// Error Handling	        ❌ Difficult	        ⚠️ Better	        ✅ Easy
// Chaining	                ❌ Messy	            ✅ Good	           ✅ Clean
// Usage Today	            ⚠️ Rare	             ✅ Common	        🔥 Most Used
// 🧠 Which one is better?

// 👉 Short Answer:

// ✅ Async/Await is the best

// 👉 Real Answer:

// Callback → basic understanding
// Promise → foundation
// Async/Await → what you should use in real projects
// 💡 Important Insight (Interview Gold)

// 👉 Async/Await is NOT different from Promise
// It is just syntax sugar over promises

// 🚀 Simple Analogy

// Imagine ordering food 🍔:

// Callback → “Call me when food is ready”
// Promise → “I promise I’ll deliver food”
// Async/Await → “I’ll wait here until food arrives”
// 🔥 Final Advice (For You as Developer)

// Since you’re doing React + Node (MERN):

// 👉 Use:

// Async/Await everywhere
// Promises when needed (like Promise.all)
// Avoid callbacks except in rare cases


// =========================================HTTP and Fetch API==============================================

// 🌐 1. What is HTTP?

// 👉 HTTP (HyperText Transfer Protocol)
// It is the rule/way your frontend talks to backend/server.

// 💡 Example:

// You click "Get Users"
// Browser sends request → Server
// Server sends response → Browser
// 🔁 HTTP Flow (Very Important)
// Client (Frontend)  --->  Request  --->  Server
// Client (Frontend)  <---  Response <---  Server
// 📦 2. HTTP Methods (Must Know)
// Method	Use
// GET	Fetch data
// POST	Send new data
// PUT	Update full data
// PATCH	Update partial data
// DELETE	Remove data
// ✅ Example (Real Understanding)
// GET → Get all users
// POST → Create new user
// PUT → Update full user
// DELETE → Delete user
// 📊 3. HTTP Status Codes
// Code	Meaning
// 200	Success
// 201	Created
// 400	Bad request
// 401	Unauthorized
// 404	Not found
// 500	Server error

// 👉 Interview line:

// Status codes tell if request succeeded or failed

// 🌐 4. What is Fetch API?

// 👉 fetch() is a built-in JavaScript function
// 👉 Used to call APIs (backend)

// 🔹 Basic Syntax
// fetch(url, options)
// 🔹 5. GET Request (Most Common)
// async function getUsers() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");

//   let data = await response.json();

//   console.log(data);
// }

// getUsers();
// 🧠 Explanation:
// fetch() → sends request
// response → raw result
// response.json() → converts to JS object
// 🔹 6. POST Request (Send Data)
// async function createUser() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: "Yuvraj",
//       age: 22
//     })
//   });

//   let data = await response.json();
//   console.log(data);
// }

// createUser();
// 🧠 Key Points:
// method → POST
// headers → tells server data type
// body → actual data (always stringified)
// 🔹 7. PUT / DELETE Example
// // PUT (update)
// fetch("https://api.com/user/1", {
//   method: "PUT",
//   body: JSON.stringify({ name: "Updated" }),
//   headers: { "Content-Type": "application/json" }
// });

// // DELETE
// fetch("https://api.com/user/1", {
//   method: "DELETE"
// });
// ⚠️ 8. Error Handling (VERY IMPORTANT)
// async function getData() {
//   try {
//     let response = await fetch("https://api.com/data");

//     if (!response.ok) {
//       throw new Error("Error in API");
//     }

//     let data = await response.json();
//     console.log(data);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }
// 🔥 9. Important Notes (Interview + Real Use)

// 👉 fetch() does NOT throw error for 404/500
// 👉 You must check:

// response.ok

// 👉 Always use:

// async/await with fetch
// try-catch for errors
// ⚡ 10. Quick Notes (Revise Fast)
// HTTP = communication between client & server
// Methods = GET, POST, PUT, DELETE
// Status codes = success or error
// fetch() = used to call APIs
// response.json() = convert data
// async/await = clean handling
// try-catch = error handling
// 🚀 Real Life Flow (Easy Story)

// 👉 You (frontend) order pizza 🍕

// Request → “Give me pizza”
// Server → checks kitchen
// Response → pizza 🍕

// If error:

// “Out of stock” → 404 😄
// 💡 Pro Tip (For Your MERN Work)

// In your React app:

// Use fetch inside useEffect
// Store data in state
// Show in UI