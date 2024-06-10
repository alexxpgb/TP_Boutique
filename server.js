// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 3000;

// Configurer la connexion à la base de données MySQL
/*const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'car_auction'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connecté à la base de données MySQL');
});*/

// Middleware pour les données JSON
app.use(express.json());

// Configurer Express pour servir les fichiers statiques du dossier assets
app.use('/assets', express.static(path.join(__dirname, './assets')));

// Configurer le moteur de vue EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './templates'));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.render('index');
});

// Routes API pour gérer les produits
app.get('/api/products', (req, res) => {
    let sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
    console.log(`http://localhost:3000`)
});
