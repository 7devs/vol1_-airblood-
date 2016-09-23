var rtr = require('express').Router()
    userName = require('../models/users');

rtr.route('/')
    .get(function(req, res, next){
        res.status(200).send(userName);
        //console.log('Here are all users:', userName)
    });

rtr.route('/count/:sex')
    .get(function(req, res, next){
        var Sex =req.params.sex;
        var count = 0;
        for (var i = 0; i < userName.length; i++){
            if(userName[i].sex === Sex ){
                count++
            };
        };
        console.log(count)
        res.status(200).send(count.toString()); //坑，要加上toString
    });

rtr.route('/ageAvg')
    .get(function(req, res, next){
        var sum = 0;
        for (var i =0; i < userName.length; i++){
            var sum = userName[i].age +sum;
        }
        var ageAvg = sum/(userName.length);
        res.status(200).send('Average age is' + ' ' + ageAvg.toString());
    });

rtr.route('/search')
    .get(function(req, res, next){
        var com = [];
        for(i=0; i<userName.length; i++){
            if(userName[i].company.toLowerCase() === res.query.company.toLowerCase()){
                com.push(userName[i]);
            };
        };
        if(com.length>0){
            res.status(202).send(com);
        }else{
            res.status(404).send('data not found')
        };

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

    module.exports = rtr;
