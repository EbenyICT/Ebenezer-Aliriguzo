document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  // Show spinner while loading
  const spinner = document.getElementById('spinner');
  if (spinner) {
    spinner.classList.add('show');
  }

  // Dynamically load the header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerPlaceholder = document.querySelector('header'); // Find the existing header placeholder
      if (headerPlaceholder) {
        headerPlaceholder.outerHTML = data; // Replace the placeholder header with the loaded header
        console.log('Header loaded successfully');

        // Attach the hamburger menu toggle functionality after header is loaded
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const mobileMenu = document.getElementById('mobileMenu');
        if (hamburgerMenu && mobileMenu) {
          hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
          });
        }
      }
    })
    .catch(error => console.error('Error loading header:', error))
    .finally(() => {
      // Hide spinner once the header is loaded
      if (spinner) {
        spinner.classList.remove('show');
      }
    });

  // Dynamically load the footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
      console.log('Footer loaded successfully');
    })
    .catch(error => console.error('Error loading footer:', error));

  // Add a scroll-to-top button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerText = '↑ Top';
  scrollToTopButton.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scrolled to top');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  // Log a message when all scripts are loaded
  console.log('Main.js script execution completed');
});
