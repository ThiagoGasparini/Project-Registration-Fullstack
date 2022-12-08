DROP DATABASE IF EXISTS CRUD;

CREATE DATABASE IF NOT EXISTS CRUD;

CREATE TABLE CRUD.Users(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      address VARCHAR(255) NOT NULL,
      district VARCHAR(100) NOT NULL,
      zip_code VARCHAR(45) NOT NULL,
      city VARCHAR(45) NOT NULL,
      state VARCHAR(45) NOT NULL,
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(45) NOT NULL
  ) engine = InnoDB;

CREATE TABLE CRUD.ProductionData(
      id INT PRIMARY KEY AUTO_INCREMENT,
      type VARCHAR(45) NOT NULL,
      quantity VARCHAR(45) NOT NULL,
      attractions VARCHAR(255) NOT NULL,
      suggestions VARCHAR(45) NOT NULL,
      url_image VARCHAR(45) NOT NULL
  ) engine = InnoDB;