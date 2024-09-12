import express from 'express';

const app = express();

app.listen(5001, () => console.log('Listening on port 3000'));

app.get('/', (req, res) => res.send('Hello World My API running !'));

app.get('/test', (req, res) => res.send('Yes it is fine, my API running well test perfect!'));