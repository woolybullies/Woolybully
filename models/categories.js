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
        orm.selectOne("categories", cols, vals, function (res) {
            cb(res);
        });
    },
}
module.exports = categories;