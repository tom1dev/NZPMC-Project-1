import style from '../styles/UserPopup.module.css';
import EventTableEntry from './EventTableEntry.jsx';
import {useState,useEffect} from 'react';
import userService from '../services/userService.js';
import eventService from '../services/eventService.js';


const UserDetailsPopup = ({ showPopup, togglePopup, user}) => {
    const [userEvents, setUserEvents] = useState([]);

    const getUserEvents = async () => {
        try{
            const Eventids = await userService.getEventsByUserId(user.id);
            const Events = await Promise.all(Eventids.map((event) => {return getEventById(event.eventId)}));

            setUserEvents(Events);

        }catch (error){
            console.log(error);
        }
    }

    const getEventById = async (id) => {
        try{
            const event = await eventService.getEventById(id);
            return event[0];
        }catch (error){
            console.log(error);
            return;

        }
    }


    useEffect(() => {
        getUserEvents();
    }, []);

    return (
        <div className={style.popupWindow}>
            <div className={style.popupContainer}>
                
                    <h className={style.popupTitle}>User Details</h>
                    <h2 className={style.popupName}>Name: {user.name}</h2>
                    <h2 className={style.popupEmail}>Email: {user.email}</h2>
                    <h2 className={style.popupEmail}>Concerts:</h2>

                    {console.log(userEvents)}
                    {userEvents.length === 0 && <h2 className={style.popupEmail}>No concerts attended</h2>}
                    {userEvents.length > 0 && userEvents.map((event) => {return <EventTableEntry event={event}/>})}


                    <button className={style.popupCloseButton} onClick={togglePopup}>Close</button>
            </div>

        </div>

    );





}

export default UserDetailsPopup;