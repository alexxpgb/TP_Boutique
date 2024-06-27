-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.37 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour car_site
CREATE DATABASE IF NOT EXISTS `car_site` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `car_site`;

-- Listage de la structure de la table car_site. cars
CREATE TABLE IF NOT EXISTS `cars` (
  `ID` int DEFAULT NULL,
  `userID` int DEFAULT NULL,
  `make` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `mileage` int DEFAULT NULL,
  `condition` varchar(50) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `images` json DEFAULT NULL,
  `price` int DEFAULT NULL,
  `horse` int DEFAULT NULL,
  `fast` float DEFAULT NULL,
  `sold` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table car_site.cars : ~21 rows (environ)
DELETE FROM `cars`;
INSERT INTO `cars` (`ID`, `userID`, `make`, `model`, `year`, `mileage`, `condition`, `description`, `images`, `price`, `horse`, `fast`, `sold`) VALUES
	(727661, 2, 'Audi', 'R8', 2018, 50000, 'tres bon', 'Découvrez l\'Audi R8, une supercar exceptionnelle combinant puissance et élégance. Avec son moteur V10 de 620 chevaux, cette voiture offre des performances incomparables et un design raffiné. Parfaite pour les passionnés de vitesse et de luxe.', '["727661_image0.jpg", "727661_image1.jpg", "727661_image2.jpg"]', 90000, 620, 3.5, 0),
	(819049, 2, 'Audi', 'RS E-tron GT', 2022, 10000, 'tres bon ', '"L\'Audi RS E-tron GT est l\'incarnation de la performance électrique. Avec 646 chevaux et une accélération fulgurante, ce modèle est à la pointe de la technologie tout en offrant le confort et le luxe emblématiques d\'Audi', '["819049_image0.jpg", "819049_image1.jpg", "819049_image2.jpg"]', 85000, 646, 3.3, 0),
	(445239, 2, 'Audi', 'RS3', 2020, 40000, 'Trés bon', 'L\'Audi RS3 est une compacte sportive qui ne fait aucun compromis. Avec un moteur de 400 chevaux, elle offre une expérience de conduite dynamique et réactive, idéale pour ceux qui recherchent la performance au quotidien', '["445239_image0.jpg", "445239_image1.jpg", "445239_image2.jpg"]', 45000, 450, 4.1, 0),
	(130748, 2, 'Audi', 'RS4', 2019, 60000, 'Bon', 'L\'Audi RS4 est la quintessence du break sportif. Alliant puissance et praticité, ce modèle de 450 chevaux offre un espace généreux et des performances impressionnantes, parfait pour les familles dynamiques', '["130748_image0.jpg", "130748_image1.jpg", "130748_image2.jpg"]', 55000, 450, 4, 0),
	(429387, 2, 'Audi', 'RS6', 2021, 20000, 'bon', 'L\'Audi RS6 est un chef-d\'œuvre de l\'ingénierie automobile. Avec 600 chevaux sous le capot et un design agressif, elle offre des performances dignes d\'une supercar tout en étant un break polyvalent et luxueux', '["429387_image0.jpg", "429387_image1.jpg", "429387_image2.jpg"]', 90000, 600, 3.5, 0),
	(317829, 2, 'Audi', 'TT RS', 2018, 45000, 'Bon', 'L\'Audi TT RS est une icône parmi les coupés sportifs. Dotée d\'un moteur de 400 chevaux, elle offre une conduite exaltante et un design intemporel, idéale pour ceux qui recherchent la performance avec style', '["317829_image0.jpg", "317829_image1.jpg", "317829_image2.jpg"]', 40000, 400, 3.7, 0),
	(867374, 2, 'BMW', '2002 ti', 1972, 80000, 'Restaurée', 'La BMW 2002 ti est une classique intemporelle. Restaurée avec soin, elle offre un charme vintage avec des performances fiables. Parfaite pour les collectionneurs et les amateurs de voitures historiques', '["867374_image0.jpg", "867374_image1.jpg", "867374_image2.jpg"]', 30000, 130, 10, 0),
	(757478, 2, 'BMW', 'M2', 2018, 30000, 'tres bon', 'La BMW M2 combine agilité et puissance dans un format compact. Avec 370 chevaux, elle promet une conduite sportive et réactive, idéale pour les amateurs de sensations fortes.', '["757478_image0.jpg", "757478_image1.jpg", "757478_image2.jpg"]', 50000, 370, 4.3, 0),
	(528878, 2, 'BMW', 'M3 Touring', 2020, 20000, 'excellent', 'La BMW M3 Touring est le parfait équilibre entre sportivité et praticité. Avec 510 chevaux, elle offre des performances de haut niveau et un espace de chargement généreux, idéale pour les familles dynamiques', '["528878_image0.jpg", "528878_image1.jpg", "528878_image2.jpg"]', 70000, 510, 3.8, 0),
	(497727, 2, 'BMW', 'M4 CS', 2018, 35000, 'Tres bon', 'La BMW M4 CS est une voiture de sport élégante et puissante. Avec son moteur de 460 chevaux, elle offre une conduite exaltante et un design sophistiqué, parfaite pour les amateurs de performance et de style', '["497727_image0.jpg", "497727_image1.jpg", "497727_image2.jpg"]', 60000, 460, 3.9, 0),
	(830500, 2, 'Mercedes', '190 Evo 2', 1990, 70000, 'Restaurée', 'La Mercedes 190 Evo 2 est une légende du sport automobile. Restaurée avec soin, elle combine performances classiques et design emblématique, idéale pour les collectionneurs passionnés', '["830500_image0.jpg", "830500_image1.jpg", "830500_image2.jpg"]', 85000, 235, 7.1, 0),
	(599133, 2, 'Mercedes', '250SL', 1967, 90000, 'Restaurée', 'La Mercedes 250SL est une icône des années 60. Restaurée pour conserver son charme original, elle offre une expérience de conduite élégante et classique, parfaite pour les amateurs de voitures de collection', '["599133_image0.jpg", "599133_image1.jpg", "599133_image2.jpg"]', 70000, 150, 10, 0),
	(836850, 2, 'Mercedes', 'AMG GT 53 4 portes', 2019, 25000, 'Tres bon ', 'La Mercedes AMG GT 53 4 portes est une berline de performance avec un style agressif. Avec 435 chevaux, elle offre une conduite dynamique et un espace intérieur luxueux, idéale pour les trajets quotidiens et les escapades sportives', '["836850_image0.jpg", "836850_image1.jpg", "836850_image2.jpg"]', 80000, 435, 4.5, 0),
	(187462, 2, 'Audi', 'AMG GTC', 2018, 30000, 'tres bon ', 'La Mercedes AMG GTC est un roadster haute performance. Avec 557 chevaux, elle offre une conduite exaltante et un design ouvert qui invite à profiter de chaque trajet', '["187462_image0.jpg", "187462_image1.jpg", "187462_image2.jpg"]', 90000, 557, 3.7, 0),
	(168600, 2, 'Mercedes', 'AMG GTS', 2017, 35000, 'Tres bon', 'La Mercedes AMG GTS est une sportive raffinée. Avec son moteur puissant de 522 chevaux, elle offre des performances dynamiques et un design distinctif, parfaite pour les passionnés de vitesse et de luxe.', '["168600_image0.jpg", "168600_image1.jpg", "168600_image2.jpg"]', 85000, 522, 3.8, 0),
	(650739, 2, 'Mercedes', 'AMG one', 2021, 5000, 'neuf', 'La Mercedes AMG One est l\'apogée de la technologie de Formule 1 appliquée à une voiture de route. Avec 1000 chevaux, elle offre des performances inégalées et un design futuriste, destinée aux collectionneurs exigeants.', '["650739_image0.jpg", "650739_image1.jpg", "650739_image2.jpg"]', 22500000, 1000, 2.5, 0),
	(672252, 2, 'Mercedes', 'Classe C', 2018, 40000, 'Bon', 'La Mercedes G63 est un SUV de luxe avec des performances exceptionnelles. Avec 585 chevaux et un design iconique, elle offre une expérience de conduite puissante et une présence imposante sur la route', '["672252_image0.jpg", "672252_image1.jpg", "672252_image2.jpg"]', 30000, 255, 6, 0),
	(814091, 2, 'Mercedes', 'Classe C', 2018, 40000, 'bon', 'La Mercedes Classe C est une berline élégante et polyvalente. Avec 255 chevaux, elle offre une conduite confortable et réactive, idéale pour les trajets quotidiens et les longs voyages.', '["814091_image0.jpg", "814091_image1.jpg", "814091_image2.jpg"]', 30000, 255, 6, 0),
	(470914, 2, 'Mercedes', 'G63', 2019, 20000, 'tres bon', 'La Mercedes G63 est un SUV de luxe avec des performances exceptionnelles. Avec 585 chevaux et un design iconique, elle offre une expérience de conduite puissante et une présence imposante sur la route.', '["470914_image0.jpg", "470914_image1.jpg", "470914_image2.jpg"]', 140000, 585, 4.5, 0),
	(444493, 2, 'Mercedes', 'GLC', 2020, 15000, 'excellent', 'La Mercedes GLC est un SUV compact alliant élégance et performance. Avec 255 chevaux, elle offre une conduite confortable et réactive, parfaite pour les aventures urbaines et rurales.', '["444493_image0.jpg", "444493_image1.jpg", "444493_image2.jpg"]', 40000, 255, 6.2, 0),
	(781668, 2, 'Mercedes', 'SL63', 2017, 25000, 'Trés bon', 'La Mercedes SL63 est un roadster de luxe offrant des performances puissantes. Avec 585 chevaux, elle procure une expérience de conduite exaltante et un design élégant, idéale pour les amateurs de voitures décapotables haut de gamme', '["781668_image0.jpg", "781668_image1.jpg", "781668_image2.jpg"]', 90000, 585, 4.1, 0);

-- Listage de la structure de la table car_site. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `postal` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `signup_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `panier` json DEFAULT NULL,
  `favoris` json DEFAULT NULL,
  `cars` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`lastname`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table car_site.users : ~2 rows (environ)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `city`, `postal`, `phone`, `signup_time`, `panier`, `favoris`, `cars`) VALUES
	(1, 'Jérémie', 'Jullemier', 'jeotique@gmail.com', 'Jeomae544', '2 allée des saladelles', 'Vitrolles', '13127', '0625038079', '2024-06-18 07:57:24', '[]', '[]', '[]'),
	(2, 'rayan', 'carre', 'carreworld@icloud.com', 'jeremieaunpetitzizi', '2 chemin de st pierre residence soprnao', 'Marignane', '13700', '0749173843', '2024-06-19 18:56:54', '[]', '[]', '[]');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
