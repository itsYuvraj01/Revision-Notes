const users = [
  {
    id: 1,
    name: "Yuvraj Singh",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Full Stack Developer"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Frontend Developer"
  },
  {
    id: 3,
    name: "Priya Mehta",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Ankit Verma",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Backend Developer"
  },
  {
    id: 5,
    name: "Neha Kapoor",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Software Engineer"
  },
  {
    id: 6,
    name: "Amit Patel",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "DevOps Engineer"
  }
];

const container = document.querySelector(".cards-collection");

const h2 = document.createElement('h2');
h2.textContent = 'No users available in this search ...'
h2.classList.add('text-heading');

function showUsers (arr) {
    arr.forEach((user) => {
        const card = document.createElement('div');
        card.classList.add("card");

        const img = document.createElement('img');
        img.src = user.image;
        img.classList.add('card-img');

        const h3 = document.createElement('h3');
        h3.textContent = user.name;
        h3.classList.add('card-heading')

        const p = document.createElement('p')
        p.textContent = user.bio;
        p.classList.add('card-bio');

        // attach elements
        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);

        // attach card to DOM
        container.appendChild(card);
    }); 
}

showUsers(users);

const inp = document.querySelector('input')

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Optimal search

const handleSearch = () => {
    let value = inp.value.toLowerCase();

    let newUsers = users.filter((user) =>
        user.name.toLowerCase().includes(value)
    );

    container.innerHTML = '';
    if(newUsers.length !== 0){
        h2.style.display = 'none';
        showUsers(newUsers);
    } else {
        h2.style.display = 'inline';
        container.appendChild(h2);
    }

};

const debouncedSearch = debounce(handleSearch, 300);

inp.addEventListener('input', debouncedSearch);

// Normal search

inp.addEventListener('input', () => {
    let newUsers = users.filter((user) => user.name.toLowerCase().includes(inp.value.toLowerCase()));
    console.log(newUsers);
    document.querySelector('.cards-collection').innerHTML = '';
    showUsers(newUsers);
})