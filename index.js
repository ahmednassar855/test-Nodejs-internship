import express from 'express'
import { dbConnection } from './dbConnection/dbConnection.js';
import homRouter from './router/home.router.js';

import * as dotenv from 'dotenv'
import path from 'path'
const app = express()
const port = 3030

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(express.static('public'))

app.use(homRouter)

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve() , 'views/index.html'))
})

dbConnection()




app.listen(port, () => console.log(`Example app listening on port ${port}!`))