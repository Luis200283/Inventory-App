export const newProductGet = async (req, res) => {
    res.render('newProduct')
}

export const newProductPost = async (req, res) => {
    res.send('hello post')
}

export const updateProductGet = async (req, res) => {
    res.send('hello update')
}

export const updateProductPost = async (req, res) => {
    res.send('hello update')
}