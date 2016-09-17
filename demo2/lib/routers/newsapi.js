var router = require('express').Router()
    userModel = require('../models/news.js')
    tool = require('../newtool.js')

router.route('/')
    .get(function(req, res, next){
        res.status(200).send(userModel)
    });

router.route('/:id')
    .get(function(req, res, next){
        var id =req.params.id-1;
        if(userModel[id]){
            res.status(200).send(userModel[id]);
            console.log('前端显示了', userModel[id])
            tool.printLine()
        }else{
            res.status(404).send('data not exist');
            console.log('data not exist');
            tool.printLine()
        }
    });

router.route('/:id')
    .delete(function(req, res, next){
        var id = req.params.id-1;
        if(userModel[id]){
            userModel.splice(id, 1);
            res.status(200).end();
            console.log('remaining data is', userModel);
        }else{
            res.status(404).send('data not exist');
            console.log('data not exist')
        }
    });

module.exports = router;
