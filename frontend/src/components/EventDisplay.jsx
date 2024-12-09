
import styles from '../styles/Landing.module.css'
import { useEffect,useState } from 'react';
import EventTableEntry from '../components/EventTableEntry'

import userService from '../services/userService';
import eventService from '../services/eventService';


const EventDisplay = ({user}) =>{
    const [events, setEvents] = useState([]);
    const [userEvents, setUserEvents] = useState({});
    
    const fetchUserEvents = async (userid) => {
        try{
            const userEvents = await userService.getEventsByUserId(userid);
            setUserEvents(userEvents);
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



    useEffect(() => {
        getAllEvents();

        if(user && user.id){
            fetchUserEvents(user.id);
        }
    }, []);

    return(<>


        <div className={styles.eventsContainer}>

            <h2 className={styles.eventTitle}>Events</h2>
           
            <div className={styles.eventViewTitleBox}>
                <h2 className={styles.eventTitleName}>Name</h2>
                <h2 className={styles.eventTitleLocation}>Location</h2>
                <h2 className={styles.eventTitleDate}>Date</h2>
            </div>

            {events && events.length>0 &&  events.map((event) => {
                return <EventTableEntry key={event.id} event = {event}/>
                })}
        </div>
    
    </>)

}


export default EventDisplay;