import { sql } from "./pool.js";

export async function getAllUsers() {
    return await sql`SELECT * FROM products`
}

export async function getUser(query) {
    return await sql`SELECT * FROM products WHERE username LIKE '${query}%'`
}

export async function postProduct(product) {
    await sql`INSERT INTO products (username, message) 
    VALUES (${product.username}, ${product.message})`;
}

export async function putProduct(product, id) {
    await sql`UPDATE products 
    SET username = ${product.name}, 
    message = ${product.message} 
    WHERE id = ${id}
    RETURNING *;`
}

export async function deleteMessageInDB(id) {
    await sql`DELETE FROM products WHERE id = ${id}`
}