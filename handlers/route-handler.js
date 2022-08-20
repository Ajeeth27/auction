var express = require('express'),
    router = express.Router();


router
    .get('/', (req, res) => {
        res.send('Hello Auction World!!!');
    })

module.exports = router;