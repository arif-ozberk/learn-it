import React, { useContext } from 'react';

// Styles
import styles from "../../styles/coursesPage/BundleBanner.module.css";

// Images
import klarnaLogo from "../../images/klarna-logo.png";


const BundleBanner = () => {

    return (
        <div className={styles.bundleBannerContainer}>
            <div className={styles.bundleLeft}>
                <h1>Save 15%<br />Proofreader And Editor<br />Course Bundle</h1>
                <ul>
                    <li><i className='fas fa-arrow-right'></i>Save 15% on our Becoming A Proofreader and Becoming An Editor courses</li>
                    <li><i className='fas fa-arrow-right'></i>Guaranteed work with our partner</li>
                    <li><i className='fas fa-arrow-right'></i>One-on-one support from expert tutors</li>
                    <li><i className='fas fa-arrow-right'></i>Developed by our industry leading editorial team</li>
                    <li><i className='fas fa-arrow-right'></i>Go from beginner to confident trained professional</li>
                </ul>

                <div className={styles.priceButtons}>
                    <div className={styles.courseButtons}>
                        <a className={styles.learnMoreButton} >Learn More</a>
                        <a className={styles.buyNowButton} >Buy Now</a>
                    </div>
                    <div className={styles.prices}>
                        <p>$799</p>
                        <p>$679</p>
                    </div>
                </div>

                <p>Buy now pay later with <img src={klarnaLogo} alt="klarna-logo-img" /></p>
            </div>

            <div className={styles.bundleRight}>
                <img src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="bundle-banner-img" />
            </div>
        </div>
    );
}
 
export default BundleBanner;