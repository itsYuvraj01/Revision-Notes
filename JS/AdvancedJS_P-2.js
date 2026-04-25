// ===========================================Design Patterns===============================================

// 🧠 What are Design Patterns?

// 👉 Design patterns =
// Reusable solutions to common problems in coding

// 💡 Think like:

// “Shortcut ways to write better code”

// 🔥 1. Module Pattern (IIFE)

// 👉 Used to hide data (private variables) and expose only what you want

// ✅ Example:
// const Counter = (function () {
//   let count = 0; // private

//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     decrement: function () {
//       count--;
//       console.log(count);
//     }
//   };
// })();

// Counter.increment(); // 1
// Counter.increment(); // 2
// 🧠 Key Idea:
// count is private
// Cannot access directly → Counter.count ❌
// 📌 Use Case:
// Data hiding
// Secure logic (like auth, config)
// 🔥 2. Revealing Module Pattern

// 👉 Same as module pattern but cleaner structure

// ✅ Example:
// const Counter = (function () {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(count);
//   }

//   function decrement() {
//     count--;
//     console.log(count);
//   }

//   return {
//     increment,
//     decrement
//   };
// })();
// 🧠 Difference:
// Functions defined first, then returned
// Cleaner & readable
// 🔥 3. Factory Function Pattern

// 👉 Function that creates and returns objects

// ✅ Example:
// function createUser(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`Hello ${name}`);
//     }
//   };
// }

// const user1 = createUser("Yuvraj", 22);
// const user2 = createUser("Rahul", 25);

// user1.greet();
// 🧠 Key Idea:
// No class, no new
// Just a function → returns object
// 📌 Use Case:
// Creating multiple similar objects
// Cleaner than constructors
// 🔥 4. Observer Pattern (Pub-Sub)

// 👉 One object notifies multiple objects when something changes

// 🧠 Real Life:
// YouTube channel 📺
// You subscribe → get notified on new video
// ✅ Example:
// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }

//   subscribe(event, listener) {
//     if (!this.events[event]) {
//       this.events[event] = [];
//     }
//     this.events[event].push(listener);
//   }

//   emit(event, data) {
//     if (this.events[event]) {
//       this.events[event].forEach(fn => fn(data));
//     }
//   }
// }

// const emitter = new EventEmitter();

// emitter.subscribe("notify", (data) => {
//   console.log("User1 received:", data);
// });

// emitter.subscribe("notify", (data) => {
//   console.log("User2 received:", data);
// });

// emitter.emit("notify", "New message!");
// 🧠 Output:
// User1 received: New message!
// User2 received: New message!
// 📌 Use Case:
// Notifications
// Event systems
// React state updates (similar concept)
// ⚠️ Common Confusions
// ❓ Module vs Factory
// Feature	Module Pattern	Factory Function
// Purpose	Hide data	Create objects
// Private variables	✅ Yes	❌ No
// Returns	Methods only	Full object
// ❓ IIFE vs Arrow Function

// 👉 IIFE = Immediately runs

// (function () {
//   console.log("Runs immediately");
// })();

// 👉 Arrow function does NOT auto-run

// const fn = () => console.log("Not auto run");
// fn();
// 🧠 Mindset (Important Line)

// Patterns are not rules — they are smart ways to solve repeated problems

// 🛠 Practice Idea (Very Useful)

// 👉 Build Notification System (Observer Pattern)

// Example:

// User subscribes
// Send message → all users get notified
// 🚀 Final Story (Easy Memory Trick)

// Imagine an app:

// Module Pattern → hides internal data 🔒
// Revealing Module → cleaner version ✨
// Factory Function → creates users 👥
// Observer Pattern → sends notifications 🔔



// ====================================Performance Optimisation========================================
// Topics to cover please refer google or chatgpt for this section and see in react and js both
// 1. Debouncing 
// 2. Throtteling 
// 3. Lazy Loading / Lazy loading with intersection observer 
// 4. Code splitting 
// 5. Reflow Repaint 
// 6. Memory leaks


// =============================================Advanced JS topics===========================================

// 🧠 1. Pure vs Impure Functions (Deep Understanding)
// ✅ Pure Function — Think “Math Formula”

// 👉 Rules:

// Same input → same output
// No side effects (no external changes)
// function multiply(a, b) {
//   return a * b;
// }

// 👉 Why it’s powerful:

// Easy to test
// No bugs from hidden state
// Predictable behavior
// ❌ Impure Function — Depends on outside world
// let discount = 10;

// function getPrice(price) {
//   return price - discount;
// }

// 👉 Problem:

// If discount changes → output changes
// Hard to debug
// ⚠️ Side Effects (IMPORTANT)

