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