document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  // Function to dynamically add images to the gallery
  const gallery = document.getElementById('gallery');
  const imageNames = [
    '1EngineerMaduChibuezeMutui.JPG',
    // ... other image names
  ];

  imageNames.forEach((imageName, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const img = document.createElement('img');

    // Option 1: Images in the `public/images` directory
    // img.src = `public/images/${imageName}`;

    // Option 2: Images in the root directory
    img.src = `${imageName}`;
    img.alt = `Image ${index + 1}`;

    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = `Image ${index + 1}`;

    galleryItem.appendChild(img);
    galleryItem.appendChild(description);
    gallery.appendChild(galleryItem);

    // Log the path to the console to verify
    console.log(`Image path set to: ${img.src}`);
  });
});
