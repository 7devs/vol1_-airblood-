var webapp = require('express')();
    bodyParser = require('body-parser');
    //tool = require('')

webapp.use(bodyParser.urlencoded({
    extended: false
}));

webapp.use('/user', require('./lib/routers/userapi'));
webapp.use('/album', require('./lib/routers/albumapi'));

webapp.use('/*', function(req, res, next){
    res.status(404).send('没有这个数据，你想知道的太多了：）');
});

webapp.listen(3000);
