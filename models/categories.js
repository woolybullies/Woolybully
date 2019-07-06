// var orm = require("../config/orm.js");


// var categories = {
//     all: function (cb) {
//         orm.all("categories", function (res) {
//             cb(res);
//         });
//     },

//     insertOne: function (category_name, category_type, cb) {
//         orm.insertOne("categories", "category_name, category_type", "'"+ category_name +"', '"+ category_type +"'" , function (res) {
//             cb(res);
//         });
//     },

//     updateOne: function (objColVals, condition, cb) {
//         orm.update("categories", objColVals, condition, function (res) {
//             cb(res);
//         });
//     },

//     deleteOne: function (condition, cb) {
//         orm.delete("categories", condition, function (res) {
//             cb(res);
//         });
//     }
    
// }
// module.exports = categories;