var express = require("express");

var router = express.Router();

var wooly = require("../models/wooly.js");

router.get("/" , function(request, response){
    wooly.all(function(data){

        //connect to front end here
        console.log(data, request, response);
    })
})