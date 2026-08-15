import { Router } from "express";
import { indexController, queryController } from '../controllers/indexController.js'
const indexRouter = Router();

indexRouter.get('/', indexController);
indexRouter.get('/filter', queryController)

export default indexRouter