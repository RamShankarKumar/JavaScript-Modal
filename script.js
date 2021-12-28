const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const loginModal = document.querySelector('.login-modal');
const signupModal = document.querySelector('.signup-modal');
const loginClose = document.querySelector('.login-close');
const signupClose = document.querySelector('.signup-close');
const loginOptionButton = document.querySelector('.login-option-button');
const signupOptionButton = document.querySelector('.signup-option-button');



// console.log(loginModal)


// showing modal when clicked on login or signup button.
const loginClickHandler = () => {
    loginModal.classList.toggle('login-modal-active');
}
login.addEventListener('click', loginClickHandler);

const signupClickHandler = () => {
    signupModal.classList.toggle('signup-modal-active');
}
signup.addEventListener('click', signupClickHandler);





// closing modal with close button
loginClose.addEventListener('click', loginClickHandler);
signupClose.addEventListener('click', signupClickHandler);


// changing modal with option button.
const loginOptionClickHandler = () => {
    signupClickHandler();
    loginClickHandler();
}
const signupOptionClickHandler = () => {
    loginClickHandler();
    signupClickHandler();
}
loginOptionButton.addEventListener('click', loginOptionClickHandler);
signupOptionButton.addEventListener('click', signupOptionClickHandler);

