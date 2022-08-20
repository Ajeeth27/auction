const express = require('express');
const app = express();
var testRoutes = require('./handlers/route-handler');

// app.get('/', (req, res) => {
//     res.send('Hello World!!!');
// })

app.use('/auction', testRoutes);
app.listen(3000, () => console.log('listening on the port 3000...'));
