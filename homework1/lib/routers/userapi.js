var rtr = require('express').Router()
    userName = require('../models/users');

rtr.route('/')
    .get(function(req, res, next){
        res.status(200).send(userName);
        //console.log('Here are all users:', userName)
    });

rtr.route('/:id')
    .get(function(req, res, next){
        var id = req.params.id;
        if(userName[id]){
            res.status(200).send(userName[id].firstName + ' ' + userName[id].lastName);
            //console.log("User's name is", userName[id].firstName + ' ' + userName[id].lastName)
    }else{
            res.status(404).send('Not Found')
            //console.log('Not Found')
    }});

rtr.route('/:id')
    .put(function(req, res, next){
        var id = req.params.id;
        if(userName[id]){
            if(typeof(userName[id].age) !== 'number'){
                res.status(404).send('age type of' + '' + userName[id] + '' + 'is not a number')
            }else{
                userName[id].age=req.body.age;
                res.status(200).send(userName[id] + '' + 'is a number');
            };
        }else{
            res.status(404).send('Not Found')
        };
    });

rtr.route('/count/:sex')
    .get(function(req, res, next){
        var Sex =req.params.sex;
        var count = 0;
        for (var i = 0; i < userName.length; i++){
            if(userName[i].sex === Sex )
            count++;
        };
    });

rtr.route('/ageAvg')
    .get(function(req, res, next){
        var sum = 0;
        for (var i =0; i < userName.length; i++){
            var sum = userName[i].age +sum;
        }
        var avg = sum/userName.length;
        res.status(202).send('Average age is' + ' ' + avg);
    });



    module.exports = rtr;
