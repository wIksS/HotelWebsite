
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const autoIncrement = require('mongoose-auto-increment');
let db = mongoose.connection;
autoIncrement.initialize(mongoose.connection);

require('./api/models/hotelDescriptionModel');
require('./api/models/hotelOverviewModel');
require('./api/models/hotelRatesModel');
require('./api/models/hotelHouseRatesModel');

mongoose.Promise = global.Promise;
var uri = 'mongodb://127.0.0.1:27017/balkalov_hotel';
var options = {
    user: "master",
    pass: "b@k@l0v",
    auth: { authDb: 'admin' },
    useMongoClient: true
    };

// mongoose.connect('mongodb://admin:qwerty123456@ds131989.mlab.com:31989/bakalov_hotel',  {useNewUrlParser: true})
mongoose.connect(uri)
    .then(function (data) {
        console.log('Dadatabase connected!');
        require('./seed');
    }, function (err) {
        console.log('Dadatabase connection error: ',err);

    });

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
var http = require("http")

const hotelDescriptionRoutes = require('./api/routes/hotelDescriptionRoutes');
const hotelOverviewRoutes = require('./api/routes/hotelOverviewRoutes');
const hotelRatesRoutes = require('./api/routes/hotelRatesRoutes');
const hotelHouseRatesRoutes = require('./api/routes/hotelHouseRatesRoutes');
const mailSenderRoutes = require('./api/routes/mailSenderRoutes');

hotelDescriptionRoutes(app);
hotelOverviewRoutes(app);
hotelRatesRoutes(app);
hotelHouseRatesRoutes(app);
mailSenderRoutes(app);

//app.listen(port, () => console.log(`Listening on port ${port}`));
var server = http.createServer(app);
server.listen(8080, "185.80.1.67"); 
