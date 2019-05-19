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

SELECT * FROM products;
INSERT INTO products (product_name, depart_name,  price, stock_quantity)
VALUES  ( "Marvel’s Spider-Man - PlayStation 4  ","Video Games", 9.99, 50),
        ( "OPTIMUM NUTRITION GOLD STANDARD 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound  ","Health & Household ", 55.00, 50),
        (" BeatsX Earphones - Black","Electronics",  100, 100),
        ("APC 11-Outlet Surge Protector Power Strip with USB Charging Ports","Electronics",  30.00, 10),
        ( " Google Chromecast (3rd Generation)","Electronics", 35.00, 50),
        ( " Adidas Squeeze 750ML Plastic Water Bottle (28oz) ","Sports & Outdoors", 10.00, 50),
        ("TR Industrial TR88302 Multi-Purpose Cable Tie (100 Piece), 8  ","Accessories & Supplies",  7.00, 50),
        ( "  American Crew Forming Cream, 3 Ounce (Pack of 4)","Beauty & Personal Care", 38.00, 50),
        ( " Batman: Hush  ","Books", 17.00, 50),
        ( "Tent", "Outdoors", 39.99,  10);

