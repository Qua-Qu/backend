import express from "express"
import mysql from "mysql2"
const app = express()
const port = 9090

app.use(express.json());

app.get('/', (req, res) => res.json('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))