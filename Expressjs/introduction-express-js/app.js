const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log('middleware chala');
//     next();

// })


app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/porfile', (req, res) => {
    res.send('Porfile page');
});


app.listen(3000, () => {
    console.log('localhost:3000');
});