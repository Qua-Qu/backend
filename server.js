import express from "express"
import mysql from "mysql2"
const app = express()
const port = 3000

app.use(express.json());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Enderman,123,",
    database : "samshan"
})

app.get('/', (req, res) => res.json('Hello World!'))

app.get('/user', (req, res) => {
    const q = "SELECT * FROM user"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))