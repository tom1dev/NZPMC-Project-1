import styles from '../styles/Landing.module.css'


const EventTableEntry = ({event}) => {

    return (
        <div className={styles.eventTableListingBox}>
            <h2 className={styles.eventName}>{event.name}</h2>
            <h2 className={styles.eventLocation}>{event.location}</h2>
            <h2 className={styles.eventDate}>{event.date}</h2>
            <button className={styles.eventViewButton}>View</button>
            <button className={styles.eventViewButton}>Enroll</button>
        </div>
    );



}

export default EventTableEntry;