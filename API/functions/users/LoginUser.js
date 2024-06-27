exports.LoginUser = async (data, server) => {
    return new Promise(resolve => {
        const { email, password } = data;
        server.api.bdd.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
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
    });
}