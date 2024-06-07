document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        { img: 'img/vbmw.jpg', model: 'BMW M5', price: '20,000 €', timeLeft: '3 jours' },
        { img: 'img/mercedes_classc.jpg', model: 'Mercedes-Benz C-Class', price: '25,000 €', timeLeft: '5 jours' },
        { img: 'img/audi_a6.jpg', model: 'Audi A6', price: '22,000 €', timeLeft: '4 jours' },
        { img: 'img/Tesla_model_s.jpg', model: 'Tesla Model S', price: '30,000 €', timeLeft: '6 jours' },
        { img: 'img/porshe_911.jpg', model: 'Porsche 911', price: '45,000 €', timeLeft: '7 jours' },
        // Add more car objects as needed
    ];
    
    // Generate 50 car items for demonstration
    for (let i = 0; i < 45; i++) {
        cars.push({ img: 'img/vbmw.jpg', model: `BMW M5 ${i+1}`, price: '20,000 €', timeLeft: `${3 + (i % 7)} jours` });
    }

    const carsPerPage = 10;
    let currentPage = 1;

    function displayCars(page) {
        const carList = document.getElementById('car-list');
        carList.innerHTML = '';
        const start = (page - 1) * carsPerPage;
        const end = start + carsPerPage;
        const carsToDisplay = cars.slice(start, end);

        carsToDisplay.forEach(car => {
            const carItem = document.createElement('div');
            carItem.classList.add('car-item');
            carItem.innerHTML = `
                <img src="${car.img}" alt="${car.model}">
                <p>Modèle: ${car.model}</p>
                <p>Prix actuel: ${car.price}</p>
                <p>Termine dans: ${car.timeLeft}</p>
                <button class="cta-button">Je suis intéressé</button>
            `;
            carList.appendChild(carItem);
        });
    }

    function setupPagination() {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';
        const pageCount = Math.ceil(cars.length / carsPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayCars(currentPage);
                setupPagination();
            });
            pagination.appendChild(pageButton);
        }
    }

    displayCars(currentPage);
    setupPagination();

    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
});
