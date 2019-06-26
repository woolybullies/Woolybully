// var orm = require("../config/orm.js");

// //connect to bullies table

// var bullies = {
//     all: function (cb) {
//         orm.all("users", function (res) {
//             cb(res);
//         });
//     },

//     insertOne: function (cb) {
//         orm.insertOne("users", function (res) {
//             cb(res);
//         });
//     },

//     selectOne: function (cols, vals, cb) {
//         orm.selectOne("users", cols, vals, function (res) {
//             cb(res);
//         });
//     },

//     update: function (objColVals, condition, cb) {
//         orm.update("users", objColVals, condition, function (res) {
//             cb(res);
//         });
//     },
//     delete: function (condition, cb) {
//         orm.delete("users", condition, function (res) {
//             cb(res);
//         });
//     }
// }
// module.exports = bullies;