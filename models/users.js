var orm = require("../config/orm.js");


var users = {
    all: function (cb) {
        orm.all("users", function (res) {
            cb(res);
        });
    },

    insertOne: function (user_id, name, email, phone, password, cb) {
        orm.insertOne("users","user_id, name, email, phone", "'" + user_id + "','" + name + "','" + email + "', '" + phone +  "', '" + password +  "'",  function (res) {
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