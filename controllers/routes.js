var express = require("express");

var router = express.Router();

var users = require("../models/users");
var categories = require("../models/categories");
var goal_config = require("../models/goal_config");

//user routes 

router.get("/api/users", function (request, res) {
    users.all(function (data) {
        res.json(data);
    });
});

router.put("/api/users/:userId", function (req, res) {
    users.updateOne(req.body, req.params.userId,  function (data) {
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
        res.json(data);
    });
});

//goals routes 

router.get("/api/goals", function (request, res) {
    goal_config.all(function (data) {
        res.json(data);
    });
});

router.post("/api/goals", function (req, res) {
    console.log(req.body)
    goal_config.insertOne(req.body.user_id, req.body.name, req.body.category_id, req.body.daily_occurance, req.body.importance, req.body.day_start, req.body.day_end, req.body.allow_wake, req.body.status,  function (data) {

        res.json(data);
    });
});

router.put("/api/goals/:id", function (req, res) {
    goal_config.updateOne(req.body, req.params.id,  function (data) {
        res.json(data);
    });
});

router.delete("/api/goals/:id", function (req, res) {
    goal_config.deleteOne(req.params.id, function (data) {
        res.json(data);
    });
});



// //categories routes go here 

// router.get("/api/categories", function (request, res) {
//     categories.all(function (data) {

//         var hbsObject = {
//             test: data
//         };
//         console.log(hbsObject);
//         res.json(data);
//     });
// });

// router.post("/api/categories", function (req, res) {
//     console.log(req.body);
//     categories.insertOne(req.body['category_name'], req.body.category_type, function (data) {

//         var hbsObject = {
//             test: data
//         };
//         console.log(hbsObject);
//         res.json(data);
//     });
// });



module.exports = router;




