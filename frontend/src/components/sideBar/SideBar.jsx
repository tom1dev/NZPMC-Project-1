
import styles from '../../styles/SideBar.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cookieService from '../../services/cookieService.js';
import SideBarUserDetails from './SideBarUserDetails.jsx';
import { useNavigate  } from 'react-router-dom';


const SideBar = ({user, setUser}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();


    //updates sidebar elements depending on user login status
    useEffect(() => {
        console.log();
        if (!user ||!user.name || user.length < 1) {
            setIsLoggedIn(false); 
        } else {
            setIsLoggedIn(true); 
        }
    }, [user]); 

    //reload the page and delete the user auth cookie
    const handelSignout = () => {
        cookieService.deleteCookie('token');
        if(window.location.pathname === "/admin"){
            navigate("/");
        }else{
            navigate(0);
        }
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