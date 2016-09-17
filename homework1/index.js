var webapp = require('express')(),
    bodyParser = require('body-parser'),
    tool = require('')

webapp.use(bodyParser.urlencoded({
    extended: false
}));

webapp.use('/api', require('./lib/routers/userapi.js'));

webapp.use('/users', require('./lib/models/user.js'));

webapp.use('/albums', require('./lib/models/albums.js'));

webapp.use('/*', function(req, res, next){
    res.status(404).send('没有这个数据，你想知道的太多了：）')
});

webapp.linten (3000);

/*web.get('/', function(req, res, next){
    res.send('index');
    next();
});

web.get('/test', function(req, res, next){
    res.send('test.')
})

web.post('/test', function(req, res, next){
    res.status(200).send({
        method: 'POST',
        path: req.path,
        body: req.body,
        query: req.query
    });
    next();
});*/
