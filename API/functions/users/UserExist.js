exports.UserExist = (email, server) => {
    return new Promise((resolve, reject) => {
        server.api.bdd.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.length > 0);
            }
        });
    });
}