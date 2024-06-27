const Bdd = require('./bdd/bdd');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('../config')

module.exports = class Api {
    constructor(server) {
        this.server = server;
        this.init();
        this.bdd = new Bdd().connection;
    }

    init() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.functions = require('./functions');

        this.app.listen(config.api.port, () => {
            console.log(`Server API is running on ${config.api.url}:${config.api.port}/api`);
        });
    }
}