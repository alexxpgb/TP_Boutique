////voiture

CREATE TABLE car_auction (
  id INT AUTO_INCREMENT PRIMARY KEY,
  model VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  current_price DECIMAL(10, 2) NOT NULL,
  end_time TIMESTAMP,
  image_url TEXT,
  kilometers INT,
  general_condition TEXT,
  description TEXT
);