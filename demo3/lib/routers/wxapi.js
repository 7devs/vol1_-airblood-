var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .get(function(req, res, next){
        res.send('hahaha');
    });

    module.exports = router;
