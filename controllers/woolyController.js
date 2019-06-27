var express = require("express");

var router = express.Router();

var bully = require("../models/bully");

router.get("/api/users" , function(request, res){
    bully.all(function(data){
    
            var hbsObject = {
              test: data
            };
            console.log(hbsObject);
            res.json(data);
          });
        });
// router.post("/api/users", function(req, res) {
//     bully.create([
//       "name", "email", "permission", "aaa_id"
//     ], [
//       req.body.name, req.body.email, req.body.permission, req.body.aaa_id
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ user_id: result.insertId });
//     });
//   });

module.exports = router;