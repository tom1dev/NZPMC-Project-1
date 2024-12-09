import styles from '../styles/SideBar.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const SideBar = ({user}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {

        if (!user || user.length < 1) {
            setIsLoggedIn(false); 
        } else {
            setIsLoggedIn(true); 
        }
    }, [user]); 




    return (
        <div className={styles.sidebarContainer}>
            <h1 className={styles.logo}>NZPMC</h1>
            {   isLoggedIn ?
                
                <div>
                    <div className={styles.userInfo}>
                        <h3 className={styles.userInfoTitle}>Account Details</h3>
                        <p>Name:</p>
                        <p>{user.name}</p>
                        <p>Email:</p>
                        <p>{user.email}</p>
                    </div>

                    <button className={styles.signIn}>Signout</button>
                </div>
                :<Link className={styles.signIn} to='signin'>Sign in</Link>
                


            }
        </div>
    );
}


export default SideBar;