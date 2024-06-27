exports.PanierCar = async (req, res, server) => {
    const { id } = req.params;
    const {action} = req.query;
    const car = await server.api.functions.cars.GetCarById(id, server);
    if (!car) {
        return server.renderTemplate(res, req, '404');
    }
    if(!action) {
        if(req.session.user.panier.find(c => c.ID === car.ID)) {
            return res.redirect('/panier');
        }
        req.session.user.panier.push(car.ID);
        await server.api.functions.users.UpdatePanier(req.session.user.panier, req.session.user.id, server);
        return server.renderTemplate(res, req, 'car', {car: car});
    } else {
        if(action === 'remove') {
            if(!req.session.user.panier.find(c => c === car.ID)) return res.redirect('/panier');
            req.session.user.panier = req.session.user.panier.filter(c => c !== car.ID);
            await server.api.functions.users.UpdatePanier(req.session.user.panier, req.session.user.id, server);
            return res.redirect('/panier');
        } else return res.redirect('/panier');
    }
}