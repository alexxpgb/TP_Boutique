exports.SetSold = async (id, server) => {
    return new Promise(async resolve => {
        try {
            server.api.bdd.query('UPDATE cars SET sold = 1 WHERE ID = ?', [id], (err, result) => {
                if (err) {
                    console.log(err);
                    return resolve(false);
                } else {
                    return resolve(true);
                }
            });
        } catch (err) {
            console.log(err);
            return resolve(false);
        }
    });
}