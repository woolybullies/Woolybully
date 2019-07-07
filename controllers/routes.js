var express = require("express");

var router = express.Router();

var users = require("../models/users");
var goal_config = require("../models/goal_config");

const VoiceResponse = require('twilio').twiml.VoiceResponse;

//******* USER ROUTES **********


//CREATE User
router.post("/api/users", function (req, res) {
    console.log(req.body)
    users.insertOne(req.body.name, req.body.email, req.body.phone, function (data) {
        // res.json(data);
    });
    res.json({ test: true });
});

//UPDATE USER
router.put("/api/users/:userId", function (req, res) {
    users.updateOne(req.body, req.params.userId, function (data) {
        res.json(data);
    });
});


//DELETE USER
router.delete("/api/users/:userId", function (req, res) {
    users.deleteOne(req.params.userId, function (data) {
        res.json(data);
    });
});

//******* GOAL ROUTES **********

//ADD GOAL
router.post("/api/goals", function (req, res) {
    console.log(req.body)
    goal_config.insertOne(req.body.user_id, req.body.name, req.body.category_id, req.body.daily_occurance, req.body.allow_wake, req.body.status, function (data) {
        res.json(data);
    });
  
});


router.get("/api/goals", function (request, res) {
    goal_config.all(function (data) {
        res.json(data);
    });
});

//UPDATE GOAL
router.put("/api/goals/:id", function (req, res) {
    goal_config.updateOne(req.body, req.params.id, function (data) {
        res.json(data);
    });
});

//DELETE GOAL
router.delete("/api/goals/:id", function (req, res) {
    goal_config.deleteOne(req.params.id, function (data) {
        res.json(data);
    });
});

//******* TWILIO CALL ROUTES **********
router.get('/api/twiml/:id', (req, res) => {
    console.log(req.params.id)
    goal_config.twilioGoals(req.params.id, function (data) {
        // res.json(data)
        const twiml = new VoiceResponse();
        twiml.say(`Don't forget, you need to ${data[0].name}`);
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
    });
});

router.post('/api/twiml/:id', (req, res) => {

    console.log(req.params.id)
    goal_config.twilioGoals(req.params.id, function (data) {

        const twiml = new VoiceResponse();
        twiml.say(`Don't forget, you need to ${data[0].name}`);
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
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

// router.get("/api/goals", function (request, res) {
//     goal_config.allGoals(function (data) {
//         res.json(data);

//     });
// });



module.exports = router