// 👉 Anything that affects outside world:

// API calls
// DOM changes
// modifying global variables
// console.log (yes, technically)
// 🎯 Interview Explanation:

// Pure functions are deterministic and avoid side effects, making them easier to test and maintain. Impure functions depend on external state or modify it.

// 🔥 2. Functional Programming (Real Thinking)

// 👉 Instead of how to do, focus on what to do

// 🔹 Traditional Way (Imperative ❌)
// let result = [];
// for (let i = 0; i < 5; i++) {
//   result.push(i * 2);
// }
// 🔹 Functional Way (Declarative ✅)
// let result = [1, 2, 3, 4, 5].map(n => n * 2);

// 👉 Cleaner, readable, less bugs

// 🔹 map() → Transform
// users.map(u => u.name);

// 👉 “Give me names”

// 🔹 filter() → Select
// users.filter(u => u.age > 18);

// 👉 “Give me adults”

// 🔹 reduce() → Combine (MOST IMPORTANT)
// let total = [10, 20, 30].reduce((sum, val) => sum + val, 0);

// 👉 “Give me total”

// 🧠 Pipeline Thinking (VERY IMPORTANT)
// let result = users
//   .filter(u => u.age > 18)
//   .map(u => u.name);

// 👉 Step-by-step transformation

// 🎯 Interview Line:

// Functional programming focuses on immutability and using functions like map, filter, and reduce to transform data in a declarative way.

// 🔥 3. Separation of Concerns (Deep + Real World)

// 👉 Big idea:

// “Each part of code should do only ONE job”

// ❌ Bad Code (Everything mixed)
// function handleUser() {
//   fetch("/api/user")
//     .then(res => res.json())
//     .then(data => {
//       document.getElementById("name").innerText = data.name;
//     });
// }

// 👉 Problem:

// API + UI mixed
// Hard to reuse
// Hard to test
// ✅ Good Code (Separated)
// // API Layer
// function fetchUser() {
//   return fetch("/api/user").then(res => res.json());
// }

// // UI Layer
// function updateUI(user) {
//   document.getElementById("name").innerText = user.name;
// }

// // Controller
// fetchUser().then(updateUI);
// 🧠 In React (VERY IMPORTANT FOR YOU)

// 👉 Separation:

// Component → UI
// Services → API calls
// Hooks → logic
// 🎯 Interview Line:

// Separation of concerns improves scalability by isolating UI, business logic, and data handling.

// 🔥 4. Custom Utilities (Deep Understanding)

// 👉 Writing your own reusable functions

// 🔹 Why important?
// Reduces duplicate code
// Improves readability
// Shows strong JS understanding
// ✅ Custom map (low-level understanding)
// function myMap(arr, fn) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i], i));
//   }

//   return result;
// }
// ✅ Deep Clone (IMPORTANT INTERVIEW)
// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") return obj;

//   let copy = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     copy[key] = deepClone(obj[key]);
//   }

//   return copy;
// }
// ⚠️ Why not simple copy?
// let obj2 = obj1; // ❌ reference copy

// 👉 Changes affect both

// 🎯 Interview Line:

// Custom utilities help in abstraction and reuse, and demonstrate deeper understanding of JavaScript internals.

// 🔥 5. How JavaScript Works (Event Loop Deep)

// 👉 JS is single-threaded
// 👉 Can do only one task at a time

// But still handles async using:

// 🔹 Components:
// Call Stack → where code runs
// Web APIs → browser handles async
// Callback Queue → waiting tasks
// Event Loop → manages execution
// ✅ Example:
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");
// 👉 Output:
// Start
// End
// Promise
// Timeout
// 🧠 Why?
// Promise → Microtask queue (high priority)
// setTimeout → Macrotask queue

// 👉 Order:

// Call stack
// Microtasks (Promises)
// Macrotasks (setTimeout)
// 🎯 Interview Line:

// The event loop prioritizes microtasks over macrotasks, which is why promises execute before setTimeout.

// 🧠 6. Architecture Thinking (MOST IMPORTANT FOR SENIORITY)

// 👉 This is what separates:

// Beginner ❌
// Developer ✅
// Strong Developer 🔥
// ❌ Feature Thinking:

// “Just make it work”

// ✅ Architecture Thinking:

// “Make it reusable, scalable, maintainable”

// 🔹 Example:

// Instead of:

// fetch("/api/users");
// fetch("/api/products");
// fetch("/api/orders");

// 👉 Think:

// function apiCall(url) {
//   return fetch(url).then(res => res.json());
// }
// 🔹 Bigger Thinking:
// Reusable components
// API service layer
// Central error handling
// Clean folder structure