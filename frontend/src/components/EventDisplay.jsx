
import styles from '../styles/Landing.module.css'
import { useEffect,useState } from 'react';
import EventTableEntry from '../components/EventTableEntry'

import userService from '../services/userService';
import eventService from '../services/eventService';


const EventDisplay = ({user}) =>{
    const [events, setEvents] = useState([]);
    const [userEventIds, setUserEventsIds] = useState([]);
    
    const fetchUserEvents = async (userid) => {
        try{
            const userEvents = await userService.getEventsByUserId(userid);
            setUserEventsIds(userEvents.map((event) => event.eventId));
        }catch (error){
            console.log(error);
        }
    }



    const getAllEvents = async () => {
        try{
            const events = await eventService.getAllEvents();
            setEvents(events);
        }catch (error){
            console.log(error);
        }
    }

    const isUserEvent = (event) => {
        for(let i = 0; i<userEventIds.length; i++){            

            if(userEventIds[i] === event.id){
                return true;
            }
        }

        return false;
    }


    useEffect(() => {
        getAllEvents();

        if(user){
            fetchUserEvents(user.id);
        }
    }, [user]);

    return(<>


        <div className={styles.eventsContainer}>

            <h2 className={styles.eventTitle}>Events</h2>
           
            <div className={styles.eventViewTitleBox}>
                <h2 className={styles.eventTitleName}>Name</h2>
                <h2 className={styles.eventTitleLocation}>Location</h2>
                <h2 className={styles.eventTitleDate}>Date</h2>
            </div>

            {events && events.length>0 &&  events.map((event) => {
                return <EventTableEntry key={event.id} event = {event} user = {user} enrolled={isUserEvent(event)}/>
            })}
        </div>
    
    </>)

}


export default EventDisplay;