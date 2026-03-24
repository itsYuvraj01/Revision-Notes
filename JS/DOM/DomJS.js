// ============================Event handling=========================================
// Kucchhh screen pr ho aur aapko reaction dena ho to uss vakt aapko event handle krna aana chaiye


// Event mtlb hota hai kuchh action hua -> ex click, dblClick, etc
// Event listener ka mtlb hota hai apne koi action ka reaction diya  

// let h1 = document.querySelector('h1');    // selecting the element

// h1.addEventListener('click', () => {      // h1 pr evnt lgana
//     h1.style.color = 'red'
// })

// let p = document.querySelector('p');

// p.addEventListener('click', () => {
//     p.style.color = 'green'
// })

// p.addEventListener('dblclick', () => {
//     p.style.color = 'blue'
// })

// ==========================================syntax===========================================

// element.addEventListener('event name', function () {}) 
// element.addEventListener('event name', () => {}) 

// =======================================================================================

// ============================Removing event listener =====================================
// Ye kaam nhi krega isme hum functino as a param passs krte hai usko run nhi krwate 

// let p = document.querySelector('p');

// p.removeEventListener('dblclick', () => {
//      p.style.color = 'blue'
// })

// Correct way;
//  function dblClick () {
//     p.style.color = 'blue'
//  }

//  p.addEventListener('dblclick', dblClick)
//  p.removeEventListener('dblclick', dblClick);

// Removing event listener me bhi same function pass krte hai jo event hone pr lgaya tha


// =========================================Input event  ======================================

let inp = document.querySelector('input');

inp.addEventListener('input', () => {
    console.log('typed')
})