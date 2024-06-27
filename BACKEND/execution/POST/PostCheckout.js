const axios = require('axios');

exports.PostCheckout = async (req, res, server) => {
    const { cardname, cardnumber, expirydate, cvc } = req.body;
    let AllCars = await server.api.functions.cars.GetAllCar(server);
    AllCars = AllCars.filter(car => req.session.user.panier.includes(car.ID) && !car.sold && car.userID !== req.session.user.id);
    let price = 0;
    AllCars.forEach(car => price += car.price);

    const bodyData = {
        card: {
            number: cardnumber,
            expiration_date: expirydate,
            cvc: cvc,
        },
        payment_intent: {
            price: price.toString() 
        }
    };

    try {
        const result = await axios.post('https://challenge-js.ynovaix.com/payment', bodyData, {
            headers: {
                Authorization: "157c8a69-543b-4767-8cca-b329cfec5e9d",
                'Content-Type': 'application/json'
            },
            maxRedirects: 5 
        });
        req.session.user.cars.push(...AllCars.map(car => car.ID));
        req.session.user.panier = req.session.user.panier.filter(car => !AllCars.map(car => car.ID).includes(car));
        req.session.user.favoris = req.session.user.favoris.filter(car => !AllCars.map(car => car.ID).includes(car));
        await server.api.functions.users.UpdateCars(req.session.user.cars, req.session.user.id, server);
        await server.api.functions.users.UpdatePanier(req.session.user.panier, req.session.user.id, server);
        await server.api.functions.users.UpdateFavoris(req.session.user.favoris, req.session.user.id, server);
        for(let i = 0; i < AllCars.length; i++) {
            await server.api.functions.cars.SetSold(AllCars[i].ID, server);
        }
        return server.renderTemplate(res, req, 'success');
    } catch (error) {
        if (error.response) {
            return server.renderTemplate(res, req, 'checkout', { message: {
                type: 'error',
                text: error.response.data.message
            }, price: price, cars: AllCars});
        } else if (error.request) {
            console.error(error.request);
            res.status(500).send('No response received from payment service');
        } else {
            console.error('Error', error.message);
            res.status(500).send('Error in payment request setup');
        }
    }
};
