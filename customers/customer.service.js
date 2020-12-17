const Promise = require('bluebird');
const customers  = require('../mocks/customer_list_get.json');
const customer  = require('../mocks/customer_create_post.json');
const {getAllCustomersQuery} = require('../commons/queries');
const {pool} = require('../config/config');

const error = {error: "error"};

const getAllCustomers = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			getAllCustomersQuery,
			(error, results) => {
			if (error) {
				reject(error);
			}
			resolve(results.rows);
		});
	});
};

const getById = async (id) => {
	const customer = customers.find(customer => customer.customerId === parseInt(id));
	return new Promise((resolve, reject) => {
		resolve(customer);
		reject(error);
	});
};

const create = async (customerParam) => {
	return new Promise((resolve, reject) => {
		resolve(customer);
		reject(error);
	});
};

const update = async (id, customerParam) => {
	return new Promise((resolve, reject) => {
		resolve(customer);
		reject(error);
	});
};

const _delete = async (id) => {
	return new Promise((resolve, reject) => {
		resolve();
		reject(error);
	});};

module.exports = {
	getAllCustomers,
	getById,
	create,
	update,
	delete: _delete // Qué significa el _delete?
};
