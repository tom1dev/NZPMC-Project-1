const Event = require('../models/eventModel');

const createEvent = async (eventData) => {
    const newEvent = new Event({id: eventData.id, name: eventData.name, date: eventData.date, location: eventData.location, description: eventData.description});

    newEvent.save().then().catch(err => {
        return false;
    });

    return await true;
}

const getEvents = async () => {
    return await Event.find({}).catch(err => {
        return null;
    });
}

const getEventById = async (eventId) => {
    return await Event.find({ _id: eventId }).catch(err => {
        console.log(err);
        return null;
    });
}

module.exports = {
    createEvent,
    getEvents,
    getEventById
}








