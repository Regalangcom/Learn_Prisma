SELECT *
FROM `indentitas`
    -- NATURAL LANGUAGE MODE
    -- GUNAKAN MATCH FUNCTION

SELECT *
FROM products
WHERE
    MATCH(name_product) AGAINST (
        'SABUN'
        WITH
            QUERY EXPANSION
    )

CREATE TABLE indentitas (
    id INT NOT NULL AUTO_INCREMENT,
    name_warga VARCHAR(10) NOT NULL,
    alamat VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

SELECT * FROM comments

INSERT INTO
    comments (
        customer_id,
        title,
        description
    )
VALUES (
        'muhammad10',
        'Comments',
        'Sample Comments 1'
    ),
    (
        'muhammad14',
        'Commentss',
        'Sample Comments 2'
    ),
    (
        'muhammad5',
        'Comment90',
        'Sample Comments 3'
    ),
    (
        'gofur15',
        'Comment1',
        'Sample Comments 4'
    );

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) ENGINE = INNODB;

SELECT * FROM customers

CREATE TABLE products (
    id           VARCHAR(10) NOT NULL,
    name_product VARCHAR(10) NOT NULL,
    price INT                NOT NULL,
    stock INT                NOT NULL,
    category     VARCHAR(10) NOT NULL,
    -- Created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    PRIMARY KEY(id)
    -- added FULL TEXT SEARCH
    -- FULLTEXT product_search(name_product) 


)ENGINE = InnoDB;

SELECT * FROM likes;

CREATE TABLE likes (
    customer_id VARCHAR(100) NOT NULL,
    products_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (customer_id, products_id),
    CONSTRAINT likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT likes_products_id_fk FOREIGN KEY (products_id) REFERENCES products (id)
) ENGINE INNODB;
-- uses method LIKE QUERY

-- create table loves , uses fitur prisma IMPLICIT
CREATE TABLE _loves (
    A VARCHAR(100) NOT NULL,
    B VARCHAR(100) NOT NULL,
    PRIMARY KEY (A, B),
    CONSTRAINT likes_customers_id FOREIGN KEY (A) REFERENCES customers (id),
    CONSTRAINT likes_products_id FOREIGN KEY (B) REFERENCES products (id)
) ENGINE INNODB;

SELECT * from products WHERE name_product LIKE '%R'

SELECT * from products

ALTER TABLE products
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE products ADD FULLTEXT product_search (name_product)

AFTER TABLE product DROP INDEX product_search

INSERT INTO
    `products` (
        id,
        `name_product`,
        `price`,
        `stock`,
        `category`
    )
VALUES (
        'P009',
        'KAPALAPI',
        '10',
        "9000",
        "KOPI "
    ),
    (
        'P0010',
        'NIKE_R',
        '10',
        "900000",
        "NIKE "
    ),
    (
        'P0011',
        'NIKE_TU',
        '10',
        "76000",
        "ADIDAS"
    ),
    (
        'P0012',
        'NIKEONE',
        '10',
        "90000",
        "NIKE "
    ),
    (
        'P0013',
        'NIKE_L',
        '10',
        "1000",
        "NIKE "
    ),
    (
        'P0014',
        'NIKE_P',
        '10',
        "1000",
        "NIKE "
    ),
    (
        'P00815',
        'NIKE_U',
        '10',
        "1000",
        "NIKE "
    ),
    (
        'P00816',
        'NIKE_M',
        '10',
        "1000",
        "NIKE "
    )

CREATE DATABASE Prisma_Migrate;

USE Prisma_Migrate;

SHOW TABLES;

DESC _loves;