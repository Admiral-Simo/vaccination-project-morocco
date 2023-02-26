const data = require('./data.json');
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send(data)
})


app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
})