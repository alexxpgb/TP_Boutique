exports.GetAllCar = async (server) => {
    return new Promise(async resolve => {
        try {
            server.api.bdd.query('SELECT * FROM cars', (err, result) => {
                if (err) {
                    console.log(err);
                    return resolve([]);
                } else {
                    result = result.filter(r => r.images && r.images.length > 0);
                    return resolve(result);
                }
            });
        } catch (err) {
            console.log(err);
            return resolve([]);
        }
    });
}