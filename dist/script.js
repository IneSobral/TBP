document.addEventListener('DOMContentLoaded', function () {
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const mobileMenu = document.querySelector('.menu-mobile');
	const navMenu = document.querySelector('.nav-left');

	// Toggle the active class on click
	hamburgerMenu.addEventListener('click', function () {
		this.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	// Get the language links
	const languageLinks = document.querySelectorAll('.nav-language a');
	const linkColor = document.querySelector('.nav-language_container a span');

	// Loop through each language link
	languageLinks.forEach(function (link) {
		// Add a click event listener to each link
		link.addEventListener('click', function (event) {
			event.preventDefault(); // Prevent the default link behavior

			// Get the target language from the clicked link
			const targetLanguage = link.innerText.trim();

			// Change the color of the clicked link
			languageLinks.forEach(function (l) {
				l.classList.remove('active'); // Remove the 'active' class from all links
			});
			link.classList.add('active');
			linkColor.classList.add('active');

			let targetPage = '';
			if (targetLanguage === 'EN') {
				targetPage = 'index.html';
			} else {
				targetPage = 'index-' + targetLanguage.toLowerCase() + '.html';
			}

			document.getElementById('content').innerHTML = ''; // Clear the existing content (optional)
			fetch(targetPage)
				.then((response) => response.text())
				.then((data) => {
					document.getElementById('content').innerHTML = data; // Update the content with the new page

					// Re-assign the hamburger menu and mobile menu elements
					const hamburgerMenu = document.querySelector('.hamburger-menu');
					const mobileMenu = document.querySelector('.menu-mobile');
					const navMenu = document.querySelector('.nav-left');

					// Toggle the active class on click
					hamburgerMenu.addEventListener('click', function () {
						this.classList.toggle('active');
						mobileMenu.classList.toggle('active');
						navMenu.classList.toggle('active');
					});
				})
				.catch((error) => {
					console.log('Error:', error);
				});
		});
	});
});
