// Select the modal container
const authModal = document.querySelector('.auth-modal');

// Select all elements that should open the login form (login link and login button)
const loginLinks = document.querySelectorAll('.login-link, .login-btn-modal');

// Select all elements that should open the register form
const registerLinks = document.querySelectorAll('.register-link');

// Select the close button inside the modal
const closeBtnModal = document.querySelector('.close-btn-modal');

// Loop through all login links/buttons and add click event to show login form
loginLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    authModal.classList.add('show'); // Show the modal
    authModal.classList.remove('slide'); // Ensure register form is hidden
  });
});

// Loop through all register links and add click event to show register form
registerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    authModal.classList.add('show', 'slide'); // Show modal and slide to register form
  });
});

// Add click event to close button to hide the modal
closeBtnModal.addEventListener('click', () => {
  authModal.classList.remove('show', 'slide'); // Hide modal and reset to login form
});
