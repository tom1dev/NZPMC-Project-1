
import styles from '../styles/Landing.module.css'
import { useEffect,useState } from 'react';
import UserTableEntry from '../components/UserTableEntry'


const UserDisplay = () =>{
    const user = {
        name: "tom",
        email: "tom@gmail.com"
    }

    return(<>


        <div className={styles.eventsContainer}>

            <h2 className={styles.eventTitle}>Users</h2>
           
            <div className={styles.eventViewTitleBox}>
                <h2 className={styles.eventTitleName}>Name</h2>
                <h2 className={styles.eventTitleLocation}>Email</h2>
            </div>

            <UserTableEntry user = {user}/>
            <UserTableEntry user = {user}/>
            <UserTableEntry user = {user}/>
        </div>
    
    </>)

}


export default UserDisplay;