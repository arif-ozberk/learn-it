import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/InviteCard.module.css";


const InviteCard = () => {
    return (
        <div className={`main-container ${styles.inviteCardContainer}`}>
            <i className='fas fa-chevron-down'></i>
            <h1>Start Your Journey</h1>
            <p>Sign up for no-strings-attached free trial today!</p>
            <Link to='/coursesPage'>Explore Now</Link>
        </div>
    );
}
 
export default InviteCard;