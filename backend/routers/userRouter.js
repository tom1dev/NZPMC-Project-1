const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/:id/events', userController.getUserEvents);
router.post('/', userController.createUser);
router.post('/:id/events', userController.addUserEvent);




module.exports = router;