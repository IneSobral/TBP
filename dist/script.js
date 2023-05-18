const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.nav-left');

// Toggle the active class on click
hamburgerMenu.addEventListener('click', function () {
	this.classList.toggle('active');
	mobileMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
});
