exports.FavorisCar = async (req, res, server) => {
    const { id } = req.params;
    const {action} = req.query;
    const car = await server.api.functions.cars.GetCarById(id, server);
    if (!car) {
        return server.renderTemplate(res, req, '404');
    }
    if(!action) {
        if(req.session.user.favoris.find(c => c.ID === car.ID)) {
            return res.redirect('/fav');
        }
        req.session.user.favoris.push(car.ID);
        await server.api.functions.users.UpdateFavoris(req.session.user.favoris, req.session.user.id, server);
        return server.renderTemplate(res, req, 'car', {car: car});
    } else {
        if(action === 'remove') {
            if(!req.session.user.favoris.find(c => c === car.ID)) return res.redirect('/fav');
            req.session.user.favoris = req.session.user.favoris.filter(c => c !== car.ID);
            await server.api.functions.users.UpdateFavoris(req.session.user.favoris, req.session.user.id, server);
            return res.redirect('/fav');
        } else return res.redirect('/fav');
    }
}