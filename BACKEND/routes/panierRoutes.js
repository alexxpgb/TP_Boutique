const express = require('express');
const execution = require('../execution');


module.exports = class panierRoutes {
    constructor(server) {
        this.server = server;
        this.init();
    }

    init() {
        this.router = express.Router();
        this.router.get('/', this.server.isAuthenticated, (req, res) => execution.GET.GetPanier(req, res, this.server));
        this.router.get('/:id', this.server.isAuthenticated, (req, res) => execution.GET.PanierCar(req, res, this.server));
        this.server.app.use('/panier', this.router);
    }
}
