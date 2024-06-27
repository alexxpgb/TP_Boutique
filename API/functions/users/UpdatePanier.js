exports.UpdatePanier = async (panier, userId, server) => {
    return new Promise(resolve => {
        server.api.bdd.query('UPDATE users SET panier = ? WHERE id = ?', [JSON.stringify(panier), userId], (err, result) => {
            if (err) {
                console.log(err);
                return resolve(false);
            } else {
                return resolve(true);
            }
        });
    });
}