// toggle icon menubar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
                    });
                };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};


// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
    
});

ScrollReveal().reveal('.home-content, .heading, .about-content', { origin:'top' });

ScrollReveal().reveal('.home-img, .services-content, .portfolio-content, .about-img, form', { origin:'bottom' });

// tyepd js
var typed = new Typed('#element', {
    strings: ['Frontend Developer.', 'Graphics Designer.', 'Freelancer.', 'Youtuber.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });