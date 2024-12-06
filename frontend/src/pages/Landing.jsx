import styles from './Landing.module.css'
import { useEffect,useState } from 'react';
import LoggedOutNotification from '../components/loggedOutNotification'
import EventDisplay from '../components/EventDisplay'


const Landing = () => {
    useEffect(() => {
        // Check the pathname or other properties to change the body color
        
            document.body.style.backgroundColor = '#ffffff'; // Light color for home page
    }, []);
    
    
    
    
    return(
        <>  
            <LoggedOutNotification/>
            <EventDisplay/>
        
        </>
    )
}; 

export default Landing;