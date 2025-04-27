document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    // Hamburger menu functionality
    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });

    // Upload functionality
    const uploadForm = document.getElementById('uploadForm');
    const gallery = document.getElementById('gallery');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('photoInput');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';

                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Uploaded Picture';

                const description = document.createElement('div');
                description.className = 'description';
                description.textContent = 'Uploaded Picture';

                galleryItem.appendChild(img);
                galleryItem.appendChild(description);
                gallery.appendChild(galleryItem);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a file to upload.');
        }
    });
});
