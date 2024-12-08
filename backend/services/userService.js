const User = require('../models/userModel');
const UserEvents = require('../models/usersEventsModel');

const createUser = async (userData) => {
    const user = new User({id: userData.id, name: userData.name, email: userData.email, passwordHash: userData.passwordHash, isAdmin: userData.admin});
    
    user.save().then(result => {
        return true;
      }).catch(err => {
        return false;
      })
    
};

const getUsers = async () => {
    User.find({}).then(res =>{
        return res;
    }).catch(err => {
        return null;
    });
};

const getUserById = async (userId) => {
    User.find({id: userId}).then(res =>{
        return res;
    }).catch(err => {
        return null;
    });
};

const getUserEvents = async (userId) => {
    UserEvents.find({userId: userId}).then(res =>{
        return res;
    }).catch(err => {
        return null;
    });
};

const addUserEvent = async (userId, eventId) => {
    const userEvent = new UserEvents({userId: userId, eventId: eventId});

    userEvent.save().then(result => {return true}).catch(err => {return false});
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    getUserEvents,
    addUserEvent
}
