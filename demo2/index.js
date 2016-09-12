var express = require('express')
    bodyParser = require('body-parser')
    newapp = express();
    tool = require('./lib/newtool.js')

newapp.use(bodyParser.urlencoded({
    extended:false
}));

newapp.use('/', require('./lib/routers/newsapi'))

newapp.use('/*', function(req, res, send){
    res.status(404).send('data does not exist')
});

newapp.listen (3000, function(){
    tool.printLine();
    tool.printDate();
    tool.printLine();
    console.log('homework demo');
    tool.printLine();
});
