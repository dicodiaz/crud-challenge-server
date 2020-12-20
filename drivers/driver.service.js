const Promise = require('bluebird');
const { createDriverQuery, getAllDriversQuery, getDriverByIdQuery, updateDriverQuery, deleteDriverQuery } = require('../commons/queries');
const { pool } = require('../config/config');

const getAllDrivers = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			getAllDriversQuery,
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const createDriver = async (driverParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			createDriverQuery,
			[
				driverParam.driver_id,
				driverParam.firstname,
				driverParam.lastname,
				driverParam.age,
				driverParam.username,
				driverParam.phone,
				driverParam.password,
			],
			(error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(driverParam);
				}
			});
	});
};

const getDriverById = async (id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			getDriverByIdQuery,
			[id],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const updateDriver = async (id, driverParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			updateDriverQuery,
			[
				id,
				driverParam.driver_id,
				driverParam.firstname,
				driverParam.lastname,
				driverParam.age,
				driverParam.username,
				driverParam.phone,
				driverParam.password,
			],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const _deleteDriver = async (id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			deleteDriverQuery,
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
	getAllDrivers,
	getDriverById,
	createDriver,
	updateDriver,
	delete: _deleteDriver
};
