-- Create the database eatdaburger_db.
DROP DATABASE IF EXISTS eatdaburger_db;
CREATE DATABASE eatdaburger_db;
USE eatdaburger_db;

-- Create the table burgers.
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);