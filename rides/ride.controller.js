const express = require('express');
const router = express.Router();
const rideService = require('./ride.service');

const register = (req, res, next) => {
	rideService.create(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getAll = (req, res, next) => {
	rideService.getAllRides()
		.then(rides => res.json(rides))
		.catch(err => next(err));
};

const getByPlate = (req, res, next) => {
	rideService.getByPlate(req.params.driver_id)
		.then(ride => ride ? res.json(ride) : res.sendStatus(404))
		.catch(err => next(err));
};

const update = (req, res, next) => {
	rideService.update(req.params.driver_id, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
};

const _delete = (req, res, next) => {
	rideService.delete(req.params.driver_id)
		.then(() => res.sendStatus(204))
		.catch(err => next(err));
};

// routes
router.post('/register', register);
router.get('/:driver_id/profile', getByPlate);
router.put('/:driver_id/profile', update);
router.delete('/:driver_id/profile', _delete);
router.get('/', getAll);

module.exports = router;
