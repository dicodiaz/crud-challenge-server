const Promise = require('bluebird');
const rides  = require('../mocks/ride_list_get.json');
const ride  = require('../mocks/ride_create_post.json');
const {getAllRidesQuery} = require('../commons/queries');
// const {createRideQuery} = require('../commons/queries');
const {pool} = require('../config/config');

const error = {error: "error"};

const getAllRides = async () => {
	return new Promise((resolve, reject) => {
	  pool.query(getAllRidesQuery, (error, results) => {
		if (error) {
		  reject(error);
		}
		resolve(results.rows);
	  });
	});
  };

const getByPlate = async (driver_id) => {
	const ride = rides.find(ride => ride.driver_id === parseInt(driver_id));
	return new Promise((resolve, reject) => {
		resolve(ride);
		reject(error);
	});
};

const create = async (rideParam) => {
	return new Promise((resolve, reject) => {
		resolve(ride);
		reject(error);
	});
};

const update = async (driver_id, rideParam) => {
	return new Promise((resolve, reject) => {
		resolve(ride);
		reject(error);
	});
};

const _delete = async (driver_id) => {
	return new Promise((resolve, reject) => {
		resolve();
		reject(error);
	});};

module.exports = {
	getAllRides,
	getByPlate,
	create,
	update,
	delete: _delete
};
