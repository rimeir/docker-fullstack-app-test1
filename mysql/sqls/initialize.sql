DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;
USE myapp;

CREATE TABLE lists (
    id INTEGER ATUO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)