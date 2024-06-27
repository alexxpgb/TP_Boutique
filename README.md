
Documentation d'Installation et de Configuration - Car Auction

Introduction
Bienvenue dans la documentation d'installation et de configuration pour le site Car Site. Cette documentation fournit des instructions détaillées sur la manière d'installer et de configurer l'application Car Site sur votre environnement local.

Prérequis
Avant de commencer l'installation, assurez-vous que votre environnement de développement répond aux critères suivants :

Node.js (version recommandée : 14.x)
npm (gestionnaire de paquets Node.js)
Un système de gestion de bases de données compatible avec MySQL (par exemple, MySQL Workbench)
Installation
Étape 1: Clonage du Projet
Clonez le projet Car Site depuis le dépôt Git :

bash
Copier le code
git clone <>

Étape 2: Installation des Dépendances
Naviguez vers le répertoire du projet cloné et installez les modules nécessaires à l'aide de de la commande npm i ( ou "npm install" ):


Étape 3: Configuration de la Base de Données
À la racine du projet, localisez le fichier Boutique.sql.
Ouvrez votre application de gestion de base de données (par exemple, MySQL Workbench).
Copiez le contenu du fichier Boutique.sql.
Collez le code dans l'éditeur SQL de votre application de gestion de base de données.
Exécutez le script SQL pour créer la base de données car_site ainsi que ses tables avec les données par défaut.


Pour lancer le serveur, vous devez maintenant executer la commande "node ."


L'application Car Site sera accessible à l'adresse http://localhost:3000 .

Documentation Additionnelle
Pour des informations supplémentaires sur l'utilisation de l'application, veuillez vous référer à la documentation utilisateur fournie ou consulter les commentaires dans le code source pour une compréhension approfondie de chaque fonctionnalité.

Support
Si vous rencontrez des problèmes lors de l'installation ou si vous avez des questions, n'hésitez pas à contacter notre équipe de support à l'adresse suivante : petit.alexandre.pro@gmail.com.