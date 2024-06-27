const mainRoutes = require('./mainRoutes');
const carRoutes = require('./carRoutes');
const panierRoutes = require('./panierRoutes');
const favorisRoutes = require('./favorisRoutes');
const checkoutRoutes = require('./checkoutRoutes');

module.exports = class routes {
    constructor(server) {
        this.server = server;
        this.init();
    }

    init() {
        new mainRoutes(this.server);
        new carRoutes(this.server);
        new panierRoutes(this.server);
        new favorisRoutes(this.server);
        new checkoutRoutes(this.server);
    }
}