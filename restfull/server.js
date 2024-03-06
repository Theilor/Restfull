console.log('Server UP');

const express = require('express');
const app = express();

port = 3001;

app.get('/', (req, res) => {
    res.send('Requisição get')
});

app.listen(port, () => {})