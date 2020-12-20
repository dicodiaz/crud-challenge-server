const express = require('express');
const router = express.Router();
const rideService = require('./ride.service');

const getAll = (req, res, next) => {
	rideService.getAllRides()
		.then(rides => res.json(rides))
		.catch(err => next(err));
};

const register = (req, res, next) => {
	rideService.createRide(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getById = (req, res, next) => {
	rideService.getRideById(req.params.id)
		.then(ride => ride ? res.json(ride) : res.sendStatus(404))
		.catch(err => next(err));
};

const update = (req, res, next) => {
	rideService.updateRide(req.params.id, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
};

const _delete = (req, res, next) => {
	rideService.delete(req.params.id)
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
