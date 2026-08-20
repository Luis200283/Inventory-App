import { triggerAsyncId } from 'async_hooks';
import express from 'express'
import path from 'path'
import indexRouter from './routes/indexRouter.js'
import newRouter from './routes/newRouter.js';
import { sql } from './db/pool.js';

const app = express()

app.set('views', path.join(import.meta.dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use('/', indexRouter);
app.use('/new', newRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`listen app on port: ${PORT}`)
});