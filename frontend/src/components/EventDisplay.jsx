
import styles from '../styles/Landing.module.css'
import { useEffect, useState } from 'react';
import EventTableEntry from '../components/EventTableEntry'

import userService from '../services/userService';
import eventService from '../services/eventService';
import EventDetailsParramTitles from '../components/EventDetailsParramTitles';


const EventDisplay = ({ user }) => {
    const [events, setEvents] = useState([]);
    const [userEventIds, setUserEventsIds] = useState([]);

    //fetches all the events and the user's events
    useEffect(() => {
        getAllEvents();

        if (user && user.length > 0) {
            fetchUserEvents(user.id);
        }
    }, [user]);

    //fetches all the event ids that the user has joined in
    const fetchUserEvents = async (userid) => {
        try {
            const userEvents = await userService.getEventsByUserId(userid);
            setUserEventsIds(userEvents.map((event) => event.eventId));
        } catch (error) {
            console.log(error);
        }
    }

    //fetches all the events
    const getAllEvents = async () => {
        try {
            const events = await eventService.getAllEvents();
            setEvents(events);
        } catch (error) {
            console.log(error);
        }
    }

    //checks if the event is in the user's events
    const isUserEvent = (event) => {
        for (let i = 0; i < userEventIds.length; i++) {
            if (userEventIds[i] === event.id) {
                return true;
            }
        }
        return false;
    }

    return (<>
        <div className={styles.eventsContainer}>

            <h2 className={styles.eventTitle}>Events</h2>

            <EventDetailsParramTitles />

            {events && events.length > 0 && events.map((event) => {
                return <EventTableEntry key={event.id} event={event} user={user} enrolled={isUserEvent(event)} />
            })}
        </div>

    </>)

}


export default EventDisplay;