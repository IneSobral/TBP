/*


document.addEventListener('DOMContentLoaded', function () {
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const mobileMenu = document.querySelector('.menu-mobile');
	const navMenu = document.querySelector('.nav-left');

	hamburgerMenu.addEventListener('click', function () {
		this.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	const languageLinks = document.querySelectorAll('.nav-language a');
	const enLink = languageLinks[0];
	const ptLink = languageLinks[1];

	// Set initial state
	enLink.classList.add('selected');

	languageLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			const targetLanguage = link.innerText.trim();

			let targetPage = '';
			if (targetLanguage === 'EN') {
				targetPage = 'index.html';
			} else {
				targetPage = 'index-' + targetLanguage.toLowerCase() + '.html';
			}

			document.getElementById('content').innerHTML = '';
			fetch(targetPage)
				.then((response) => response.text())
				.then((data) => {
					document.getElementById('content').innerHTML = data;

					const hamburgerMenu = document.querySelector('.hamburger-menu');
					const mobileMenu = document.querySelector('.menu-mobile');
					const navMenu = document.querySelector('.nav-left');

					hamburgerMenu.addEventListener('click', function () {
						this.classList.toggle('active');
						mobileMenu.classList.toggle('active');
						navMenu.classList.toggle('active');
					});

					const languageSpans = document.querySelectorAll('.nav-language span');

					languageLinks.forEach(function (link) {
						link.addEventListener('click', function () {
							languageLinks.forEach(function (l) {
								l.classList.remove('active');
							});
							link.classList.add('active');
						});
					});

					// Set initial state of language links and spans
					if (targetLanguage === 'PT') {
						languageLinks.forEach(function (l) {
							l.classList.remove('active');
						});
						ptLink.classList.add('selected');
						languageSpans.forEach(function (span) {
							span.style.color =
								span.innerText.trim() === 'PT'
									? 'var(--purple)'
									: 'var(--white)';
						});
					}
				})
				.catch((error) => {
					console.log('Error:', error);
				});
		});
	});
});


document.addEventListener('DOMContentLoaded', function () {
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const mobileMenu = document.querySelector('.menu-mobile');
	const navMenu = document.querySelector('.nav-left');

	hamburgerMenu.addEventListener('click', function () {
		this.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	const languageLinks = document.querySelectorAll('.nav-language a');
	const enLink = languageLinks[0];
	const ptLink = languageLinks[1];

	// Set initial state
	enLink.classList.add('selected');

	languageLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			const targetLanguage = link.innerText.trim();

			let targetPage = '';

			if (targetLanguage === 'EN') {
				if (window.location.pathname.includes('stack')) {
					targetPage = '/en/stack.html';
				} else if (window.location.pathname.includes('work')) {
					targetPage = '/en/work.html';
				} else if (window.location.pathname.includes('plans')) {
					targetPage = '/en/plans.html';
				} else if (window.location.pathname.includes('contact')) {
					targetPage = '/en/contact.html';
				} else if (window.location.pathname.includes('wp')) {
					targetPage = '/en/wp-performance.html';
				} else {
					targetPage = 'index.html';
				}
			} else {
				if (window.location.pathname.includes('stack')) {
					targetPage = '/pt/stack-pt.html';
				} else if (window.location.pathname.includes('work')) {
					targetPage = '/pt/work-pt.html';
				} else if (window.location.pathname.includes('plans')) {
					targetPage = '/pt/plans-pt.html';
				} else if (window.location.pathname.includes('contact')) {
					targetPage = '/pt/contact-pt.html';
				} else if (window.location.pathname.includes('wp')) {
					targetPage = '/pt/wp-performance-pt.html';
				} else {
					targetPage = 'index-' + targetLanguage.toLowerCase() + '.html';
				}
			}

			document.getElementById('content').innerHTML = '';
			fetch(targetPage)
				.then((response) => response.text())
				.then((data) => {
					document.getElementById('content').innerHTML = data;
					initializePage();
				})
				.catch((error) => {
					console.log('Error:', error);
				});
		});
	});

	// Function to initialize the page after content is loaded
	function initializePage() {
		hamburgerMenu.addEventListener('click', function () {
			this.classList.toggle('active');
			mobileMenu.classList.toggle('active');
			navMenu.classList.toggle('active');
		});

		const languageSpans = document.querySelectorAll('.nav-language span');

		languageLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				languageLinks.forEach(function (l) {
					l.classList.remove('active');
				});
				link.classList.add('active');
			});
		});

		// Set initial state of language links and spans
		const targetLanguage = languageLinks[1].innerText.trim();
		if (targetLanguage === 'PT') {
			languageLinks.forEach(function (l) {
				l.classList.remove('active');
			});
			ptLink.classList.add('selected');
			languageSpans.forEach(function (span) {
				span.style.color =
					span.innerText.trim() === 'PT' ? 'var(--purple)' : 'var(--white)';
			});
		}
	}
});
*/

