exports.GetCheckout = async (req, res, server) => {
    let AllCars = await server.api.functions.cars.GetAllCar(server);
    AllCars = AllCars.filter(car => req.session.user.panier.includes(car.ID) && !car.sold && car.userID !== req.session.user.id);
    let price = 0;
    AllCars.forEach(car => price += car.price);
    return server.renderTemplate(res, req, 'checkout', {price: price, cars: AllCars});
}