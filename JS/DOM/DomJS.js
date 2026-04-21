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

// let inp = document.querySelector('input');

// inp.addEventListener('input', () => {
//     console.log('typed')
// })

// inp.addEventListener('input', (details) => {
//     console.log(details);
//     if(details.data === ' '){
//         console.log('space')
//     }
//     else if(details.inputType === 'deleteContentBackward' || details.data == null){
//         console.log('Backspace')
//     }else {
//         console.log(details.data)
//     }
// })

// =========================================Change event  ======================================
// Change event tab chlta hai jab koi input select ya textarea me koi change hojaye

// let sel = document.querySelector('select');

// sel.addEventListener('change', (details)=>{
//     console.log(details, details.target.value);
// })

// let deviceHeading = document.querySelector('#device');

// sel.addEventListener('change', (details)=>{
//     // console.log(details, details.target.value);
//     deviceHeading.textContent = 'Device selected'
//     deviceHeading.textContent = `${details.target.value} device selected`
//     deviceHeading.style.color = 'Yellow'
// })

// ================================================================================================

// const h1 = document.querySelector('h1');

// window.addEventListener('keydown', (dets) => {
//     // console.log(dets);
//     if(dets.key === ' '){
//         h1.textContent = 'Space';
//     }
//     else{
//         h1.textContent = dets.key;
//     }
// })

// ======================================================================================================

// let btn = document.querySelector('#btn');
// let fileinp = document.querySelector('#file');

// btn.addEventListener('click', () => {
//     fileinp.click();
// })

// fileinp.addEventListener('change', (dets) => {
//     const f =  dets.target.files[0];
//     if(f){
//         btn.textContent = f?.name;
//     }
// })

// ========================================Form submit====================================================

// let form = document.querySelector('form');
// let input = document.querySelectorAll('input');

// form.addEventListener('submit', (dets) => {
//     dets.preventDefault();
//     console.log(input[0].value,input[1].value,input[2].value,input[3].value,input[4].value,)
// })



