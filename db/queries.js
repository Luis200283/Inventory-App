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

export async function addProduct(productFears, productImg) {
    console.log(productFears)
}