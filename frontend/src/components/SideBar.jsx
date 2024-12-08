import styles from '../styles/SideBar.module.css'
import { Link } from 'react-router-dom';


const SideBar = () => {
    const userinfo = {
        name: 'John Doe',
        email: 'tom@gmail.com'
    }
    const isLoggedIn = true;




    return (
        <div className={styles.sidebarContainer}>
            <h1 className={styles.logo}>NZPMC</h1>
            {   isLoggedIn ?
                <>
                    <div className={styles.userInfo}>
                        <h3 className={styles.userInfoTitle}>Account Details</h3>
                        <p>Name:</p>
                        <p>{userinfo.name}</p>
                        <p>Email:</p>
                        <p>{userinfo.email}</p>
                    </div>

                    <button className={styles.signIn}>Signout</button>
                </>
                :
                <Link className={styles.signIn} to='signin'>Sign in</Link>
                


            }
        </div>
    );
}


export default SideBar;