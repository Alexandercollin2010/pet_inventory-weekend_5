var express = require('express');
var indexrouter = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var Pet =  require('../models/schema.js' );


indexrouter.get('/', function(req, res){
    console.log('Base URL hit!!');
    Pet.find({}, function(err, petResults) {
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log('pets: ' + petResults);
          res.sendFile(path.resolve('public/views/index.html'));
        }
      });
    });

module.exports= indexrouter ;
