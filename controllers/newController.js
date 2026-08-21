import { addProduct, getProduct, updateProduct, deleteProduct } from "../db/queries.js"
import { upload } from "../middlewares/upload.js"

export const newProductGet = async (req, res) => {
    res.render('newProduct')
}

export const uploadProductImg = upload.single('productImg');

export const newProductPost = async (req, res) => {
    try {
        const { product, color, brand, price, description, tag } = req.body;
        const imgPath = req.file ? `/resources/${req.file.filename}` : null;
        await addProduct({ product, color, brand, price, description, tag, imgPath });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar el producto');
    }
}

export const productUptdateGet = async (req, res) => {
    const products = await getProduct(req.params.id)
    const product = products[0]
    if (!product) {
        res.status(404).send("El elemento no pudo ser encontrado")
    }
    console.log(product)
    res.render('update', { product: product })
}

export const productUptdatePut = async (req, res) => {
    try {
        const id = req.params.id
        const { product, color, brand, price, description, tag, imgPath } = req.body;
        const finalImgPath = req.file ? `/resources/${req.file.filename}` : imgPath;
        await updateProduct({ id, product, color, brand, price, description, tag, imgPath: finalImgPath });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar el producto');
    }
}

export const productDelete = async (req, res) => {
    const id = req.params.id
    await deleteProduct(id)
    res.redirect('/')
}
