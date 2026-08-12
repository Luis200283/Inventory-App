import { getAllProducts } from '../db/queries.js'

export const indexController = async (req, res) => {
    const products = await getAllProducts()
    res.render('index', { products: products })
}