exports.GetCarById = async (id, server) => {
    return new Promise(async resolve => {
        try {
            server.api.bdd.query('SELECT * FROM cars WHERE ID = ?', [id], (err, result) => {
                if (err) {
                    console.log(err);
                    return resolve(false);
                } else {
                    if(result.length === 0) {
                        return resolve(false);
                    }
                    return resolve(result[0]);
                }
            });
        } catch (err) {
            console.log(err);
            return resolve(false);
        }
    });
}