import { Router } from "express";
import { newProductGet, newProductPost, updateProductGet, updateProductPost } from '../controllers/newController.js'
const newRouter = Router();

newRouter.get('/', newProductGet);
newRouter.post('/', newProductPost);
newRouter.get('/update', updateProductGet);
newRouter.post('/update', updateProductPost);

export default newRouter