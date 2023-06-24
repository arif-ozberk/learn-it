import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/WelcomeBanner.module.css";


const WelcomeBanner = () => {
    return (
        <div className={`main-container ${styles.welcomeBannerContainer}`}>
            <h1>Kick-start your new career<br />with our expert courses.</h1>
            <Link to='/coursesPage' className='explore-button'>Explore Now</Link>
        </div>
    );
}
 
export default WelcomeBanner;