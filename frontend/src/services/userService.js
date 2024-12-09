const axios = require('axios');


const getAllUsers = async () => {
    axios.get('http://localhost:3001/users').then(response => {}).catch(error => {});
}

const getUserById = async (id) => {

}

const createUser = async (user) => {

}

const updateUser = async (id, user) => {


}

const getEventsByUserId = async (id) => {

}

const addUserToEvent = async (userId, eventId) => {

}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    getEventsByUserId,
    addUserToEvent
}

