const express = require('express');
const router = express.Router();
const userController = require('../controllers/eventController');

router.get('/', userController.getAllEvents);
router.get('/:id', userController.getEventById);
router.post('/', userController.createEvent);


module.exports = router;