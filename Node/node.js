const express = require('express');
const app = express();
const port = 3002;

const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:wolverin102@localhost:5432/project1'

app.listen(port,() => {
    console.log('My server')
})

app.get('/notes' , (req, res, err) =>{
   // Если у нас есть текст в запросе, то фильтруем, а если нет текста в запросе, то выводим все заметки.
    if (req.query.id) { 
        const client = new Client({
            connectionString:connectionString
        })
        client.connect()
        client.query(`SELECT * FROM notes WHERE id = ${req.query.id}`, (err, data)=>{
            res.send(data.rows)
            client.end()
        })
    } else {
        const client = new Client({
            connectionString:connectionString
        })
        client.connect()
        client.query('SELECT * FROM notes', (err, data)=>{
            res.send(data.rows)
            client.end()
        })
    }
   
})
app.get('/' , (req, res, err) =>{
    res.send('Hello')
})