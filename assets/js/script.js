document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        { img: 'img/Mercedes/amg GTC.jpg', model: 'Mercedes-Benz AMG GTC', price: '20,000 €', timeLeft: '3 jours' },
        { img: 'img/Mercedes/classe c.jpg', model: 'Mercedes-Benz C-Class', price: '25,000 €', timeLeft: '5 jours' },
        { img: 'img/audi/RS3.jpg', model: 'Audi RS3', price: '22,000 €', timeLeft: '4 jours' },
        { img: 'img/bmw/M3 cs.jpg', model: 'BMW M3 CS', price: '30,000 €', timeLeft: '6 jours' },
        { img: 'img/Mercedes/190 evo 2.jpg', model: 'Mercedes-Benz 190 Evo 2', price: '45,000 €', timeLeft: '7 jours' },
        // Add more car objects as needed
    ];
    
    // Generate 45 additional car items for demonstration
    for (let i = 0; i < 45; i++) {
        cars.push({ img: 'img/bmw/M3 cs.jpg', model: `BMW M3 CS ${i+1}`, price: '20,000 €', timeLeft: `${3 + (i % 7)} jours` });
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
});
