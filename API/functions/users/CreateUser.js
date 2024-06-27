exports.CreateUser = async (data, server) => {
    return new Promise(resolve => {
        const { firstname, lastname, email, password, address, city, postal, phone } = data;
        server.api.bdd.query('INSERT INTO users (firstname, lastname, email, password, address, city, postal, phone, panier, favoris, cars) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [firstname, lastname, email, password, address, city, postal, phone, JSON.stringify('[]'), JSON.stringify('[]'), JSON.stringify('[]')], (err, result) => {
            if (err) {
                console.log(err);
                return resolve(false);
            } else {
                return resolve(true);
            }
        });
    });
}