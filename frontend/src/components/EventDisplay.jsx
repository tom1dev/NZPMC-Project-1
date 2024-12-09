
import styles from '../styles/Landing.module.css'
import { useEffect,useState } from 'react';
import EventTableEntry from '../components/EventTableEntry'


const EventDisplay = ({user}) =>{
    const [events, setEvents] = useState([]);
    const [userEvents, setUserEvents] = useState({});
    const [userInfo, setUser] = useState(user);
    
    
    useEffect(() => {
    }, []);

    return(<>


        <div className={styles.eventsContainer}>

            <h2 className={styles.eventTitle}>Events</h2>
           
            <div className={styles.eventViewTitleBox}>
                <h2 className={styles.eventTitleName}>Name</h2>
                <h2 className={styles.eventTitleLocation}>Location</h2>
                <h2 className={styles.eventTitleDate}>Date</h2>
            </div>

            {events && events.length>0 &&  events.map((event) => {<EventTableEntry key={event.id} event = {event}/>})}
        </div>
    
    </>)

}


export default EventDisplay;