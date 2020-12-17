const Promise = require('bluebird');
const cars = require('../mocks/car_list_get.json');
const car = require('../mocks/car_create_post.json');
const { getAllCarsQuery } = require('../commons/queries');
// const { createCarQuery } = require('../commons/queries');
const { pool } = require('../config/config');

const error = { error: "error" };

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

const getByPlate = async (plate) => {
	const car = cars.find(car => car.plate === plate);
	return new Promise((resolve, reject) => {
		resolve(car);
		reject(error);
	});
};

const create = async (carParam) => {
	return new Promise((resolve, reject) => {
		resolve(car);
		reject(error);
	});
};

const update = async (plate, carParam) => {
	return new Promise((resolve, reject) => {
		resolve(car);
		reject(error);
	});
};

const _delete = async (plate) => {
	return new Promise((resolve, reject) => {
		resolve();
		reject(error);
	});
};

module.exports = {
	getAllCars,
	getByPlate,
	create,
	update,
	delete: _delete
};
