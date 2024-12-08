const Event = require('../models/eventModel');

const createEvent = async (eventData) => {
    const newEvent = new Event({id: eventData.id, name: eventData.name, date: eventData.date, location: eventData.location, description: eventData.description});

    newEvent.save().then(result => {
        return true;
    }).catch(err => {
        return false;
    });
}

const getEvents = async () => {
    Event.find({}).then(res =>{
        return res;
    }).catch(err => {
        return null;
    });
}

const getEventById = async (eventId) => {
    Event.find({id: eventId}).then(res =>{
        return res;
    }).catch(err => {
        return null;
    });
}

module.exports = {
    createEvent,
    getEvents,
    getEventById
}








