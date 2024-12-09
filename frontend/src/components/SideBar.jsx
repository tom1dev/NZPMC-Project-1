import styles from '../styles/SideBar.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cookieService from '../services/cookieService';
import userService from '../services/userService';

const SideBar = ({user, setUser}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [editUserdetails, setEditUserDetails] = useState(false);
    const [userEdittedName, setUserEdittedName] = useState("");


    useEffect(() => {

        if (!user || user.length < 1) {
            setIsLoggedIn(false); 
        } else {
            setUserEdittedName(user.name);
            setIsLoggedIn(true); 
        }
    }, [user]); 

    const handelSignout = () => {
        console.log("Signout Clicked");
        cookieService.deleteCookie('token');
        window.location.reload();


    }
    
    const handleEditName = (e) => {
        setUserEdittedName(e.target.value);



    }

    const handleEdit = () => {
        console.log("Edit Clicked");
        setEditUserDetails(!editUserdetails);
    }

    const handleSave  = async() => { 
        console.log("Save Clicked");
            
        try {
            const res = await userService.updateUser(user.id, {name: userEdittedName});
            setUser(user => ({...user, name: userEdittedName}));
            console.log('User updated:', res);
        } catch (error) {
            console.log('Error updating user:', error);
        }

        setEditUserDetails(!editUserdetails);
    }
    
    const handleEditCancel = () => {
        console.log("Cancel Clicked");
        setEditUserDetails(!editUserdetails);
        setUserEdittedName(user.name);
    }


    return (
        <div className={styles.sidebarContainer}>

            
            <h1 className={styles.logo}>NZPMC</h1>
            {   isLoggedIn ?
                <>
                    <div className={styles.userInfo}>
                        



                        <h3 className={styles.userInfoTitle}>Account Details</h3>
                        <h4 className={styles.userParramTitle}>Name</h4>
                        <input className={editUserdetails?  styles.userInput : styles.userParram } value={userEdittedName} onChange={(e) => {handleEditName(e)}} disabled={!editUserdetails}/>
                        <h4 className={styles.userParramTitle}>Email</h4>
                        <p className={styles.userParram}>{user.email}</p>

                        <div className={styles.buttonContainer}>
                            {editUserdetails ? 
                            <>
                                    <button className={styles.userSaveButton} onClick={(e)=>{handleSave()}}>save</button>
                                    <button className={styles.userCancelButton} onClick={(e)=>{handleEditCancel()}}>cancel</button>
                            </>
                            : <button className={styles.userEditButton} onClick={(e)=>{handleEdit()}}>edit</button>}
                        </div>

                    </div>

                    <button className={styles.signIn} onClick={(e) => {handelSignout()}}>Signout</button>
                </>
                :<Link className={styles.signIn} to='signin'>Sign in</Link>
                


            }
        </div>
    );
}


export default SideBar;