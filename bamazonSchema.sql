CREATE DATABASE bamazon;
USE bamazon;  

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(250),
    depart_name VARCHAR(250),
    price DECIMAL,
    stock_quanity INTEGER,
    PRIMARY KEY(id)
)