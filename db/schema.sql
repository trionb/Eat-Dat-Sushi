DROP DATABASE IF EXISTS sushi_db;

CREATE DATABASE sushi_db;

USE sushi_db;

CREATE TABLE typeSushi(
    id INT (10) AUTO_INCREMENT NOT NULL,
    sushi_name VARCHAR (80) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE NOT NULL,
    primary key (id)
);