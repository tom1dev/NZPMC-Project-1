import styles from './Landing.module.css'
import { useEffect,useState } from 'react';
import LoggedOutNotification from '../components/loggedOutNotification'
import EventDisplay from '../components/EventDisplay'
import SideBar from '../components/SideBar';


const Landing = () => {
    useEffect(() => {
        // Check the pathname or other properties to change the body color
        
            document.body.style.backgroundColor = '#ffffff'; // Light color for home page
    }, []);
    
    
    
    
    return(
        <div className={styles.landingPageContainer}>
            <div className={styles.sidebarContainer}>
                <SideBar/>
            </div>
            <div className={styles.landingContentContainer}>
                <LoggedOutNotification/>
                <EventDisplay/>
            </div>
        </div>
    )
}; 

export default Landing;