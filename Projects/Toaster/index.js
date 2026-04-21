const toast = document.querySelector('#toast');
const showToastBtn = document.querySelector('.show-toast-btn');

if (toast && showToastBtn) {
    let toastTimeout;

    showToastBtn.addEventListener('click', () => {
        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    });
}