// ============================================LOOPS IN JS====================================================

// 📘 1. What is Loop?
// 👉 Loop = same kaam baar-baar karna automatically

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// 🧠 Easy line:
// ➡️ “Repeat karna hai → loop use karo”

// 🚀 TYPES OF LOOPS IN JS
// 🔹 1. for loop (MOST IMPORTANT 🔥)
// 👉 Syntax
// for (initialization; condition; update) {
//   // code
// }
// ✅ Example 1
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// 👉 Output: 0 1 2 3 4

// ✅ Example 2 (reverse)
// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }
// 📌 Use:

// ➡️ Jab count pata ho

// 🔹 2. while loop
// 👉 Syntax
// while (condition) {
//   // code
// }
// ✅ Example
// let i = 0;

// while (i < 3) {
//   console.log(i);
//   i++;
// }
// 📌 Use:

// ➡️ Jab iterations ka idea nahi ho

// 🔹 3. do...while loop
// 👉 Syntax
// do {
//   // code
// } while (condition);
// ✅ Example
// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 3);
// ⚠️ Important:

// 👉 At least 1 baar run karega

// 🔹 4. for...of loop (VERY IMPORTANT 🔥)

// 👉 Arrays ke liye best

// ✅ Example
// const arr = [10, 20, 30];

// for (let value of arr) {
//   console.log(value);
// }

// 👉 Output: 10 20 30

// 📌 Use:

// ➡️ Array values directly chahiye

// 🔹 5. for...in loop (Objects ke liye 🔥)

// 👉 Object keys ke liye

// ✅ Example
// const user = {
//   name: "Yuvraj",
//   age: 22
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }

// 👉 Output:
// name Yuvraj
// age 22

// 📌 Use:

// ➡️ Object iterate karne ke liye

// 🔹 6. forEach() (Array method)

// 👉 Loop jaisa hi hai

// ✅ Example
// [1,2,3].forEach((value, index) => {
//   console.log(value, index);
// });
// ⚠️ Important:
// break nahi use kar sakte
// return nahi hota
// 🔹 7. map() (Loop + transform)
// const result = [1,2,3].map(x => x * 2);

// 👉 Output: [2,4,6]

// 🔥 IMPORTANT DIFFERENCE (INTERVIEW)
// for vs forEach
// for	                            forEach
// break use kar sakte	            ❌ nahi
// flexible	                        limited
// old but powerful             	modern

// for...of vs for...in
// for...of	                        for...in
// values deta hai	                keys deta hai
// array ke liye	                object ke liye

// 🚀 REAL DEV EXAMPLES
// ✅ 1. Array loop (React)
// users.map(user => <div>{user.name}</div>);

// ✅ 2. Object loop
// Object.entries(user).forEach(([key, value]) => {
//   console.log(key, value);
// });
// ✅ 3. Search example
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) break;
// }
// 🔥 INTERVIEW MUST KNOW

// 👉 Ye pakka aayega:

// for vs while
// forEach vs map
// for...of vs for...in
// break/continue
// infinite loop


// FINAL REVISION (INTERVIEW)
// 🔥 for vs while

// ➡️ for = fixed
// ➡️ while = condition

// 🔥 forEach vs map

// ➡️ forEach = no return
// ➡️ map = new array

// 🔥 for...of vs for...in

// ➡️ of = values
// ➡️ in = keys

// 🔥 break / continue

// ➡️ break = stop
// ➡️ continue = skip

// 🔥 infinite loop

// ➡️ condition never false

// 🧠 Real Advice (for YOU)

// Bhai MERN dev ke liye:

// 👉 use mostly:

// map (React)
// forEach (simple loops)
// for...of (clean code)
// Object.entries (object loop)


// ========================================JS FEATURES ===============================================
// 📘 1. Garbage Collector (GC)
// 👉 Kya hota hai?

// 👉 JavaScript automatically unused memory clean karta hai

// 🧠 Simple samajh:

// ➡️ “Jo data use nahi ho raha → JS khud hata deta hai”

// ✅ Example
// let obj = { name: "Yuvraj" };

// obj = null; // ab object ka reference hat gaya

// 👉 Ab wo object memory me useless hai
// 👉 JS GC usse delete kar dega

// 🔥 Important Point

// 👉 JS me manual memory management nahi hota
// 👉 C/C++ jaise free() nahi likhna padta

// 🧠 Interview Line:

// ➡️ “Garbage collector automatically removes unused objects from memory”

// 📘 2. Dynamic Typing
// 👉 Kya hota hai?

// 👉 Variable ka type fix nahi hota
// 👉 run-time pe change ho sakta hai

