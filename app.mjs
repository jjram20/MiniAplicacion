import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/person/:user', (req, res) => {
    res.send('Greetings ' + req.params.user);
});

app.post('/json/:message', async (req, res) => {
    let message = req.params.message;
    console.log(req.body);
    let jsonfilename = 'storage/database2.json';
    let jsoncontent = JSON.parse(await readFile(jsonfilename, 'utf8'));
    res.json(jsoncontent[message]);
});

app.patch('/modificationGreeting/:greeting', async (req, res) => {
    let newgreeting = req.params.greeting;
    console.log(req.body);
    let jsonfilename = 'storage/database2.json';
    let jsoncontent = JSON.parse(await readFile(jsonfilename, 'utf8'));
    jsoncontent['greeting'] = newgreeting;
    await writeFile('storage/database2.json', JSON.stringify(jsoncontent, null, 4));
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Aplicación en el puerto 3000');
});