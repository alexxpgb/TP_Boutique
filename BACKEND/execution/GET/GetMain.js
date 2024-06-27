exports.GetMain = async (req, res, server) => {
    const {filter} = req.query;
    let AllCars = await server.api.functions.cars.GetAllCar(server);
    AllCars = AllCars.filter(car => car.sold === 0);
    if(filter) {
        if(filter === 'bmw') AllCars = AllCars.filter(car => car.make === 'BMW');
        if(filter === 'audi') AllCars = AllCars.filter(car => car.make === 'Audi');
        if(filter === 'merco') AllCars = AllCars.filter(car => car.make === 'Mercedes');
        if(filter === 'lower') AllCars.sort((a, b) => a.price - b.price);
        if(filter === 'higher') AllCars.sort((a, b) => b.price - a.price);
    }
    server.renderTemplate(res, req, 'main', {cars: AllCars});   
}