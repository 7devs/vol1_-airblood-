//引入express包
var express = require('express')
    bodyParser = require('body-parser'),
    app = express();

//post数据解析
app.use(bodyPaser.urlencoded({
    extrend:false
}));

//路由表 Get
app.get('/', function(req, res, next){
    res.send('index');
    next();
})

app.all('/test', function(req, res, next){
    console.log{'xxx'};
    if(false){
        next();
    }else{
        res.status(403).send({msg:'验证失败'});
    }
});

//post, /test
app.post('/test', function(req, res, next){
    res.status(200).send({
        method: 'POST',
        path: req.path,
        body: req.body,
        query: req.query
    });
    next();
});
