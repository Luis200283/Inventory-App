import { Router } from "express";
const newRouter = Router();

newRouter.get('/', (req, res)=>{
    res.send('Hola lola')
})

export default newRouter