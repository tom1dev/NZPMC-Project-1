const userService = require('../services/userService');


const getAllUsers = async (request, response) => {
    try {
        const users = await userService.getAllUsers();
        if(users){
            response.status(200).json(users);
        }else{
            response.status(404).send("No users found");
        }

    } catch (error) {
        response.status(500).send(error.message);
        console.log(error);
    }
}

const getUserById = async (request, response) => {
    const userId = request.parrams.id;

    try {
        const user = await userService.getUserById(userId);
        if(user){
            response.status(200).json(user);
        }else{
            response.status(404).send("User not found");
        }

    } catch (error) {
        response.status(500).send(error.message);
        console.log(error);
    }
}

const createUser = async (request, response) => {
    const user = request.body;

    try {
        const newUser = await userService.createUser(user);
        if(newUser){
            response.status(201).json(newUser);
        }else{
            response.status(400).send("User not created");
        }
    } catch (error) {
        response.status(500).send(error.message);
        console.log(error);
    }
}

const getUserEvents = async (request, response) => {
    try {
        const userId = request.params.id;
        const events = await userService.getUserEvents(userId);
        if(events){
            response.status(200).json(events);
        }else{
            response.status(404).send("No events found for this user");
        }
    } catch (error) {
        console.log(error);
        response.status(500).send(error.message);
    }
}

const addUserEvent = async (request, response) => {
    try {
        const userId = request.params.id;
        const eventId = request.body.eventId;
        const userEvents = await userService.addUserEvent(userId, eventId);
        if(user){
            response.status(200).json(userEvents);
        }else{
            response.status(404).send("User or event not found");
        }
    } catch (error) {
        console.log(error);
        response.status(500).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    getUserEvents,
    addUserEvent
}