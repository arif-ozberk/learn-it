import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/Courses.module.css";

// Images
import klarnaLogo from "../images/klarna-logo.png";
import trustPilotImage from "../images/trust-pilot-img.png";

// Context
import { mainContext } from '../context/mainContext';


const Courses = () => {

    const { selectedCourse, setSelectedCourse, setProofreader, setEditor } = useContext(mainContext);


    return (
        <div className={`main-container ${styles.coursesContainer}`}>
            <h1 className={`main-heading`}>Our Most Popular Courses</h1>
            <h2 className={`small-heading ${styles.coursesSmallHeading}`}>World-class proofreading and editing courses with guaranteed work.</h2>
            <div className={styles.coursesTop}>
                <div className={styles.proofreaderCourse}>
                    <h1>Becoming A<br />Proofreader</h1>
                    <ul>
                        <li>Guaranteed work</li>
                        <li>Online course</li>
                    </ul>
                    <div className={styles.coursesTopInfo}>
                        <h3>$399</h3>
                        <div className={styles.courseButtons}>
                            <Link 
                                className={styles.learnMoreButton}
                                to='/courseInfoPage'
                                onClick={setProofreader}
                            >Learn More</Link>
                            <Link 
                                className={styles.buyNowButton}
                                to='/courseInfoPage'
                                onClick={setProofreader}
                            >Buy Now</Link>
                        </div>
                        <p>Buy now pay later with <img src={klarnaLogo} alt="klarna-logo-img" /></p>
                    </div>
                </div>

                <div className={styles.editingCourse}>
                    <h1>Becoming An<br />Editor</h1>
                    <ul>
                        <li>Great opportunities</li>
                        <li>Online course</li>
                    </ul>
                    <div className={styles.coursesTopInfo}>
                        <h3>$349</h3>
                        <div className={styles.courseButtons}>
                            <Link 
                                className={styles.learnMoreButton}
                                to='/courseInfoPage'
                                onClick={setEditor}
                            >Learn More</Link>
                            <Link 
                                className={styles.buyNowButton}
                                to='/courseInfoPage'
                                onClick={setEditor}
                            >Buy Now</Link>
                        </div>
                        <p>Buy now pay later with <img src={klarnaLogo} alt="klarna-logo-img" /></p>
                    </div>
                </div>

            </div>

            <div className={styles.bundleCourse}>
                <div className={styles.bundleCourseLeft}>
                    <h1>15% Off<br />Proofreader % Editor<br />Course Bundle</h1>
                    <ul>
                        <li>Becoming A Proofreader</li>
                        <li>Becoming An Editor</li>
                    </ul>
                </div>
                
                <div className={styles.bundleCourseInfo}>
                    <div className={styles.bundlePrice}>
                        <p>$799</p>
                        <p>$679</p>
                    </div>
                    <h2>The Bundle</h2>
                    <ul>
                        <li><i className='fas fa-arrow-right'></i>Guaranteed editing work with our partner.</li>
                        <li><i className='fas fa-arrow-right'></i>Industry leading courses developed by professionals.</li>
                        <li><i className='fas fa-arrow-right'></i>One-on-one support from our best-in-class tutor team.</li>
                    </ul>
                    <img src={trustPilotImage} alt="trust-pilot-img" />
                    <h4>Trust Score 4.6 | 316 Reviews</h4>
                    <div className={styles.courseButtons}>
                        <Link className={styles.learnMoreButton} to='/coursesPage' >Learn More</Link>
                        <Link className={styles.buyNowButton} to='/coursesPage' >Buy Now</Link>
                    </div>
                    <p>Buy now pay later with <img src={klarnaLogo} alt="klarna-logo-img" /></p>
                </div>
            </div>

            <Link 
                to='/coursesPage' 
                className={styles.seeCoursesButton}
            >See all courses <i className='fas fa-chevron-right'></i></Link>
        </div>
    );
}
 
export default Courses;