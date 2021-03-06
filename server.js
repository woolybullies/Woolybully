require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const mySqlConnection = require('./config/config');

mySqlConnection.connect(function(){
    require('./app/schedule')
});


app.use(express.static(__dirname + '/public')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());


var routes = require("./controllers/routes");

app.use(routes);

app.listen(port, () => console.log(`app listening on port ${port}!`))

// console.log(routes)



var routes = require("./controllers/routes");

app.use(routes);
// console.log(routes)

//@TODO Delete below after you verify the the app is working
// app.route('/').get(function(request, response) {
//     response.json(config);
// });