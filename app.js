import { triggerAsyncId } from 'async_hooks';
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './routes/indexRouter.js'
import { sql } from './db/pool.js';

const app = express()

app.set('views', path.join(import.meta.dirname, "views"));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use('/', indexRouter)
app.get("/db", async (req, res) => {
    const result = await sql`SELECT version()`;
    const { version } = result[0];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(version);
})

const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`listen app on port: ${PORT}`)
})