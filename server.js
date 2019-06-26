require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const mySqlConnection = require('./config/config');

mySqlConnection.connect();


app.use(express.static(__dirname + '/views')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());


var routes = require("./controllers/woolyController");

app.use(routes);

app.listen(port, () => console.log(`app listening on port ${port}!`))

// console.log(routes)

//@TODO Delete below after you verify the the app is working
// app.route('/').get(function(request, response) {
//     response.json(config);
// });