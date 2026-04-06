document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. Mobile Menu Toggle --- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* --- 2. Dynamic Year for Footer --- */
    document.getElementById('year').textContent = new Date().getFullYear();

    /* --- 3. Scroll Reveal Animations --- */
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    /* --- 4. Form Validation --- */
    const form = document.getElementById('enquiry-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    function showError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
    }

    function removeError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
    }

    function checkEmail(email) {
        // Basic email regex
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.trim());
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Check Name
        if (nameInput.value.trim() === '') {
            showError(nameInput);
            isValid = false;
        } else {
            removeError(nameInput);
        }

        // Check Email
        if (emailInput.value.trim() === '' || !checkEmail(emailInput.value)) {
            showError(emailInput);
            isValid = false;
        } else {
            removeError(emailInput);
        }

        // Check Phone
        if (phoneInput.value.trim() === '') {
            showError(phoneInput);
            isValid = false;
        } else {
            removeError(phoneInput);
        }

        // Check Message
        if (messageInput.value.trim() === '') {
            showError(messageInput);
            isValid = false;
        } else {
            removeError(messageInput);
        }

        // If valid, simulate submission
        if (isValid) {
            alert('Thank you for your enquiry! A member of the Luke Fry Electrical team will contact you shortly.');
            form.reset();
            // Remove any remaining error states
            [nameInput, emailInput, phoneInput, messageInput].forEach(input => removeError(input));
        }
    });

    /* --- 5. Real-time form error removal on input --- */
    const inputs = [nameInput, emailInput, phoneInput, messageInput];
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if(input.parentElement.classList.contains('error')) {
                removeError(input);
            }
        });
    });
});
