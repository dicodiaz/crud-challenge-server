const Promise = require('bluebird');
const { createRideQuery, getAllRidesQuery, getRideByIdQuery, updateRideQuery, deleteRideQuery } = require('../commons/queries');
const { pool } = require('../config/config');

const getAllRides = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			getAllRidesQuery,
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const createRide = async (rideParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			createRideQuery,
			[
				rideParam.first_point,
				rideParam.target_point,
				rideParam.driver_id,
				rideParam.customer_id,
				rideParam.time,
			],
			(error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(rideParam);
				}
			});
	});
};

const getRideById = async (id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			getRideByIdQuery,
			[id],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const updateRide = async (id, rideParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			updateRideQuery,
			[
				id,
				rideParam.first_point,
				rideParam.target_point,
				rideParam.driver_id,
				rideParam.customer_id,
				rideParam.time,
			],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const _deleteRide = async (id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			deleteRideQuery,
			[id],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

module.exports = {
	getAllRides,
	getRideById,
	createRide,
	updateRide,
	delete: _deleteRide
};
