const express = require('express');
const router = express.Router();
const carService = require('./car.service');

const getAll = (req, res, next) => {
	carService.getAllCars()
		.then(cars => res.json(cars))
		.catch(err => next(err));
};

const register = (req, res, next) => {
	carService.createCar(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getById = (req, res, next) => {
	carService.getCarById(req.params.id)
		.then(car => car ? res.json(car) : res.sendStatus(404))
		.catch(err => next(err));
};

const update = (req, res, next) => {
	carService.updateCar(req.params.id, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
};

const _delete = (req, res, next) => {
	carService.delete(req.params.id)
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
