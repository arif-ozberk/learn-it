import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/Footer.module.css";


const Footer = () => {
    return (
        <div className={`main-container ${styles.footerContainer}`}>
            <h1>Learn.<span>it</span></h1>
            <div className={styles.footerTop}>
                <ul>
                    <li><Link to='/coursesPage'>Courses</Link></li>
                    <li><Link to='/storiesPage'>Stories</Link></li>
                    <li><Link to='/guaranteedWorkPage'>Guaranteed Work</Link></li>
                    <li><Link to='/aboutUsPage'>About Us</Link></li>
                </ul>
                <ul>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Affiliates</a></li>
                </ul>
                <div className={styles.contactUs}>
                    <h2>Contact Us</h2>
                    <p>Live Chat</p>
                    <p>+90 535 24 08</p>
                    <p>info@learnit.com</p>
                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/arif.ozberk.24/" target='_blank'><i className='fa-brands fa-instagram'></i></a>
                        <a href="https://www.instagram.com/arif.ozberk.24/" target='_blank'><i className='fa-brands fa-twitter'></i></a>
                        <a href="https://www.instagram.com/arif.ozberk.24/" target='_blank'><i className='fa-brands fa-facebook'></i></a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2023 Learn.it | All Rights Reserved</p>
            </div>
        </div>
    );
}
 
export default Footer;