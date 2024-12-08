const User = require('../models/userModel');
const UserEvents = require('../models/usersEventsModel');
const SigninService = require('./signInService');

const createUser = async (userData) => {
    const hashPassword = SigninService.hashPassword(userData.passwordHash);

    const user = new User({name: userData.name, email: userData.email, passwordHash: hashPassword, isAdmin: userData.admin});

    user.save().catch(err => {
        console.log(err);
        return null;
      })

    return await SigninService.generateToken(userData.email);
    
};

const getAllUsers = async () => {
    return await User.find({}).catch(err => {
        return null;
    });
};

const getUserById = async (userId) => {
    return await User.find({ _id: userId }).catch(err => {
        console.log(err);
        return null;
    });
};

const getUserEvents = async (userId) => {
    return await UserEvents.find({userId: userId}).then().catch(err => {
        return null;
    });
};

const addUserEvent = async (userId, eventId) => {
    const userEvent = new UserEvents({userId: userId, eventId: eventId});

    userEvent.save().then().catch(err => {return false});

    return await true;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserEvents,
    addUserEvent
}
