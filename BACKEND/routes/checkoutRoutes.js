const express = require('express');
const execution = require('../execution');


module.exports = class checkoutRoutes {
    constructor(server) {
        this.server = server;
        this.init();
    }

    init() {
        this.router = express.Router();
        this.router.get('/', this.server.isAuthenticated, (req, res) => execution.GET.GetCheckout(req, res, this.server));
        this.router.post('/process', this.server.isAuthenticated, (req, res) => execution.POST.PostCheckout(req, res, this.server));
        this.server.app.use('/checkout', this.router);
    }
}
