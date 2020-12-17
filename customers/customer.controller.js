const express = require('express');
const router = express.Router();
const customerService = require('./customer.service');

const register = (req, res, next) => {
	customerService.create(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getAll = (req, res, next) => {
	customerService.getAllCustomers()
		.then(customers => res.json(customers))
		.catch(err => next(err));
};

// const getCurrent = (req, res, next) => {
// 	customerService.getById(req.customer.sub)
// 		.then(customer => customer ? res.json(customer) : res.sendStatus(404))
// 		.catch(err => next(err));
// };

const getById = (req, res, next) => {
	customerService.getById(req.params.id)
		.then(customer => customer ? res.json(customer) : res.sendStatus(404))
		.catch(err => next(err));
};

const update = (req, res, next) => {
	customerService.update(req.params.id, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
};

const _delete = (req, res, next) => {
	customerService.delete(req.params.id)
		.then(() => res.sendStatus(204))
		.catch(err => next(err));
};

// routes
router.post('/register', register);
// router.get('/current', getCurrent);
router.get('/:id/profile', getById);
router.put('/:id/profile', update);
router.delete('/:id/profile', _delete);
router.get('/', getAll);

module.exports = router;
