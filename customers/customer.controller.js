const express = require('express');
const router = express.Router();
const customerService = require('./customer.service');

const getAll = (req, res, next) => {
	customerService.getAllCustomers()
		.then(customers => res.json(customers))
		.catch(err => next(err));
};

const register = (req, res, next) => {
	customerService.createCustomer(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getById = (req, res, next) => {
	customerService.getCustomerById(req.params.id)
		.then(customer => customer ? res.json(customer) : res.sendStatus(404))
		.catch(err => next(err));
};

const update = (req, res, next) => {
	customerService.updateCustomer(req.params.id, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
};

const _delete = (req, res, next) => {
	customerService.delete(req.params.id)
		.then(() => res.sendStatus(204))
		.catch(err => next(err));
};

// routes
router.get('/', getAll);
router.post('/register', register);
router.get('/:id/detail', getById);
router.put('/:id/detail', update);
router.delete('/:id/detail', _delete);

module.exports = router;
