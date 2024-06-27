exports.GetFavoris = async (req, res, server) => {
    let AllCars = await server.api.functions.cars.GetAllCar(server);
    AllCars = AllCars.filter(car => req.session.user.favoris.includes(car.ID));
    return server.renderTemplate(res, req, 'favoris', {cars: AllCars});
}