const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors');

const apiConstants = require('./commons/api-constants');
const rideController = require('./rides/ride.controller');
const customerController = require('./customers/customer.controller');
const driverController = require('./drivers/driver.controller');
const carController = require('./cars/car.controller');
// const { use } = require('./rides/ride.controller');

const baseApiPath = apiConstants.baseApiPath.concat(apiConstants.apiVersion);
const ridePath = '/rides';
const customerPath = '/users/customers';
const driverPath = '/users/drivers';
const carPath = '/cars';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(baseApiPath + ridePath, rideController);
app.use(baseApiPath + customerPath, customerController);
app.use(baseApiPath + driverPath, driverController);
app.use(baseApiPath + carPath, carController);

module.exports = app;
