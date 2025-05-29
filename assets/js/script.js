// Toggle del menu mobile al clic sull'icona hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Chiude il menu quando si clicca su un link di navigazione
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animazione allo scorrimento
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Animazione in campo visivo
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.menu-item, .section-title, .caption, .postcard');

    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Stato iniziale per animare
document.querySelectorAll('.menu-item, .section-title, .caption, .postcard').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s ease-out';
});

// Controllo dei dati nei form
const reservationForm = document.getElementById("form")
function validateForm(form) {
    const inputs = form.querySelectorAll('.form-group')
    inputs.forEach(formGroup => {
        const errorHandler = formGroup.querySelector('.error-handler')
        errorHandler.innerHTML = ''
        const input = formGroup.querySelector('input')
        if (!input.value.trim()) {
            errorHandler.innerHTML = 'Devi compilare il campo ' + input.id
        }
    })
}

reservationForm.addEventListener('submit', function (event) {
    event.preventDefault()
    validateForm(event.target)
})

const input = document.getElementById('numero di ospiti');
input.addEventListener('input', () => {
    if (input.value > 8) input.value = 8;
    if (input.value < 1) input.value = 1;
});