const Promise = require('bluebird');
const drivers  = require('../mocks/driver_list_get.json');
const driver  = require('../mocks/driver_create_post.json');
const {getAllDriversQuery} = require('../commons/queries');
const {pool} = require('../config/config');

const error = {error: "error"};

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

const getById = async (id) => {
	const driver = drivers.find(driver => driver.driverId === parseInt(id));
	return new Promise((resolve, reject) => {
		resolve(driver);
		reject(error);
	});
};

const create = async (driverParam) => {
	return new Promise((resolve, reject) => {
		resolve(driver);
		reject(error);
	});
};

const update = async (id, driverParam) => {
	return new Promise((resolve, reject) => {
		resolve(driver);
		reject(error);
	});
};

const _delete = async (id) => {
	return new Promise((resolve, reject) => {
		resolve();
		reject(error);
	});};

module.exports = {
	getAllDrivers,
	getById,
	create,
	update,
	delete: _delete
};
