import { param, query } from 'express-validator'
import { getAllProducts, getFilteresData } from '../db/queries.js'

export const indexController = async (req, res) => {
    const products = await getAllProducts()
    res.render('index', { products: products })
}

export const queryController = async (req, res) => {
    const query =  req.params
    console.log(req)
    const result = await getFilteresData();
    res.render('index', {products: result})
}