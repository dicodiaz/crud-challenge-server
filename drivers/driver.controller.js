const express = require('express');
const router = express.Router();
const driverService = require('./driver.service');

const create = (req, res, next) => {
	driverService.create(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getAll = (req, res, next) => {
	driverService.getAllDrivers()
		.then(drivers => res.json(drivers))
		.catch(err => next(err));
};

const getById = (req, res, next) => {
	driverService.getById(req.params.id)
		.then(driver => driver ? res.json(driver) : res.sendStatus(404))
		.catch(err => next(err));
};

const update = (req, res, next) => {
	driverService.update(req.params.id, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
};

const _delete = (req, res, next) => {
	driverService.delete(req.params.id)
		.then(() => res.sendStatus(204))
		.catch(err => next(err));
};

// routes
router.post('/create', create);
router.get('/:id/profile', getById);
router.put('/:id/profile', update);
router.delete('/:id/profile', _delete);
router.get('/', getAll);

module.exports = router;
