import styles from '../styles/Landing.module.css'
import { useEffect,useState } from 'react';
import CreateEvent from '../components/CreateEvent';
import EventDisplay from '../components/EventDisplay'
import SideBar from '../components/SideBar';
import UserDisplay from '../components/UserDisplay';
import { useNavigate } from "react-router-dom";

import userService from '../services/userService';
const Admin = () => {


    const navigate = useNavigate();

    const [user, setUser] = useState();
        useEffect(() => {
            // Check the pathname or other properties to change the body color
            const fetchUserInformation = async () => {
                try{
                    const user = await userService.getUserByToken();
                    if(!user || user.length<1|| user[0].email !== "admin"){
                        navigate("/");
                    }

                    setUser(user[0]);

                }catch (error){
                    navigate("/");
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
                <h1 className={styles.landingPageTitle}>Admin Page</h1>
                <UserDisplay/>
                <CreateEvent/>
                <EventDisplay/>
                
            </div>
        </div>
    )
}; 


export default Admin;