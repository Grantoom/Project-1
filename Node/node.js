const express = require('express');
const app = express();
const port = 3002;

const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:wolverin102@localhost:5432/porject1'

app.listen(port,() => {
    console.log('My server')
})

app.get('/notes' , (req, res, err) =>{
    const client = new Client({
        connectionString:connectionString
    })
    client.connect()
    client.query('SELECT * FROM notes', (err, data)=>{
        res.send(data.rows)
        client.end()
    })
})
app.get('/' , (req, res, err) =>{
    res.send('Hello')
})