document.addEventListener('DOMContentLoaded', function () {
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const mobileMenu = document.querySelector('.menu-mobile');
	const navMenu = document.querySelector('.nav-left');

	hamburgerMenu.addEventListener('click', function () {
		this.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	const languageLinks = document.querySelectorAll('.nav-language a');
	const enLink = languageLinks[0];
	const ptLink = languageLinks[1];

	// Set initial state
	enLink.classList.add('selected');

	languageLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			const targetLanguage = link.innerText.trim();

			let targetPage = '';

			if (targetLanguage === 'EN') {
				if (window.location.pathname.includes('stack')) {
					targetPage = '/en/stack.html';
				} else if (window.location.pathname.includes('work')) {
					targetPage = '/en/work.html';
				} else if (window.location.pathname.includes('plans')) {
					targetPage = '/en/plans.html';
				} else if (window.location.pathname.includes('contact')) {
					targetPage = '/en/contact.html';
				} else if (window.location.pathname.includes('wp')) {
					targetPage = '/en/wp-performance.html';
				} else {
					targetPage = 'index.html';
				}
			} else {
				if (window.location.pathname.includes('stack')) {
					targetPage = '/pt/stack-pt.html';
				} else if (window.location.pathname.includes('work')) {
					targetPage = '/pt/work-pt.html';
				} else if (window.location.pathname.includes('plans')) {
					targetPage = '/pt/plans-pt.html';
				} else if (window.location.pathname.includes('contact')) {
					targetPage = '/pt/contact-pt.html';
				} else if (window.location.pathname.includes('wp')) {
					targetPage = '/pt/wp-performance-pt.html';
				} else {
					targetPage = 'index-pt.html';
				}
			}

			document.getElementById('content').innerHTML = '';
			fetch(targetPage)
				.then((response) => response.text())
				.then((data) => {
					document.getElementById('content').innerHTML = data;
					initializePage();
				})
				.catch((error) => {
					console.log('Error:', error);
				});
		});
	});

	// Function to initialize the page after content is loaded
	function initializePage() {
		hamburgerMenu.addEventListener('click', function () {
			this.classList.toggle('active');
			mobileMenu.classList.toggle('active');
			navMenu.classList.toggle('active');
		});

		const languageSpans = document.querySelectorAll('.nav-language span');

		languageLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				languageLinks.forEach(function (l) {
					l.classList.remove('active');
				});
				link.classList.add('active');
			});
		});

		// Set initial state of language links and spans
		const targetLanguage = languageLinks[1].innerText.trim();
		if (targetLanguage === 'PT') {
			languageLinks.forEach(function (l) {
				l.classList.remove('active');
			});
			ptLink.classList.add('selected');
			languageSpans.forEach(function (span) {
				span.style.color =
					span.innerText.trim() === 'PT' ? 'var(--purple)' : 'var(--white)';
			});
		}
	}
});
