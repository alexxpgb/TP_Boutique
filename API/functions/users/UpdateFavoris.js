exports.UpdateFavoris = async (favoris, userId, server) => {
    return new Promise(resolve => {
        server.api.bdd.query('UPDATE users SET favoris = ? WHERE id = ?', [JSON.stringify(favoris), userId], (err, result) => {
            if (err) {
                console.log(err);
                return resolve(false);
            } else {
                return resolve(true);
            }
        });
    });
}