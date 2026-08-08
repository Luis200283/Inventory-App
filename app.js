import { triggerAsyncId } from 'async_hooks';
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './routes/indexRouter.js'

const app = express()

app.set('views', './views');
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use('/', indexRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`listen app on port: ${PORT}`)
})