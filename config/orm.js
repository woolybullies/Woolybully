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

    insertOne: function (table, cols, vals, cb) {
        var dbQuery = "INSERT INTO " +
            table +
            " (" +
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
            console.log(table);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    all: function (table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function (table, objectColVals, condition, cb) {

        console.log(`
        table: ${table}
        object ${objectColVals}
        condition ${condition}`)
        var dbQuery = "UPDATE " +
            table +
            " SET " +
            objToSql(objectColVals) +
            " WHERE " +
            condition;
        console.log(`dbQuery ${dbQuery}`)
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
    },
    allGoals: function (tableOne, tableTwo, table1Col1, table1Col2, table2Col1, table1Col3, table1Col4, table1col5, tableJoin, cb) {
        var dbQuery = `SELECT ${tableOne}.${table1col5} , ${tableOne}.${table1Col1} , ${tableOne}.${table1Col2} , ${tableTwo}.${table2Col1} , ${tableOne}.${table1Col3}, ${tableOne}.${table1Col4}
        FROM ${tableOne}, ${tableTwo}
        WHERE ${tableTwo}.${tableJoin} = ${tableOne}.${tableJoin}
        AND ${table1Col4} = 1
        AND DATE(${table1Col3}) < CURDATE() -1
        `;

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    twiloGoals: function (table, id, cb){
        var dbQuery = `SELECT name FROM ${table} WHERE ${id}`;
        console.log(dbQuery)
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
   
}

module.exports = orm;
