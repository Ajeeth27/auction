const express = require('express'),
    router = express.Router(),
    routeHandler = require('./handlers/route-handler');

router
    .get('/', (req, res) => {
        res.send('Hello Auction World!!!');
    })

router.
    post('/sport', async (req, res) => {
        let result = await routeHandler.addSport(req, res);
        res.send(result);
    })

router
    .get('/sport/:name', async (req, res) => {
        let result = await routeHandler.getSportByName(req, res);
        res.send(result);
    })


module.exports = router;