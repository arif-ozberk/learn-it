import React from 'react';

// Styles
import styles from "../styles/Features.module.css";

// Images
import knowledgeImage from "../images/knowledge-img.svg";
import supportImage from "../images/support-img.svg";
import moneyImage from "../images/money-img.svg";
import careerImage from "../images/career-img.svg";
import timeImage from "../images/time-img.svg";
import chanceImage from "../images/chance-img.svg";


const Features = () => {
    return (
        <div className={`main-container ${styles.featuresContainer}`}>
            <h1 className='main-heading'>It's Time To Learn.<span>it</span></h1>
            <h2 className={`small-heading ${styles.featuresSmallHeading}`}>Providing industry-leading courses that deliver a new way of working.</h2>
            <a className='explore-button' href="#">Explore Now</a>
            <div className={styles.contextContainer}>
                <div className={styles.context}>
                    <img src={knowledgeImage} alt="features-img" />
                    <p>Leading courses providing comprehensive knowledge and training.</p>
                </div>
                <div className={styles.context}>
                    <img src={supportImage} alt="features-img" />
                    <p>Enjoy outstanding support, expert guidance, and one-on-one feedback.</p>
                </div>
                <div className={styles.context}>
                    <img src={moneyImage} alt="features-img" />
                    <p>Learn new skills that let you balance earning with living.</p>
                </div>
                <div className={styles.context}>
                    <img src={careerImage} alt="features-img" />
                    <p>Enjoy the freedom of a career that adapts itself to your priorities.</p>
                </div>
                <div className={styles.context}>
                    <img src={timeImage} alt="features-img" />
                    <p>Work for yourself and choose how you spend your time.</p>
                </div>
                <div className={styles.context}>
                    <img src={chanceImage} alt="features-img" />
                    <p>Kick off your new career with opportunities from our partners.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Features;