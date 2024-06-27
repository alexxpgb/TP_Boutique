document.addEventListener('DOMContentLoaded', function() {
    const cars = Array.from(document.querySelectorAll('.car-item'));
    const carList = document.getElementById('car-list');
    const pagination = document.getElementById('pagination');
    const itemsPerPage = 4; // Affiche maintenant 6 voitures par page
    let currentPage = 1;
    const totalPages = Math.ceil(cars.length / itemsPerPage);

    function displayCars(page) {
        carList.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const carsToShow = cars.slice(start, end);

        carsToShow.forEach(car => {
            carList.appendChild(car);
        });
    }

    function updatePagination() {
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('pagination-button');
            if (i === currentPage) {
                button.classList.add('active');
            }

            button.addEventListener('click', function() {
                currentPage = i;
                displayCars(currentPage);
                updatePagination();
            });

            pagination.appendChild(button);
        }
    }

    displayCars(currentPage);
    updatePagination();
});
