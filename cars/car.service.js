const Promise = require('bluebird');
const { createCarQuery, getAllCarsQuery, getCarByIdQuery, updateCarQuery, deleteCarQuery } = require('../commons/queries');
const { pool } = require('../config/config');

const getAllCars = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			getAllCarsQuery,
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const createCar = async (carParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			createCarQuery,
			[
				carParam.plate,
				carParam.model,
				carParam.motor,
				carParam.chassis,
				carParam.color,
			],
			(error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(carParam);
				}
			});
	});
};

const getCarById = async (id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			getCarByIdQuery,
			[id],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const updateCar = async (id, carParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			updateCarQuery,
			[
				id,
				carParam.plate,
				carParam.model,
				carParam.motor,
				carParam.chassis,
				carParam.color,
			],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const _deleteCar = async (id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			deleteCarQuery,
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
	getAllCars,
	getCarById,
	createCar,
	updateCar,
	delete: _deleteCar
};
