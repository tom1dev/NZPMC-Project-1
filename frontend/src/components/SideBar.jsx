
import styles from '../styles/SideBar.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cookieService from '../services/cookieService';
import SideBarUserDetails from './SideBarUserDetails';


const SideBar = ({user, setUser}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    //updates sidebar elements depending on user login status
    useEffect(() => {
        if (!user || user.length < 1) {
            setIsLoggedIn(false); 
        } else {
            setIsLoggedIn(true); 
        }
    }, [user]); 

    //reload the page and delete the user auth cookie
    const handelSignout = () => {
        cookieService.deleteCookie('token');
        window.location.reload();
    }
    



    return (
        <div className={styles.sidebarContainer}>

            <h1 className={styles.logo}>NZPMC</h1>
            {   isLoggedIn ?
                <>
                    <SideBarUserDetails  user = {user} setUser ={setUser}/>

                    <button className={styles.signIn} onClick={(e) => {handelSignout()}}>Signout</button>
                </>
                :<Link className={styles.signIn} to='../signin'>Sign in</Link>
            }
        </div>
    );
}





export default SideBar;