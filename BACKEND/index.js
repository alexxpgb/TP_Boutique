const express = require('express');
const config = require('../config');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const { resolve } = require("path");
const path = require('path');
const Api = require('../API');
const routes = require('./routes');
const session = require('express-session');
const upload = require('./config/multerConfig');

module.exports = class Server {
    constructor() {
        this.init();
    }

    init() {
        this.api = new Api(this);
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.set('view engine', 'ejs');
        this.app.engine("html", ejs.renderFile);
        this.app.use("/assets", express.static(resolve(`./FRONTEND/assets`)));
        this.app.use("/uploads", express.static(resolve(`./uploads`)));
        this.app.set('views', path.join(__dirname, '../FRONTEND/templates'));
        this.app.use(session({
            secret: 'gfgfhdfvggriuhfjgivhfjfrfgehfdfhfggdrdvj',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false }
        }));
        this.upload = upload;
        this.routes = new routes(this);
        this.app.listen(config.server.port, () => {
            console.log(`Server is running on ${config.server.url}:${config.server.port}`);
        });
    }

    renderTemplate(res, req, template, data = {}) {
        const baseData = {
            path: req.path,
            user: req.session?.user || null,
            hoster: `${config.server.url}:${config.server.port}`,
            message: null,
        };
        res.render(template, Object.assign(baseData, data));
    };

    isAuthenticated(req, res, next) {
        if (req.session?.user) {
            return next();
        }
        res.redirect('/login');
    }

    isNotAuthenticated(req, res, next) {
        if (!req.session?.user) {
            return next();
        }
        res.redirect('/');
    }
}