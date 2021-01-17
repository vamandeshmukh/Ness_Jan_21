import express from 'express';
import fs from 'fs';
const app = express();
const port = 3333;

app.get('/', (req, res) => {
    console.log('get called');
    res.send('base data');
});

app.get('/home', (req, res) => {
    console.log('home called');
    res.send('home data');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});