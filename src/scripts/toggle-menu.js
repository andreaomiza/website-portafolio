const buttonToggle = document.querySelector('#button_toggle')
const navbar = document.querySelector('#mobileMenu')


buttonToggle.addEventListener('click', function() {
navbar.classList.toggle('hidden')
})

window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
        navbar.classList.add('hidden');
    }
});

if (window.innerWidth >= 1024) {
    navbar.classList.add('hidden');
}


const navLinks = document.querySelectorAll('#mobileMenu a');

navLinks.forEach(link => {
    link.style.textAlign = 'center';
});


//solo se habilita cuando esta en mobile
if (window.innerWidth < 1024) {
    buttonToggle.style.display = 'block';
} else {
    buttonToggle.style.display = 'none';
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 1024) {
        buttonToggle.style.display = 'block';
    } else {
        buttonToggle.style.display = 'none';
    }
});



