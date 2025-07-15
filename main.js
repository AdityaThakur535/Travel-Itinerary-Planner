
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    }) 
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



function scrollHeader(){
    const header = document.getElementById('header')
   
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})
// Handle form submission
tripForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const destination = document.querySelector('#destination').value;
    const dateFrom = document.querySelector('#date-from').value;
    const dateTo = document.querySelector('#date-to').value;

    if (!destination || !dateFrom || !dateTo) {
        alert('Please fill out all fields.');
        return;
    }
});

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})


// Form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        return;
    }
    
    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        return;
    }

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Store login state
        localStorage.setItem('currentUser', JSON.stringify({ email: user.email, name: user.fullName }));
        showSuccess('Login successful!');
        
        // Redirect to home page after short delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showError('email', 'Invalid email or password');
    }
}

function handleSignup(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    if (fullName.trim().length < 2) {
        showError('fullName', 'Please enter your full name');
        return;
    }
    
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        return;
    }
    
    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        return;
    }
    
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === email)) {
        showError('email', 'Email already registered');
        return;
    }

    // Add new user
    users.push({ fullName, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    showSuccess('Account created successfully!');
    
    // Redirect to login page after short delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorDiv = document.createElement('div');
    
    // Remove any existing error messages
    const existingError = input.parentElement.querySelector('.auth__error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error class to input
    input.classList.add('error');
    
    // Create and append error message
    errorDiv.className = 'auth__error';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
}

function showSuccess(message) {
    // Remove any existing success messages
    const existingSuccess = document.querySelector('.auth__success');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    // Create and append success message
    const successDiv = document.createElement('div');
    successDiv.className = 'auth__success';
    successDiv.textContent = message;
    
    const form = document.querySelector('.auth__form');
    form.insertBefore(successDiv, form.firstChild);
}
