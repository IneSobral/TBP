// Alterar entre versão em PT e EN

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

	const currentPath = window.location.pathname;
	if (currentPath === '/' || currentPath === 'https://tbpower.netlify.app/') {
		return (currentPath = '/index.html');
	}
	console.log(currentPath);
	const isPT =
		currentPath.includes('/pt/') || currentPath.includes('index-pt.html');

	if (isPT) {
		ptLink.classList.add('selected');
		ptLinkMobile.classList.add('selected');
	} else {
		enLink.classList.add('selected');
		enLinkMobile.classList.add('selected');
	}

	languageLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			const targetLanguage = link.innerText.trim();
			let targetPage = '';

			if (targetLanguage === 'EN') {
				if (isPT) {
					targetPage = currentPath.replace('/pt/', '/en/').replace('-pt', '');
				} else {
					targetPage = currentPath.replace('/index-pt.html', '/index.html');
				}
			} else {
				if (!isPT) {
					targetPage = currentPath
						.replace('/en/', '/pt/')
						.replace('.html', '-pt.html');
				} else {
					targetPage = currentPath.replace('/index.html', '/index-pt.html');
				}
			}

			window.location.href = targetPage;
		});
	});
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

//Funcionalidade da dropdown para mostrar o conteúdo ao click
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
	const menuTitle = menuItem.querySelector('.menu-title');
	const dropdownArrow = menuItem.querySelector('.dropdown-arrow');
	const menuContent = menuItem.querySelector('.menu-content');

	menuTitle.addEventListener('click', function () {
		menuContent.classList.toggle('show');
		dropdownArrow.innerText = menuContent.classList.contains('show')
			? '-'
			: '+';
	});
});
