import styles from '../styles/Landing.module.css'
import {useState,useEffect} from 'react';
import userService from '../services/userService';
import EventDetailsPopup from '../components/EventDetailsPopup';


const EventTableEntry = ({event,user,enrolled}) => {
    const [enrolledUser,setEnrolledUser] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);


    useEffect(() => {

        setEnrolledUser(enrolled);
    }
    ,[enrolled]);


    const addUserToEvent = async (userId, eventId) => {
        try{
            const res = await userService.addUserToEvent(userId, eventId);
            return true;
        }catch (error){
            return false;
        }
    }

    const handleEnroll = (e) => {
        console.log("Enroll Clicked");
        if(user && user.id){
            const hasEnrolled = addUserToEvent(user.id,event.id);
            if(hasEnrolled){
                setEnrolledUser(true);
            }
        }
    }

    const togglePopup = () => {
        console.log("togglePopup Clicked");
        setPopupOpen(!popupOpen);
    }


    return (
        
        <div className={styles.eventTableListingBox}>
            <h2 className={styles.eventName}>{event.name}</h2>
            <h2 className={styles.eventLocation}>{event.location}</h2>
            <h2 className={styles.eventDate}>{event.date}</h2>
            <button className={styles.eventViewButton} onClick={(e) => {togglePopup(e)}}>View</button>
            {user && !enrolledUser && <button className={styles.eventViewButton} onClick={(e) =>{handleEnroll(e)}}>Enroll</button>}
            {user && enrolledUser && <div className={styles.enrolledDiv}>Enrolled</div>}


            {popupOpen && <EventDetailsPopup togglePopup={togglePopup} event={event}/>}
        </div>
    );



}

export default EventTableEntry;