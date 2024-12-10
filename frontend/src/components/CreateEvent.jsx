import styles from '../styles/Landing.module.css'
import styleCreateEvent from '../styles/CreateEvent.module.css';
import { useEffect,useState } from 'react';
import eventService from '../services/eventService';


const CreateEvent = () => {
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');

    
    const handleVariableChange = (event, setter) =>{
        setter(event.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !date || !description) {
            alert("Please fill out name,date and description.");
            return;
        }

        try{
            await eventService.createEvent({name:name,location: location,date: date,description: description});
            window.location.reload();
        }catch (error){
            console.log(error);
        }

    }

    return (
        <div className={styles.eventsContainer}>
            <h2 className={styles.eventTitle}>Create Event</h2>
            
            <form   className={styleCreateEvent.createEventContainer} onSubmit={handleSubmit}>
                
                
                <div className={styleCreateEvent.parrameterBox}>
                    <h2 className={styleCreateEvent.parrameterTitle}>Name</h2> 
                    <input className={styleCreateEvent.parrameterInput} value={name}  onChange={(event) =>handleVariableChange(event,setName)}/>
                </div>

                <div className={styleCreateEvent.parrameterBox}>
                    <h2 className={styleCreateEvent.parrameterTitle}>Location</h2>
                    <input className={styleCreateEvent.parrameterInput} value={location}  onChange={(event) =>handleVariableChange(event,setLocation)}/>
                </div>

                <div className={styleCreateEvent.parrameterBox}>
                    <h2 className={styleCreateEvent.parrameterTitle}>Date</h2>
                    <input className={styleCreateEvent.parrameterInput} value={date} placeholder='dd/mm/yyyy'  onChange={(event) =>handleVariableChange(event,setDate)}/>
                </div>
                <div className={styleCreateEvent.parrameterBox}>
                    <h2 className={styleCreateEvent.parrameterTitle}>Description</h2>
                    <input className={styleCreateEvent.parrameterInput} value={description}  onChange={(event) =>handleVariableChange(event,setDescription)}/>
                </div>

                <button type="submit" className={styleCreateEvent.eventSubmitButton} >Create Event</button>
                


            </form>


        </div>
    )

}

export default CreateEvent;