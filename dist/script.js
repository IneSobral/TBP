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
	const isPT =
		currentPath.includes('/pt/') ||
		currentPath.includes('index-pt.html') ||
		currentPath === '/';

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
					if (currentPath === '/') {
						targetPage = '/index.html';
					} else {
						targetPage = currentPath.replace('/pt/', '/en/').replace('-pt', '');
					}
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

// Filter Single Projets
(function () {
	const filterButtons = document.querySelectorAll('.filter-portfolio .btn');
	const itemList = document.querySelector('.portfolio');

	filterButtons.forEach((button) => {
		button.addEventListener('click', filterItems);
	});

	function filterItems() {
		filterButtons.forEach((button) => {
			button.classList.remove('active');
		});

		this.classList.add('active');

		const selectedCategory = this.textContent.trim();

		if (
			selectedCategory === 'All Projects' ||
			selectedCategory === 'Todos projetos'
		) {
			itemList.querySelectorAll('li').forEach((item) => {
				item.style.display = 'block';
			});
		} else {
			itemList.querySelectorAll('li').forEach((item) => {
				item.style.display = 'none';
			});

			let filteredItems;
			const resultado = selectedCategory.toLowerCase().replace(/\.\s/g, '-');
			const resultadoen = selectedCategory.toLowerCase().replace(/\s/g, '-');
			console.log(resultado);
			if (selectedCategory === 'Web Development') {
				filteredItems = document.querySelectorAll(
					'.portfolio li.' + resultadoen
				);
				console.log(filteredItems);
			} else {
				filteredItems = document.querySelectorAll('.portfolio li.' + resultado);
			}

			filteredItems.forEach((item) => {
				item.style.display = 'block';
			});
		}
	}

	itemList.querySelectorAll('li').forEach((item) => {
		item.style.display = 'block';
	});
	filterButtons[0].classList.add('active');
})();
