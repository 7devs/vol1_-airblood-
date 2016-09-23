var rtr = require('express').Router()
    albumName = require('../models/albums');

rtr.route('/')
    .get(function(req, res, next){
        res.status(200).send(albumName);
    });

rtr.route('/longerSong')
    .get(function(req, res, next){
        var album = [];
        for(var i=0; i<albumName.length; i++){
            if(albumName[i].length>'180'){
            album.push(albumName[i]);
            };
        };
        res.status(202).send(album);
    });

rtr.route('/singer/:name')
    .get(function(req, res, next){
        var singerName = req.params.name;
        var allName = [];
        for(var i =0; i<albumName.length; i++){
            if(albumName[i].singer===singerName){
                allName.push(albumName[i]);
            };
        };
        if(allName.length >0) {res.status(202).send(allName)
        }else{
            res.status(404).send('data not found');
        };
    });
rtr.route('/search')
    .get(function(req, res, next){
        var album = [];
        for(var i = 0; i<albumName.length; i++){
            if(albumName[i].type === req.query.type){
                album.push(albumName[i]);
            };
        };
        if(album.length>0){
            res.status(202).send(album);
        }else{
            res.status(404).send('data not found')
        };
    });

    rtr.route('/:id')
        .get(function(req, res, next){
            var id = req.params.id;
            if(albumName[id]){
                res.status(200).send(albumName[id]);
            }else{
                res.status(404).send('data not found');
            };
        });

    rtr.route('/:id')
        .put(function(req, res, next){
            var id = req.params.id;
            if(albumName[id]){
                res.status(200).send(albumName[id].length + " " + albumName[id].title);
            }else{
                res.status(404).send('data not found');
            };
        });

    module.exports = rtr;
