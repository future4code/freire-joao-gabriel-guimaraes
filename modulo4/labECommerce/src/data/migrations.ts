import { connection } from "./connection";

const printError = (error: any) => { console.log(error.sqlmessage || error.message) }

const createTables = () => 
    connection.raw(`
    CREATE TABLE IF NOT EXISTS labecommerce_users(
        id_user VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS labecommerce_products(
        id_product VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        image_url VARCHAR(255) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS labecommerce_purchases(
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255),
        product_id VARCHAR(255),
        quantity INT NOT NULL,
        total_price FLOAT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES labecommerce_users(id_user),
        FOREIGN KEY (product_id) REFERENCES labecommerce_products(id_product)
    );`
    )
    .then(() => { console.log("Tabela criada!")})
    .catch(printError)

    const closeConnection = () => {connection.destroy()}
    createTables()
    .then(() => {console.log("banco pronto!")})
    .finally(closeConnection)
