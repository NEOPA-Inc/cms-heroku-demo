var express = require('express');
var router = express.Router();

const db = require('../../db');

/* GET info. */
router.get('/', function(req, res, next) {

    db.getAll()
        .then(articles => {
            console.log('articles: %o', articles);
            res.json(articles);
        })
        .catch(error => {
            res.status(500).send({});
        });
});

module.exports = router;
