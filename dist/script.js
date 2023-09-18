const browserLanguage = navigator.language.toLowerCase();

const supportedLanguages = {
	en: 'index.html',
	pt: 'index-pt.html',
};

if (browserLanguage in supportedLanguages) {
	const homepage = supportedLanguages[browserLanguage];
	window.location.href = homepage;
}

// Escolher o idioma de acordo com o link que está activo
document.addEventListener('DOMContentLoaded', function () {
	const languageLinks = document.querySelectorAll('.nav-language a span');
	const languageLinksMobile = document.querySelectorAll(
		'.menu-mobile .nav-language a span'
	);
	const enLink = languageLinks[0];
	const ptLink = languageLinks[1];
	const enLinkMobile = languageLinksMobile[0];
	const ptLinkMobile = languageLinksMobile[1];

	let currentPath = window.location.pathname;

	if (currentPath === '/') {
		return (window.location.href = 'https://tbpower.netlify.app/index.html');
	}
	console.log(currentPath);
	const isPT = currentPath.includes('/pt/') || currentPath.includes('index-pt');

	if (isPT) {
		ptLink.classList.add('selected');
		ptLinkMobile.classList.add('selected');
	} else {
		enLink.classList.add('selected');
		enLinkMobile.classList.add('selected');
	}

	languageLinks.forEach(function (link) {});
	//Funcionalidade do menu para a versão em mobile
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const mobileMenu = document.querySelector('.menu-mobile');
	const navMenu = document.querySelector('.nav-left');

	hamburgerMenu.addEventListener('click', function () {
		this.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	let currentPage = window.location.href;
	let navbarLinks = document.querySelectorAll('.heading-menu a');
	navbarLinks.forEach(function (link) {
		if (link.href === currentPage) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
});

//Aceitar a política de cookies - Cookie policy
function hideCookiePolicy() {
	var cookiePolicy = document.getElementById('cookiepolicy');
	cookiePolicy.style.display = 'none';

	// Make the website content fully visible
	var websiteContent = document.getElementById('website-content');
	websiteContent.style.opacity = '1';
	websiteContent.style.filter = 'none';
}

// Funcionalidade para mostrar a política de cookies no load da página
function showCookiePolicy() {
	var cookiePolicy = document.getElementById('cookiepolicy');
	cookiePolicy.style.display = 'block';
}

// Adicionar o click event ao botão de Aceitar
var acceptButton = document.getElementById('cookieconfirm');
acceptButton.addEventListener('click', hideCookiePolicy);

// Fazer a função funcionar no load
window.addEventListener('load', showCookiePolicy);

//Funcionalidade do Swiper js - dekstop mostrar 3 cards e em mobile mostrar 1, incluí setas de navegação
let swiper = new Swiper('.mySwiper', {
	cssMode: true,
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	mousewheel: true,
	keyboard: true,

	breakpoints: {
		920: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	},
});
