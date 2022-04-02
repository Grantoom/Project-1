const express = require ('express');

const app = express();

const port = 3002;

app.listen(port, () => {
    console.log("My server")
})

app.get('/',  (req, res, error) =>{
    res.send('provet')
}) 