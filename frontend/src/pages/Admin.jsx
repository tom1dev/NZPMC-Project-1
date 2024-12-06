import styles from '../styles/Landing.module.css'
import { useEffect,useState } from 'react';
import CreateEvent from '../components/CreateEvent';
import EventDisplay from '../components/EventDisplay'
import SideBar from '../components/SideBar';
import UserDisplay from '../components/UserDisplay';


const Admin = () => {
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
                <CreateEvent/>
                <EventDisplay/>
                <UserDisplay/>
            </div>
        </div>
    )
}; 


export default Admin;