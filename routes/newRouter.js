import { Router } from "express";
import { newProductGet, newProductPost, productDelete, productUptdateGet, productUptdatePut, uploadProductImg } from '../controllers/newController.js'
const newRouter = Router();

newRouter.get('/', newProductGet);
newRouter.post('/', uploadProductImg, newProductPost);
newRouter.get('/update/:id', productUptdateGet);
newRouter.post('/update/:id', uploadProductImg, productUptdatePut);
newRouter.delete('/delete/:id', productDelete);


export default newRouter