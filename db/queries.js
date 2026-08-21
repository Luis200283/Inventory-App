import { sql } from "./pool.js";

export async function getAllProducts() {
    return await sql`SELECT * FROM products`
}

export async function getFilteresData(query) {
    const { Sort, Instrument, Brands } = query;

    const instruments = Instrument ? (Array.isArray(Instrument) ? Instrument : [Instrument]) : [];
    const brands = Brands ? (Array.isArray(Brands) ? Brands : [Brands]) : [];

    const hasInstruments = instruments.length > 0;
    const hasBrands = brands.length > 0;
    const sortDirection = Sort?.toLowerCase() === 'desc' ? 'DESC' : 'ASC';

    return await sql`
        SELECT * FROM products 
        WHERE (${!hasInstruments} OR tag = ANY(${instruments}))
          AND (${!hasBrands} OR brand = ANY(${brands}))
        ORDER BY price ${sql.unsafe(Sort)}
    `;
}

export async function addProduct({ product, color, brand, price, description, tag, imgPath }) {
    return await sql`
        INSERT INTO products (product_name, color, brand, price, description, tag, "imgPath")
        VALUES (${product}, ${color}, ${brand}, ${price}, ${description}, ${tag}, ${imgPath})
        RETURNING *
    `;
}

export async function getProduct(id) {
    return await sql`SELECT * FROM products WHERE id = ${id}`
}

export async function updateProduct({ id, product, color, brand, price, description, tag, imgPath }) {
    return await sql` UPDATE products 
        SET product_name = ${product},
        color = ${color},
        brand = ${brand}, 
        price = ${price},
        description = ${description}, 
        tag = ${tag}, 
        "imgPath" = ${imgPath}
        WHERE id = ${id};
    `;
}

export async function deleteProduct(id) {
    return await sql`DELETE FROM products WHERE id = ${id}`
}