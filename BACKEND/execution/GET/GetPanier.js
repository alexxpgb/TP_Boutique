exports.GetPanier = async (req, res, server) => {
    let AllCars = await server.api.functions.cars.GetAllCar(server);
    AllCars = AllCars.filter(car => req.session.user.panier.includes(car.ID));
    return server.renderTemplate(res, req, 'panier', {cars: AllCars});
}