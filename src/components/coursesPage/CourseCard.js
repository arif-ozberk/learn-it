import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../../styles/coursesPage/CourseCard.module.css";

// Images
import klarnaLogo from "../../images/klarna-logo.png";


const CourseCard = ({ courseTitle, price, courseImage, specs, courseSetter }) => {
    return (
        <div className={styles.courseCard}>

            <div className={styles.hoverAnimation}>
                <h1>{courseTitle}</h1>
                <ul>
                    {specs.map((item, index) => (
                        <li key={index}><i className='fas fa-arrow-right'></i>{item}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.cardTop}>
                <h1>{courseTitle}</h1>
                <img src={courseImage} alt="course-card-img" />
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.rowTop}>
                    <h2>${price}</h2>
                    <div className={styles.courseButtons}>
                        <Link
                            to='/courseInfoPage' 
                            className={styles.learnMoreButton}
                            onClick={courseSetter}
                        >Learn More</Link>
                        <Link
                            to='/courseInfoPage' 
                            className={styles.buyNowButton}
                            onClick={courseSetter}
                        >Buy Now</Link>
                    </div>
                </div>
                <p>Buy now, pay later with <img src={klarnaLogo} alt="klarna-logo-img" /></p>
            </div>
        </div>
    );
}
 
export default CourseCard;