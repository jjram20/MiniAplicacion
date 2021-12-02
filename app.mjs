import express from 'express';

const app = express();

app.use('/', (req, res) => {
    res.send('<h1>Hola mundo</h1>');
});

app.listen(3000, () => {
    console.log('Aplicación en el puerto 3000');
});