exports.GetAllIds = async (server) => {
    return new Promise(async resolve => {
        try {
            server.api.bdd.query('SELECT ID FROM cars', (err, result) => {
                if (err) {
                    console.log(err);
                    return resolve([]);
                } else {
                    let AllExistingIds = [];
                    for (let i = 0; i < result.length; i++) {
                        AllExistingIds.push(result[i].ID);
                    }
                    return resolve(AllExistingIds);
                }
            });
        } catch (err) {
            console.log(err);
            return resolve([]);
        }
    });
}