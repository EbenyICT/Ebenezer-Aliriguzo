document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

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

    imageNames.forEach((imageName, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = `/images/${imageName}`; // This is the correct path for GitHub Pages
        img.alt = `Image ${index + 1}`;

        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = `Image ${index + 1}`;

        galleryItem.appendChild(img);
        galleryItem.appendChild(description);
        gallery.appendChild(galleryItem);

        // Log the path to the console to verify
        console.log(`Image path set to: /images/${imageName}`);
    });
});
