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


// =====================================Project 1===================================

// const users = [
//   {
//     id: 1,
//     name: "Yuvraj Singh",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     bio: "Full Stack Developer"
//   },
//   {
//     id: 2,
//     name: "Rahul Sharma",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//     bio: "Frontend Developer"
//   },
//   {
//     id: 3,
//     name: "Priya Mehta",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     bio: "UI/UX Designer"
//   },
//   {
//     id: 4,
//     name: "Ankit Verma",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//     bio: "Backend Developer"
//   },
//   {
//     id: 5,
//     name: "Neha Kapoor",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//     bio: "Software Engineer"
//   },
//   {
//     id: 6,
//     name: "Amit Patel",
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//     bio: "DevOps Engineer"
//   }
// ];

// const container = document.querySelector(".cards-collection");

// const h2 = document.createElement('h2');
// h2.textContent = 'No users available in this search ...'
// h2.classList.add('text-heading');

// function showUsers (arr) {
//     arr.forEach((user) => {
//         const card = document.createElement('div');
//         card.classList.add("card");

//         const img = document.createElement('img');
//         img.src = user.image;
//         img.classList.add('card-img');

//         const h3 = document.createElement('h3');
//         h3.textContent = user.name;
//         h3.classList.add('card-heading')

//         const p = document.createElement('p')
//         p.textContent = user.bio;
//         p.classList.add('card-bio');

//         // attach elements
//         card.appendChild(img);
//         card.appendChild(h3);
//         card.appendChild(p);

//         // attach card to DOM
//         container.appendChild(card);
//     }); 
// }

// showUsers(users);

// const inp = document.querySelector('input')

// function debounce(fn, delay) {
//     let timeout;
//     return function (...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     };
// }

// // Optimal search

// const handleSearch = () => {
//     let value = inp.value.toLowerCase();

//     let newUsers = users.filter((user) =>
//         user.name.toLowerCase().includes(value)
//     );

//     container.innerHTML = '';
//     if(newUsers.length !== 0){
//         h2.style.display = 'none';
//         showUsers(newUsers);
//     } else {
//         h2.style.display = 'inline';
//         container.appendChild(h2);
//     }

// };

// const debouncedSearch = debounce(handleSearch, 300);

// inp.addEventListener('input', debouncedSearch);

// Normal search

// inp.addEventListener('input', () => {
//     let newUsers = users.filter((user) => user.name.toLowerCase().includes(inp.value.toLowerCase()));
//     console.log(newUsers);
//     document.querySelector('.cards-collection').innerHTML = '';
//     showUsers(newUsers);
// })




// ===============================================Project 2====================================================

const form = document.querySelector('.user-form');
const nameInput = document.querySelector('#name');
const imageInput = document.querySelector('#image');
const bioInput = document.querySelector('#bio');
const cardsCollection = document.querySelector('.cards-collection');
const resetBtn = document.querySelector('#reset');
const showFormBtn = document.querySelector('#showFormBtn');

/* Show form */
showFormBtn.addEventListener('click', () => {
    form.style.display = 'flex';
    cardsCollection.style.display = 'none'
    showFormBtn.style.display = 'none';
});

/* Save to localStorage */
function saveLocalStorage(obj) {
    const old = JSON.parse(localStorage.getItem('tasks')) || [];
    old.push(obj);
    localStorage.setItem('tasks', JSON.stringify(old));
}

/* Load cards on page load */
function loadCards() {
    cardsCollection.innerHTML = '';

    const data = JSON.parse(localStorage.getItem('tasks')) || [];

    data.forEach(user => {
        createCard(user);
    });
}

/* Create Card */
function createCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${user.image}" alt="${user.name}">
        <h3>${user.name}</h3>
        <p>${user.bio}</p>
        <button data-id="${user.id}">Delete</button>
    `;

    cardsCollection.appendChild(card);
}

/* Submit form */
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nameInput.value.trim() === ''){
        alert('Enter name');
        return;
    }
    if(imageInput.value.trim() === ''){
        alert('Enter image URL');
        return;
    }
    if(bioInput.value.trim() === ''){
        alert('Enter bio');
        return;
    }

    const data = {
        id: Date.now(),
        name: nameInput.value.trim(),
        image: imageInput.value.trim(),
        bio: bioInput.value.trim()
    };

    saveLocalStorage(data);
    loadCards();
    // createCard(data);

    nameInput.value = '';
    imageInput.value = '';
    bioInput.value = '';

    form.style.display = 'none';
    cardsCollection.style.display = 'flex'
    showFormBtn.style.display = 'block';

});

cardsCollection.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        const id = Number(e.target.getAttribute('data-id'));
        let data = JSON.parse(localStorage.getItem('tasks')) || [];

        data = data.filter((d) => d.id !== id);
        localStorage.setItem('tasks',JSON.stringify(data));
        loadCards();
    }
})

/* Initial load */
loadCards();