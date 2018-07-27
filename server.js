
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const autoIncrement = require('mongoose-auto-increment');
let db = mongoose.connection;
autoIncrement.initialize(mongoose.connection);

require('./api/models/hotelDescriptionModel');
require('./api/models/hotelOverviewModel');
require('./api/models/hotelRatesModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:qwerty123456@ds131989.mlab.com:31989/bakalov_hotel')
    .then(function (data) {
        console.log('Dadatabase connected!');
        require('./seed');
    }, function (err) {
        console.log('Dadatabase connection error: ',err);

    });

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 6000;


const hotelDescriptionRoutes = require('./api/routes/hotelDescriptionRoutes');
const hotelOverviewRoutes = require('./api/routes/hotelOverviewRoutes');
const hotelRatesRoutes = require('./api/routes/hotelRatesRoutes');

hotelDescriptionRoutes(app);
hotelOverviewRoutes(app);
hotelRatesRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

