import mysql from "mysql2"

export const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Enderman,123,',
    database : 'samshan'
})

export default db;