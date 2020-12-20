const Promise = require('bluebird');
const { createCustomerQuery, getAllCustomersQuery, getCustomerByIdQuery, updateCustomerQuery, deleteCustomerQuery } = require('../commons/queries');
const { pool } = require('../config/config');

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

const createCustomer = async (customerParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			createCustomerQuery,
			[
				customerParam.customer_id,
				customerParam.firstname,
				customerParam.lastname,
				customerParam.username,
				customerParam.email,
				customerParam.phone,
				customerParam.password,
			],
			(error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(customerParam);
				}
			});
	});
};

const getCustomerById = async (id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			getCustomerByIdQuery,
			[id],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const updateCustomer = async (id, customerParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			updateCustomerQuery,
			[
				id,
				customerParam.customer_id,
				customerParam.firstname,
				customerParam.lastname,
				customerParam.username,
				customerParam.email,
				customerParam.phone,
				customerParam.password,
			],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			});
	});
};

const _deleteCustomer = async (id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			deleteCustomerQuery,
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
	getAllCustomers,
	getCustomerById,
	createCustomer,
	updateCustomer,
	delete: _deleteCustomer
};
