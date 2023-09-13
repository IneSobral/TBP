const browserLanguage = navigator.language.toLowerCase();

const supportedLanguages = {
	en: 'index.html',
	pt: 'index-pt.html',
};

if (browserLanguage in supportedLanguages) {
	const homepage = supportedLanguages[browserLanguage];
	window.location.href = homepage;
}

// Set the language links' active state based on the current page
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
	if (currentPath === '/') {
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

//Cookie policy
function hideCookiePolicy() {
	var cookiePolicy = document.getElementById('cookiepolicy');
	cookiePolicy.style.display = 'none';

	// Make the website content fully visible
	var websiteContent = document.getElementById('website-content');
	websiteContent.style.opacity = '1';
	websiteContent.style.filter = 'none';
}

// Function to show the cookie policy on page load
function showCookiePolicy() {
	var cookiePolicy = document.getElementById('cookiepolicy');
	cookiePolicy.style.display = 'block';
}

// Attach a click event handler to the "Accept" button
var acceptButton = document.getElementById('cookieconfirm');
acceptButton.addEventListener('click', hideCookiePolicy);

// Show the cookie policy when the page loads
window.addEventListener('load', showCookiePolicy);
