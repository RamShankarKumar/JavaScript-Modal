const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const loginModal = document.querySelector('.login-modal');
const signupModal = document.querySelector('.signup-modal');
const loginClose = document.querySelector('.login-close');
const signupClose = document.querySelector('.signup-close');
const loginOptionButton = document.querySelector('.login-option-button');
const signupOptionButton = document.querySelector('.signup-option-button');
const buttons = document.querySelector('.buttons');



// console.log(loginModal)


// showing modal when clicked on login or signup button.
const loginClickHandler = () => {
    if(!loginModal.classList.contains('login-modal-active')){
        loginModal.classList.add('login-modal-active');
        buttons.classList.add('buttons-disable');
    }
}

const signupClickHandler = () => {
    if(!signupModal.classList.contains('signup-modal-active')){
        signupModal.classList.add('signup-modal-active');
        buttons.classList.add('buttons-disable');
    }
}

const loginCloseClickHandler = () => {
    if(loginModal.classList.contains('login-modal-active')){
        loginModal.classList.remove('login-modal-active');
        buttons.classList.remove('buttons-disable');
    }
}

const signupCloseClickHandler = () => {
    if(signupModal.classList.contains('signup-modal-active')){
        signupModal.classList.remove('signup-modal-active');
        buttons.classList.remove('buttons-disable');
    }
}

// opening modal with login or signup buttons
login.addEventListener('click', loginClickHandler);
signup.addEventListener('click', signupClickHandler);

// closing modal with close button
loginClose.addEventListener('click', loginCloseClickHandler);
signupClose.addEventListener('click', signupCloseClickHandler);


// changing modal with option button.
const loginOptionClickHandler = () => {
    if(signupModal.classList.contains('signup-modal-active')){
        signupModal.classList.remove('signup-modal-active');
        loginModal.classList.add('login-modal-active');
    }
}
const signupOptionClickHandler = () => {
    if(loginModal.classList.contains('login-modal-active')){
        loginModal.classList.remove('login-modal-active');
        signupModal.classList.add('signup-modal-active');
    }
}
loginOptionButton.addEventListener('click', loginOptionClickHandler);
signupOptionButton.addEventListener('click', signupOptionClickHandler);

