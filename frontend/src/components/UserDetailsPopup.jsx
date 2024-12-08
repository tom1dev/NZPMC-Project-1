import style from '../styles/UserPopup.module.css';


const UserDetailsPopup = ({ showPopup, togglePopup, user}) => {

    return (
        <div className={style.popupWindow}>
            <div className={style.popupContainer}>
                
                    <h className={style.popupTitle}>User Details</h>
                    <h2 className={style.popupName}>Name: {user.name}</h2>
                    <h2 className={style.popupEmail}>Email: {user.email}</h2>
                    <h2 className={style.popupEmail}>Concerts:</h2>


                    <button className={style.popupCloseButton} onClick={togglePopup}>Close</button>
            </div>

        </div>

    );





}

export default UserDetailsPopup;