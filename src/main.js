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
      document.body.insertAdjacentHTML('afterbegin', data);
      console.log('Header loaded successfully');
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

  // Function to dynamically add images to the gallery
  const gallery = document.getElementById('gallery');
  const imageNames = [
    '1EngineerMaduChibuezeMutui.JPG',
    '2Ebenezer.JPG',
    '3Mike.JPG',
    '4Vivian.JPG',
    '5Ejike.JPG',
    '6Jennifer.JPG',
    '7Zion.JPG',
    '8Success.JPG',
    '9Victor.JPG',
    '10Divine.JPG',
    '11Uzo.JPG',
    '12Precious.JPG',
    '13Mbappe.JPG',
    '14Kylian.JPG',
    '15Ifeoma.JPG',
    '16Chichi.JPG',
    '17Ugo.JPG',
    '18Ugochi.JPG',
    '19Miracle.JPG',
    '20Eze.JPG',
    '21King.JPG',
    '22White.JPG',
    '23Healthcare.JPG',
    '24Human.JPG',
    '25Woman.JPG',
    '26Care.JPG',
    '27Doctor.JPG',
    '28Nurse.JPG',
    '29Psycho.JPG'
  ];

  if (gallery) {
    imageNames.forEach((imageName, index) => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = `public/images/${imageName}`; // Assuming images are in the "public/images" directory
      img.alt = `Image ${index + 1}`;

      const description = document.createElement('div');
      description.className = 'description';
      description.textContent = `Image ${index + 1}`;

      galleryItem.appendChild(img);
      galleryItem.appendChild(description);
      gallery.appendChild(galleryItem);

      // Log the path to the console to verify
      console.log(`Image path set to: public/images/${imageName}`);
    });
  }

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

  // Hamburger menu toggle
  document.addEventListener('click', (event) => {
    const menu = document.getElementById('mobileMenu');
    const hamburger = event.target.closest('.hamburger-menu');
    if (hamburger) {
      menu.classList.toggle('show');
    }
  });

  // Log a message when all scripts are loaded
  console.log('Main.js script execution completed');
});
