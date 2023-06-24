import React, { useContext, useEffect, useState } from 'react';

// Styles
import styles from "../styles/CourseInfoPage.module.css";

// Components
import StudentRatings from '../components/coursesPage/StudentRatings';
import Faq from '../components/coursesPage/Faq';
import Footer from "../components/Footer";

// Images
import klarnaLogo from "../images/klarna-logo.png";

// Data
import courseData from "../data/courseData.json";

// Context
import { mainContext } from '../context/mainContext';


const CourseInfoPage = () => {

    const { selectedCourse, setSelectedCourse } = useContext(mainContext);
    
    const [data, setData] = useState({});

    // Setting data based on the clicked course type
    useEffect(() => {

        if (selectedCourse === "proofreader") {
            setData(courseData.courses.proofreader);
        }
        else if (selectedCourse === "editor") {
            setData(courseData.courses.editor);
        }
        else if (selectedCourse === "communication") {
            setData(courseData.courses.communication);
        }
        else if (selectedCourse === "formatting") {
            setData(courseData.courses.formatting);
        }
    }, [selectedCourse]);  // Updating course type data on every course clcik change



    // Module info expand animation function
    const [selectedModules, setSelectedModules] = useState([]);

    const handleModuleClick = (moduleIndex) => {
        if(selectedModules.includes(moduleIndex)) {       // If clicked one is already open then we remove it with filter to close
            const filteredModules = selectedModules.filter(item => item !== moduleIndex);
            setSelectedModules(filteredModules);
            return;
        }
        setSelectedModules(prev => [...prev, moduleIndex]);
    }

    return (
        <div className={styles.CourseInfoPageContainer}>
            <div className={`main-container ${styles.courseCard}`}>
                <div className={styles.cardContext}>
                    <h1>{data.courseTitle}</h1>
                    <ul>
                        {data.specs?.map((item, index) => (
                            <li key={index} ><i className='fas fa-arrow-right'></i>{item}</li>
                        ))}
                    </ul>
                    <div className={styles.pricingContainer}>
                        <button>Buy Now</button>
                        <p>${data.price}</p>
                    </div>
                </div>
                <img src={data.courseImage} alt="course-card-image" />
            </div>

            <StudentRatings />

            <div className={`main-container ${styles.infoContext}`}>
                <div className={styles.contextLeft}>
                    <h1 className={`main-heading`}>About The Course</h1> 
                    <p>{data.about}</p>
                    <h1 className={`main-heading`}>Guaranteed Work</h1>
                    <p>{data.guaranteedWork}</p>
                    <div className={styles.contextButtons}>
                        <button>Buy Now</button>
                        <button>Try For Free</button>
                    </div>
                </div>
                <div className={styles.contextRight}>
                    <h1 className={`main-heading`}>What’s Included?</h1> 
                    <p>{data.included}</p>
                    <h2>By completing {data.courseTitle}, you’ll gain:</h2>
                    <ul>
                        {data.gain?.map((item, index) => (
                            <li key={index} ><i className='fas fa-arrow-right'></i>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`main-container ${styles.infoContainerBanner}`}>
                <h1>Save 15% with the Proofreader & Editor Course Bundle.</h1>
                <h2>Give your new freelance career a boost by purchasing the Proofreader & Editor Course Bundle.</h2>
                <p>Buy now pay later with <img src={klarnaLogo} alt="klarna-logo-img" /></p>
                <div className={styles.bundlePricing}>
                    <button>Buy Now</button>
                    <h3><span>$799</span> $679</h3>
                </div>
            </div>

            <div className={`main-container ${styles.curriculumContainer}`}>
                <h1 className={`main-heading ${styles.curriculumHeading}`}>Curriculum</h1>
                <div className={styles.modulesContainer}>

                    {data.curriculum?.map((item, index) => (
                        <div key={index} className={styles.module}>
                            <div className={styles.moduleTitle}>
                                <h2>{item.moduleTitle}</h2>
                                <i 
                                    onClick={() => handleModuleClick(index)} 
                                    className={`fas fa-chevron-down ${selectedModules.includes(index) ? styles.chevronActive : ""}`}
                                ></i>
                            </div>
                            <div className={`${styles.moduleInfo} ${selectedModules.includes(index) ? styles.moduleInfoActive : ""}`}>
                                <p>{item.moduleInfo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Faq />

            <Footer />

        </div>
    );
}
 
export default CourseInfoPage;