
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'first_database'
})


export default pool;