var connection = require("../config/config.js");

function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {

            value = connection.escape(value);

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {

    all: function (table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
            console.log(table);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var dbQuery = "INSERT INTO " +
            table +
            "(" +
            cols.toString() +
            ")" +
            "VALUE" +
            "(" +
            vals +
            ")";

        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function (table, objectColVals, condition, cb) {
        var dbQuery = "UPDATE " +
            table +
            " SET " +
            objToSql(objectColVals) +
            " WHERE " +
            condition;

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    deleteOne: function (table, condition, cb) {
        var dbQuery = "DELETE FROM " +
            table +
            " WHERE " +
            condition;
            
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
}

module.exports = orm;
