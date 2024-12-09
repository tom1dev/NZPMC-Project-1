const express = require('express');
const router = express.Router();
const userController = require('../controllers/eventController');
const { authenticateToken } = require('../services/signInService');

router.get('/', userController.getAllEvents);
router.get('/:id', userController.getEventById);
router.post('/', authenticateToken, userController.createEvent);


module.exports = router;