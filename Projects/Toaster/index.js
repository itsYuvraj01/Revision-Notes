const showToastBtn = document.querySelector('.show-toast-btn');
const toasterBody = document.querySelector('.toasterBody');

const createToaster = (config) => {
    return (notification) => {
        let div = document.createElement('div');

        div.innerText = notification;

        // Base styles (NO fixed positioning now)
        div.style.padding = '10px 20px';
        div.style.borderRadius = '5px';
        div.style.zIndex = '1000';

        // Theme
        div.style.backgroundColor = config.theme === 'dark' ? '#333' : '#eee';
        div.style.color = config.theme === 'dark' ? '#fff' : '#000';

        // Animation (optional but nice)
        div.style.opacity = '0';
        div.style.transform = 'translateY(-10px)';
        div.style.transition = 'all 0.3s ease';

        toasterBody.appendChild(div);

        // Animate in
        setTimeout(() => {
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
        }, 10);

        setTimeout(() => {
            div.style.opacity = '0';
            div.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                toasterBody.removeChild(div);
            }, 300);
        }, config.duration * 1000);
    };
};

const runToaster1 = createToaster({
    positionX: 'right',
    positionY: 'top',
    theme: 'dark',
    duration: 5,
});

const runToaster2 = createToaster({
    positionX: 'left',
    positionY: 'bottom',
    theme: 'dark',
    duration: 5,
});

runToaster1('Download done');

setTimeout(() => {
    runToaster1('Khushi sent you a message')
}, 2000);

setTimeout(() => {
    runToaster1('Yuvraj accepted your request')
}, 5000);

showToastBtn.addEventListener('click', () => {
    console.log('clicked');
    runToaster1('This is for 3 seconds');
    runToaster2('This is for 5 seconds');
    if(document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = 'black'
    }else {
        document.body.style.backgroundColor = 'white'
    }
});
