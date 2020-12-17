const express = require('express');
const router = express.Router();
const carService = require('./car.service');

const register = (req, res, next) => {
	carService.create(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getAll = (req, res, next) => {
	carService.getAllCars()
		.then(cars => res.json(cars))
		.catch(err => next(err));
};

const getByPlate = (req, res, next) => {
	carService.getByPlate(req.params.plate)
		.then(car => car ? res.json(car) : res.sendStatus(404))
		.catch(err => next(err));
};

const update = (req, res, next) => {
	carService.update(req.params.plate, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
};

const _delete = (req, res, next) => {
	carService.delete(req.params.plate)
		.then(() => res.sendStatus(204))
		.catch(err => next(err));
};

// routes
router.post('/register', register);
router.get('/:plate/profile', getByPlate);
router.put('/:plate/profile', update);
router.delete('/:plate/profile', _delete);
router.get('/', getAll);

module.exports = router;
