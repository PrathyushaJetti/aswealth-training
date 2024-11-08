

const images = [
    {
        src: 'images/gallery-4.png',
        text: ' AS Wealth & Training PVT. LTD '                                                                                                                                                                                                               
    },
    {
        src: 'images/gallery-2.jpeg',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-3.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-4.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/galler-1.jpeg',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-6.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-5.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-7.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-8.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/galler-1.jpeg',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-9.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-10.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-11.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/gallery-12.png',
        text: ' AS Wealth & Training PVT. LTD '
    },
    {
        src: 'images/galler-1.jpeg',
        text: ' AS Wealth & Training PVT. LTD '
    },
    // Voeg hier meer afbeeldingen en beschrijvingen toe als nodig
];
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById('modal-img').src = images[index].src;
    document.getElementById('modal-text').innerText = images[index].text;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModal();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModal();
}

function updateModal() {
    document.getElementById('modal-img').src = images[currentIndex].src;
    document.getElementById('modal-text').innerText = images[currentIndex].text;
} 
    
