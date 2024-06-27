exports.GetYour = async (req, res, server) => {
    let AllCars = await server.api.functions.cars.GetAllCar(server);
    AllCars = AllCars.filter(car => req.session.user.cars.includes(car.ID));
    return server.renderTemplate(res, req, 'your', {cars: AllCars});
}