DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
`burger_name` VARCHAR(30) NULL,
`devoured` BOOLEAN default false NOT NULL,
CONSTRAINT burgers_pk
PRIMARY KEY (id)
)
