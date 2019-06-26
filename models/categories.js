var orm = require("../config/orm.js");


var categories = {
    all: function (cb) {
        orm.all("categories", function (res) {
            cb(res);
        });
    },

    insertOne: function (category_name, category_type, cb) {
        orm.insertOne("categories", "category_name, category_type", "'"+ category_name +"', '"+ category_type +"'" , function (res) {
            cb(res);
        });
    },

    selectOne: function (cols, vals, cb) {
        orm.selectOne("users", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("users", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("users", condition, function (res) {
            cb(res);
        });
    }
}
module.exports = categories;