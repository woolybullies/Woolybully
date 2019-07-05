var orm = require("../config/orm.js");


var goal_config = {
    
    all: function (cb) {
        orm.all("goals", function (res) {
            cb(res);
        });
    },

    insertOne: function (user_id, name, category_id, daily_occurance, allow_wake, status,cb) {

        orm.insertOne("goals", "user_id, name, category_id, daily_occurance, allow_wake, status", "'" +  user_id + "','" + name + "','" + category_id + "','" + daily_occurance + "','" + allow_wake + "','" + status + "'",  function (res) {
            cb(res);
        });
    },

    updateOne: function (updateGoal, id, cb) {
        orm.updateOne("goals", updateGoal, "id =" + id, function (res) {
            cb(res);
        });
    },
    deleteOne: function (id, cb) {
        orm.deleteOne("goals", "id =" + id, function (res) {
            cb(res);
        });
    },
    allGoals: function (cb) {
        orm.allGoals("goals", "users", "name", "daily_occurance", "phone", "last_fired", "status", "id", "user_id", function (res) {
            cb(res);
            // console.log(res)
        });
    },
   twilioGoals : function (id, cb) {
        orm.twiloGoals("goals", "id =" + id,  function (res) {
            cb(res);
        });
    },
   
    

}
module.exports = goal_config;