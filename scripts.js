const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle the "show" class on click
    });
