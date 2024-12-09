import style from '../styles/UserPopup.module.css';


const EventDetailsPopup = ({togglePopup, event}) => {

    return (
        <div className={style.popupWindow}>
            <div className={style.popupContainer}>
                
                    <h className={style.popupTitle}>Event Details</h>
                    
                    <h2 className={style.popupName}>Name : {event.name}</h2>
                    <h2 className={style.popupEmail}>Date: {event.date}</h2>
                    <h2 className={style.popupEmail}>Location: {event.location}</h2>
                    <h2 className={style.popupEmail}>Description: {event.description}</h2>
                    <h2 className={style.popupEmail}>Number of Enrollies: {event.numEnrollies}</h2>

                    <button className={style.popupCloseButton} onClick={togglePopup}>Close</button>
            </div>

        </div>

    );





}

export default EventDetailsPopup;