// ✅ Example
// let x = 10;      // number
// x = "Yuvraj";    // string
// x = true;        // boolean

// 👉 same variable → different types 😎

// 🔥 Important Point

// 👉 Type declare nahi karna padta (like Java)

// let x; // no type
// 🧠 Easy line:

// ➡️ “JS me type change ho sakta hai”

// ⚠️ Interview Catch

// 👉 Problem bhi create karta hai:

// console.log("5" + 2); // "52"

// 👉 automatic type conversion

// 🧠 Interview Line:

// ➡️ “JavaScript is dynamically typed, meaning variables can hold different types at runtime”

// 📘 3. Math Object (VERY USEFUL 🔥)
// 👉 Kya hai?

// 👉 JS ka built-in object for math operations

// 🔥 Important Methods (yaad rakhna)
// ✅ 1. Math.random()
// Math.random();

// 👉 0 se 1 ke beech random number

// ✅ Random number (important)
// Math.floor(Math.random() * 10);

// 👉 0–9 random number

// ✅ 2. Math.floor()
// Math.floor(4.9); // 4

// 👉 down value

// ✅ 3. Math.ceil()
// Math.ceil(4.1); // 5

// 👉 up value

// ✅ 4. Math.round()
// Math.round(4.5); // 5

// 👉 nearest value

// ✅ 5. Math.max() / Math.min()
// Math.max(1,5,3); // 5
// Math.min(1,5,3); // 1
// ✅ 6. Math.abs()
// Math.abs(-10); // 10

// 👉 positive value

// ✅ 7. Math.pow()
// Math.pow(2,3); // 8

// 👉 power

// ✅ 8. Math.sqrt()
// Math.sqrt(16); // 4

// 👉 square root

// 💥 FINAL REVISION
// Garbage Collector

// ➡️ unused memory delete

// Dynamic Typing

// ➡️ type change ho sakta hai

// Math Object

// ➡️ math operations ke liye built-in

// 🧠 Real Advice (for YOU)

// 👉 Interview me mostly puchte hain:

// GC kya hai
// dynamic typing pros/cons
// random number kaise generate kare
// 🔥 Bonus Interview Question

// 👉 Random number 1–100?

// Math.floor(Math.random() * 100) + 1;


// =====================GARBAGE COLLECTOR =============================
// 🔥 CORE CONCEPT (INTERVIEW GOLD)

// 👉 GC ka rule:

// ➡️ “Garbage Collector removes only unreachable objects”

// 🧩 Reachable vs Unreachable
// ✅ Reachable (NOT deleted)
// let obj = { a: 1 };

// 👉 reference exist → safe

// ❌ Unreachable (will be deleted)
// function test() {
//   let obj = { a: 1 };
// }

// test();

// 👉 function khatam → obj lost
// 👉 unreachable → GC delete karega

// 🚀 2. HOW GC WORKS (Simple)

// 👉 JS mostly use karta hai:

// 🔥 Mark and Sweep Algorithm
// 🧠 Step 1: Mark

// 👉 GC check karta hai:

// global variables
// current execution variables

// 👉 jo reachable hain → mark ✅

// 🧠 Step 2: Sweep

// 👉 jo marked nahi hain → delete ❌

// 🧩 Example
// let obj1 = { a: 1 };
// let obj2 = { b: 2 };

// obj1 = null;

// 👉 obj1 → unreachable ❌
// 👉 obj2 → reachable ✅

// 👉 GC:

// obj1 → delete
// obj2 → keep
// ⏱️ 3. Kab delete hota hai? (VERY IMPORTANT)

// 👉 GC instant nahi hota

// ➡️ Ye depend karta hai:

// browser / engine (V8, etc.)
// memory pressure
// internal optimization
// 🧠 Easy Answer

// 👉 “We cannot control when GC runs — it runs automatically”

// 🎯 Interview Line

// 👉 “Garbage collection happens automatically at non-deterministic intervals based on memory usage and engine optimization.”

// ⚠️ IMPORTANT MISCONCEPTION

// 👉 “Unused hai → delete ho jayega”

// ❌ WRONG

// 👉 “Unreachable hai → delete hoga”

// ✅ CORRECT

// 🚀 Real Example (Tricky)
// let obj = { a: 1 };

// function test() {
//   console.log(obj);
// }

// test();

// 👉 even if rarely used → still reachable
// 👉 GC delete nahi karega

// 💥 FINAL SUMMARY

// 👉 Use nahi kar rahe ≠ delete
// 👉 Reference hai → safe
// 👉 Reference gaya → delete