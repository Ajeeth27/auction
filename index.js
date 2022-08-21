const express = require('express');
const app = express();
let routes = require('./routes');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})

app.post('/', (req, res) => {
    res.send(req.body);
})

app.use('/auction', routes);
app.listen(3000, () => console.log('listening on the port 3000...'));
