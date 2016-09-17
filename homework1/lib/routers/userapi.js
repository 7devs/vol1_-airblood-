var rtr = require('express').Router()
    userName = require('../models/users');

rtr.route('/user')
    .get(function(req, res, next){
        req.status(200).send(userName);
        //console.log('Here are all users:', userName)
    });

rtr.route('/user/:id')
    .get(function(req, res, next){
        var name = req.params.id;
        if(userNmae[name]){
            req.status(200).send(userName[name].firstName, userName[name].lastName);
            //console.log("User's name is", userName[name].firstName, userName[name].lastName)
    }else{
            req.status(404).send('Not Found')
            //console.log('Not Found')
    });

rtr.route('/user/:age')
    .put(function(req, res, next){
        var ageCheck = req.parms.age;
        if(userName[ageCheck]){
            if(typeof userName[ageCheck] !=== 'number'){
                req.status(404).send(userName[ageCheck], 'is not a number')
            }else{
                req.status(200).send(userName[ageCheck], 'is a number');
            };
        }else{
            req.status(404).send('Not Found')
        };
    });

/*rtr.routes('/user/count/:sex')
    .get(function(req, res, next){
        var Sex =req.params.sex;
        for (var i = 0; i < userName.length; i++){
            if(userName[Sex]==='male')
        }
        if(userName[Sex]){
            req.status(200).send()
        }
    })*/

    module.exports = rtr;
