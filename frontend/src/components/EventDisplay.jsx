
import styles from '../styles/Landing.module.css'
import { useEffect,useState } from 'react';
import EventTableEntry from '../components/EventTableEntry'


const EventDisplay = () =>{
    const event = {
        name: "Event 1",
        attendees: 10,
        description: "This is the first event",
        location: "Location 1",
        date: "2021-10-10"
    }

    return(<>


        <div className={styles.eventsContainer}>

            <h2 className={styles.eventTitle}>Events</h2>
           
            <div className={styles.eventViewTitleBox}>
                <h2 className={styles.eventTitleName}>Name</h2>
                <h2 className={styles.eventTitleLocation}>Location</h2>
                <h2 className={styles.eventTitleDate}>Date</h2>
            </div>

            <EventTableEntry event = {event}/>
            <EventTableEntry event = {event}/>
            <EventTableEntry event = {event}/>
        </div>
    
    </>)

}


export default EventDisplay;