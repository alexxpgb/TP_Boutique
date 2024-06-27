exports.CreateCar = async (data, server) => {
    return new Promise(async resolve => {
        try {
            let AllExistingIds = await server.api.functions.cars.GetAllIds(server);
            let carId = GenerateId(999999, 100000, AllExistingIds);
            const { userID, make, model, year, mileage, condition, description, price, horse, fast } = data;
            server.api.bdd.query('INSERT INTO cars (ID, userID, make, model, year, mileage, `condition`, description, price, horse, fast) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [carId, userID, make, model, year, mileage, condition, description, price, horse, fast], (err, result) => {
                if (err) {
                    console.log(err);
                    return resolve({ success: false });
                } else {
                    return resolve({ success: true, carId });
                }
            });
        } catch (err) {
            console.log(err);
            return resolve({ success: false });
        }
    });
}

function GenerateId(max, min, exist) {
    try {
        let myNumber = Math.floor(Math.random() * (max - min + 1)) + min
        do {
            myNumber = Math.floor(Math.random() * (max - min + 1)) + min
        } while (exist.includes(myNumber))
        return myNumber
    } catch (err) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}