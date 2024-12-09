import styles from '../styles/Landing.module.css'
import { useEffect,useState } from 'react';
import LoggedOutNotification from '../components/loggedOutNotification'
import EventDisplay from '../components/EventDisplay'
import SideBar from '../components/SideBar';

import userService from '../services/userService';


const Landing = () => {
    const [user, setUser] = useState();


    useEffect(() => {
        // Check the pathname or other properties to change the body color
            const fetchUserInformation = async () => {
                try{
                    const user = await userService.getUserByToken();
                    setUser(user[0]);
                }catch (error){
                    console.log(error);
                }
            }
            
            fetchUserInformation();

    }, []);
    
    
    
    
    return(
        <div className={styles.landingPageContainer}>
            <div className={styles.sidebarContainer}>
                <SideBar user = {user} setUser ={setUser}/>
            </div>
            <div className={styles.landingContentContainer}>
                {!user && <LoggedOutNotification/>}
                <EventDisplay user = {user}/>
            </div>
        </div>
    )
}; 

export default Landing;