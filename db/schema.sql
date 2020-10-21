-- drops db if it already exists --
DROP DATABASE IF EXISTS eataburger

-- creates db "eatadburger"
CREATE DATABASE eatdaburger;

--use the db "eataburger":
USE eatdaburger;

--create table for db "eataburger"
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
