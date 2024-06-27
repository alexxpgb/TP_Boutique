const express = require('express');
const execution = require('../execution');


module.exports = class carRoutes {
    constructor(server) {
        this.server = server;
        this.init();
    }

    init() {
        this.router = express.Router();
        this.router.get('/', (req, res) => execution.GET.GetMain(req, res, this.server));
        this.router.get('/sell', this.server.isAuthenticated, (req, res) => execution.GET.GetSellCar(req, res, this.server));
        this.router.post('/sell', this.server.isAuthenticated, this.server.upload.fields([
            { name: 'images', maxCount: 3 }
        ]), (req, res) => execution.POST.PostSellCar(req, res, this.server));
        this.router.get('/:id', (req, res) => execution.GET.GetCar(req, res, this.server));
        this.server.app.use('/car', this.router);
    }
}
