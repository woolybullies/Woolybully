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

//ADD NEW
    insertOne: function (table, cols, vals, cb) {
        var dbQuery = `INSERT INTO ${table} (${cols.toString()}) VALUE (${vals});`;
        
        // "INSERT INTO " +
        //     table +
        //     " (" +
        //     cols.toString() +
        //     ")" +
        //     "VALUE" +
        //     "(" +
        //     vals +
        //     ")";

        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {

            if(err){
                console.log('Alert duplicate entry', err)
            } else {
             console.log('No error in the query')
            }

            cb(res);
            console.log(res)
        });
    },

//GET ALL
    all: function (table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

// USER SELECT
userSelect: function (table, column, user_id, cb) {
    var dbQuery = "SELECT * FROM " + 
    table + 
    " WHERE " + 
    column +
    " = " +
    "'"+user_id+"'" +
    ";"
    console.log(dbQuery)
    connection.query(dbQuery, function (err, res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
},


//UPDATE
    updateOne: function (table, objectColVals, condition, cb) {

        console.log(`
        table: ${table}
        object ${objectColVals}
        condition ${condition}`)
        var dbQuery = `UPDATE ${table} SET ${objToSql(objectColVals)} WHERE ${condition}`;
        // "UPDATE " +
        //     table +
        //     " SET " +
        //     objToSql(objectColVals) +
        //     " WHERE " +
        //     condition;
        console.log(`dbQuery ${dbQuery}`)
        // connection.query(dbQuery, function (err, res) {
        //     if (err) {
        //         throw err;
        //     }
        //     cb(res);
        // });
    },
//DELETE
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

//ALL GOALS FORMAT FOR SCHEDULE
    allGoals: function (tableOne, tableTwo, table1Col1, table1Col2, table2Col1, table1Col3, table1Col4, table1col5, tableJoin, cb) {
        var dbQuery = `SELECT ${tableOne}.${table1col5} , ${tableOne}.${table1Col1} , ${tableOne}.${table1Col2} , ${tableTwo}.${table2Col1} , ${tableOne}.${table1Col3}, ${tableOne}.${table1Col4}
        FROM ${tableOne}, ${tableTwo}
        WHERE ${tableTwo}.${tableJoin} = ${tableOne}.${tableJoin}
        AND ${table1Col4} = 1
        AND DATE(${table1Col3}) < CURDATE() 
        `;

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

//TWILIO GOALS FOR XML POPULATION TO PLACE CALLS
    twiloGoals: function (table, id, cb){ 
        var dbQuery = `SELECT name FROM ${table} WHERE ${id}`;
        console.log(dbQuery)
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
                console.log("error")
            }
            cb(res);
            console.log(res)
        });
    },
   
}
// `SELECT EXISTS (SELECT name FROM ${table} WHERE ${id})`;
module.exports = orm;


//NOT IN USE
// create: function (table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function (err, result) {
//         if (err) {
//             throw err;
//         }

//         cb(result);
//     });
// },