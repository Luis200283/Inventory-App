import { addProduct } from "../db/queries.js"

export const newProductGet = async (req, res) => {
    res.render('newProduct')
}

export const newProductPost = async (req, res) => {
    addProduct(req.body, req.file)
    res.redirect('/')
}

