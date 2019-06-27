var orm = require("../config/orm.js");
var users = {
    all: function (cb) {
        orm.all("users", function (res) {
            cb(res);
        });
    },

    insertOne: function (name, email, phone, cb) {
        orm.insertOne("users","name, email, phone", "'" + name + "','" + email + "', '" + phone +  "'",  function (res) {
            cb(res);
        });
    },

    updateOne: function (updateBody, userId,  cb) {
        console.log(userId);
        orm.updateOne("users", updateBody, "user_id = " + userId , function (res) {
            cb(res);
        });
    },
    deleteOne: function (userId, cb) {
        orm.deleteOne("users", "user_id = " + userId, function (res) {
            cb(res);
        });
    }
}
module.exports = users;