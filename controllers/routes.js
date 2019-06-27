var express = require("express");

var router = express.Router();

var users = require("../models/users");
var categories = require("../models/categories");

//user routes 

router.get("/api/users", function (request, res) {
    users.all(function (data) {

        var hbsObject = {
            test: data
        };
        console.log(hbsObject);
        res.json(data);
    });
});

router.put("/api/users/:userId", function (req, res) {
    users.updateOne(req.body, req.params.userId,  function (data) {
        var hbsObject = {
            test: data
        };
        console.log(hbsObject);
        res.json(data);
    });
});

router.post("/api/users", function (req, res) {
    console.log(req.body)
    users.insertOne(req.body.name, req.body.email, req.body.phone,  function (data) {

        res.json(data);
    });
    res.json({test:true});
});

router.delete("/api/users/:userId", function (req, res) {
    users.deleteOne(req.params.userId, function (data) {

        var hbsObject = {
            test: data
        };
        console.log(hbsObject);
        res.json(data);
    });
});

//categories routes go here 

router.get("/api/categories", function (request, res) {
    categories.all(function (data) {

        var hbsObject = {
            test: data
        };
        console.log(hbsObject);
        res.json(data);
    });
});

router.post("/api/categories", function (req, res) {
    console.log(req.body);
    categories.insertOne(req.body['category_name'], req.body.category_type, function (data) {

        var hbsObject = {
            test: data
        };
        console.log(hbsObject);
        res.json(data);
    });
});



module.exports = router;



// router.post("/api/users", function (req, res) {
//     users.insertOne([
//         "name", "email", "permission", "aaa_id"
//     ], [
//             req.body.name, req.body.email, req.body.permission, req.body.aaa_id
//         ], function (result) {
//             // Send back the ID of the new quote
//             res.json({ user_id: result.insertId });
//         });
// });
