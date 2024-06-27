const fs = require('fs');
const path = require('path');

exports.PostSellCar = async (req, res, server) => {
    const { make, model, year, mileage, condition, description, price, horse, fast } = req.body;
    if (req.fileValidationError) {
        res.status(400);
        return server.renderTemplate(res, req, 'sellcar', {
            message: {
                type: 'error',
                text: 'Erreur lors de l\'upload de l\'image.'
            }
        });
    }

    const userID = req.session.user.id;
    const created = await server.api.functions.cars.CreateCar({ userID, make, model, year, mileage, condition, description, price, horse, fast }, server);
    if (created.success) {
        const carId = created.carId;
        const files = req.files;
        console.log(files);

        const renameFile = (file, fieldname, index) => {
            const ext = path.extname(file.originalname);
            const newName = `${carId}_${fieldname}${index}${ext}`;
            const newPath = path.join('uploads', newName);

            fs.renameSync(file.path, newPath);
            return newName;
        };
        const images = files.images ? files.images.map((file, index) => renameFile(file, 'image', index)) : [];

        server.api.bdd.query(
            'UPDATE cars SET images = ? WHERE ID = ?',
            [JSON.stringify(images), carId], async (err, result) => {
                if (err) {
                    res.status(500);
                    return server.renderTemplate(res, req, 'sellcar', {
                        message: {
                            type: 'error',
                            text: 'Erreur lors de la création de l\'annonce.'
                        }
                    });
                }
                res.status(200);
                return res.redirect('/');
            }
        );
    } else {
        res.status(400);
        return server.renderTemplate(res, req, 'sellcar', {
            message: {
                type: 'error',
                text: 'Erreur lors de l\'ajout de la voiture.'
            }
        });
    }
}