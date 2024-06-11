document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        { img: '../assets/img/Mercedes/amg GTC/1.jpg', model: 'Mercedes-Benz AMG GTC', price: '20,000 €', timeLeft: '3 jours' },
        { img: '../assets/img/Mercedes/classe c/1.jpg', model: 'Mercedes-Benz C-Class', price: '25,000 €', timeLeft: '5 jours' },
        { img: '../assets/img/audi/RS3/1.jpg', model: 'Audi RS3', price: '22,000 €', timeLeft: '4 jours' },
        { img: '../assets/img/bmw/M3 cs/1.jpg', model: 'BMW M3 CS', price: '30,000 €', timeLeft: '6 jours' },
        { img: '../assets/img/Mercedes/190 evo 2/1.jpg', model: 'Mercedes-Benz 190 Evo 2', price: '45,000 €', timeLeft: '7 jours' },
        // Ajout de plus de voitures pour atteindre 50
        { img: '../assets/img/audi/R8/1.jpg', model: 'Audi R8', price: '50,000 €', timeLeft: '8 jours' },
        { img: '../assets/img/audi/rs etron gt/1.jpg', model: 'Audi RS e-tron GT', price: '70,000 €', timeLeft: '9 jours' },
        { img: '../assets/img/audi/RS4/1.jpg', model: 'Audi RS4', price: '60,000 €', timeLeft: '10 jours' },
        { img: '../assets/img/audi/RS6/1.jpg', model: 'Audi RS6', price: '80,000 €', timeLeft: '11 jours' },
        { img: '../assets/img/audi/TT RS/1.jpg', model: 'Audi TT RS', price: '40,000 €', timeLeft: '12 jours' },
        { img: '../assets/img/bmw/2002 ti/1.jpg', model: 'BMW 2002 ti', price: '30,000 €', timeLeft: '13 jours' },
        { img: '../assets/img/bmw/m2/1.jpg', model: 'BMW M2', price: '50,000 €', timeLeft: '14 jours' },
        { img: '../assets/img/bmw/m3 touring/1.jpg', model: 'BMW M3 Touring', price: '55,000 €', timeLeft: '15 jours' },
        { img: '../assets/img/bmw/m4 csl/1.jpg', model: 'BMW M4 CSL', price: '75,000 €', timeLeft: '16 jours' },
        { img: '../assets/img/bmw/xm/1.jpg', model: 'BMW XM', price: '100,000 €', timeLeft: '17 jours' },
        { img: '../assets/img/bmw/Z4/1.jpg', model: 'BMW Z4', price: '45,000 €', timeLeft: '18 jours' },
        { img: '../assets/img/Mercedes/amg gt 53 4portes/1.jpg', model: 'Mercedes AMG GT 53', price: '110,000 €', timeLeft: '19 jours' },
        { img: '../assets/img/Mercedes/amg GTS/1.jpg', model: 'Mercedes AMG GTS', price: '120,000 €', timeLeft: '20 jours' },
        { img: '../assets/img/Mercedes/amg one/1.jpg', model: 'Mercedes AMG One', price: '1,000,000 €', timeLeft: '21 jours' },
        { img: '../assets/img/Mercedes/g63/1.jpg', model: 'Mercedes G63', price: '200,000 €', timeLeft: '22 jours' },
        { img: '../assets/img/Mercedes/glc/1.jpg', model: 'Mercedes GLC', price: '80,000 €', timeLeft: '23 jours' },
        { img: '../assets/img/Mercedes/sl63/1.jpg', model: 'Mercedes SL63', price: '150,000 €', timeLeft: '24 jours' },
    ];

    // Generate additional car items for demonstration
    for (let i = cars.length; i < 50; i++) {
        cars.push({ img: '../assets/img/bmw/M3 cs/1.jpg', model: `BMW M3 CS ${i + 1}`, price: '20,000 €', timeLeft: `${3 + (i % 7)} jours` });
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
                <div class="buttons">
                    <button class="cta-button favoris">Favoris</button>
                    <button class="cta-button acheter">Acheter</button>
                </div>
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
