import style from '../../styles/UserPopup.module.css';
import {useState,useEffect} from 'react';
import eventService from '../../services/eventService.js';

const EventDetailsPopup = ({togglePopup, event}) => {
    const [eventUserAmount, setEventUserAmount] = useState(0);

    //gets the amount of users that have joined the event apon loading
    useEffect(() => {
        const fetchEventUserAmount = async () => {
            try {
                const amount = await eventService.getEventUserAmount(event.id);
                setEventUserAmount(amount);
            } catch (error) {
                console.log('Error fetching event user amount:', error);
            }
        };

        fetchEventUserAmount();
            
    },[]);


    return (
        <div className={style.popupWindow}>
            <div className={style.popupContainer}>
                
                    <h className={style.popupTitle}>Event Details</h>
                    
                    <h2 className={style.popupParram}>Name : {event.name}</h2>
                    <h2 className={style.popupParram}>Date: {event.date}</h2>
                    <h2 className={style.popupParram}>Location: {event.location}</h2>
                    <h2 className={style.popupParram}>Number of Enrollies: {eventUserAmount}</h2>
                    <h2 className={style.popupParram}>Description:</h2>
                    <h2 className={style.popupParram}>{event.description}</h2>
                    

                    <button className={style.popupCloseButton} onClick={togglePopup}>Close</button>
            </div>

        </div>

    );





}

export default EventDetailsPopup;