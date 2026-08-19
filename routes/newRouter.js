import { Router } from "express";
import { newProductGet, newProductPost} from '../controllers/newController.js'
const newRouter = Router();

newRouter.get('/', newProductGet);
newRouter.post('/', newProductPost);

export default newRouter