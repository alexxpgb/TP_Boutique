const express = require('express');
const execution = require('../execution');


module.exports = class mainRoutes {
    constructor(server) {
        this.server = server;
        this.init();
    }

    init() {
        this.router = express.Router();
        this.router.get('/', (req, res) => execution.GET.GetMain(req, res, this.server));
        this.router.get('/login', this.server.isNotAuthenticated, (req, res) => execution.GET.GetLogin(req, res, this.server));
        this.router.post('/login', this.server.isNotAuthenticated, (req, res) => execution.POST.PostLogin(req, res, this.server));
        this.router.get('/register', this.server.isNotAuthenticated, (req, res) => execution.GET.GetRegister(req, res, this.server));
        this.router.post('/register', this.server.isNotAuthenticated, (req, res) => execution.POST.PostRegister(req, res, this.server));
        this.router.get('/logout', this.server.isAuthenticated, (req, res) => execution.GET.GetLogout(req, res, this.server));
        this.router.get('/contact', this.server.isAuthenticated, (req, res) => execution.GET.GetContact(req, res, this.server));
        this.router.post('/contact', this.server.isAuthenticated, (req, res) => execution.POST.PostContact(req, res, this.server));
        this.router.get('/your', this.server.isAuthenticated, (req, res) => execution.GET.GetYour(req, res, this.server));
        this.server.app.use('/', this.router);
    }

}
