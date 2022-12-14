import mysql from 'mysql2/promise'

export default function handler(req, res) {

    const dbconnection = mysql.createConnection({

        host: 'localhost',
        database: 'tweets',
        user: 'root',
        password: 'password',
    
    })
    
    try {
        
        const accounts = "SELECT username useremail userphone userpassword FROM accounts"
        const tweets = "SELECT tweet, userid, userpfp, username FROM tweets"    
        const value = []

    } catch (error) { res.status(500).json({ error: error.message }) }

    res.status(200).json({name: 'persons name'})
}