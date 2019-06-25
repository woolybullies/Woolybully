var connection = require("../config/config.js");

function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        var value = obj[key];
    }
    if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
    }
    return arr.toString();
}


var orm = {
  
    insertOne: function(table, cols, vals, cb){
        var dbQuery = "INSERT INTO" + 
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
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

    all: function(table, cb){
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, objectColVals, condition, cb){
        var dbQuery = "UPDATE" +
            table +
            "SET" +
            objToSql(objectColVals) +
            "WHERE" +
            condition;

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    deleteOne: function(table, condition, cb){
        var dbQuery = "DELETE FROM" +
        table + 
        "WHERE" +
        condition;

        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
}

module.exports = orm;
