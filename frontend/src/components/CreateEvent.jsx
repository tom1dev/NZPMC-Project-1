import styles from '../styles/Landing.module.css'
import styleCreateEvent from '../styles/CreateEvent.module.css';
import { useEffect,useState } from 'react';


const CreateEvent = () => {
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');
    const [numEnrollies, setNumEnrollies] = useState('');

    
    const handleVariableChange = (event, setter) =>{
        setter(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !location || !date || !description || !numEnrollies) {
            alert("Please fill out all fields.");
            return;
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
                    <input className={styleCreateEvent.parrameterInput} value={date}  onChange={(event) =>handleVariableChange(event,setDate)}/>
                </div>
                <div className={styleCreateEvent.parrameterBox}>
                    <h2 className={styleCreateEvent.parrameterTitle}>Description</h2>
                    <input className={styleCreateEvent.parrameterInput} value={description}  onChange={(event) =>handleVariableChange(event,setDescription)}/>
                </div>

                <div className={styleCreateEvent.parrameterBox}>
                    <h2 className={styleCreateEvent.parrameterTitle}>Number of Enrollies</h2>
                    <input className={styleCreateEvent.parrameterInput} value={numEnrollies}  onChange={(event) =>handleVariableChange(event,setNumEnrollies)}/>
                </div>

                <button type="submit">Create Event</button>
                


            </form>


        </div>
    )

}

export default CreateEvent;