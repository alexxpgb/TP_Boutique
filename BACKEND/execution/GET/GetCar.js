exports.GetCar = async (req, res, server) => {
    const { id } = req.params;
    const car = await server.api.functions.cars.GetCarById(id, server);
    if (!car) {
        return server.renderTemplate(res, req, '404');
    }
    return server.renderTemplate(res, req, 'car', {car});
}