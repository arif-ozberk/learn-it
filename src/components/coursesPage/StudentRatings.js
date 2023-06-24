import React from 'react';

// Styles
import styles from "../../styles/coursesPage/StudentRatings.module.css";


const StudentRatings = () => {
    return (
        <div className={`main-container ${styles.ratingsContainer}`}>
            <h1 className={`main-heading ${styles.ratingsHeading}`}>What Our Students Are Saying</h1>
            <div className={styles.allRatings}>
                <div className={styles.ratingContainer}>
                    <div className={styles.stars}>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <p>"I absolutely loved the course! The content was well-structured, and the instructor explained complex concepts in a simple and engaging manner. The interactive quizzes and practical exercises helped me reinforce my learning. Highly recommended!"</p>
                    <h2>-John</h2>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="rating-img" />
                </div>

                <div className={styles.ratingContainer}>
                    <div className={styles.stars}>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fa-regular fa-star'></i>
                    </div>
                    <p>"This course exceeded my expectations. The instructor's expertise was evident throughout the lectures, and the course materials were comprehensive. I appreciated the flexibility of self-paced learning, and the support from the instructor and the online community was exceptional."</p>
                    <h2>-Linda</h2>
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" alt="rating-img" />
                </div>

                <div className={styles.ratingContainer}>
                    <div className={styles.stars}>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <p>"I'm so glad I enrolled in this course. The videos were of high quality, and the course was easy to navigate. The real-life examples and case studies provided valuable insights. The instructor's passion for the subject matter was contagious, making the learning experience enjoyable and motivating."</p>
                    <h2>-Daisy</h2>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="rating-img" />
                </div>

                <div className={styles.ratingContainer}>
                    <div className={styles.stars}>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <p>"I've taken several online courses, but this one stood out. The course content was relevant and up-to-date, ensuring I acquired the latest knowledge in the field. The interactive discussion forums allowed me to connect with fellow learners and share ideas. I feel more confident in applying what I've learned to my professional life."</p>
                    <h2>-Mike</h2>
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="rating-img" />
                </div>
            </div>

        </div>
    );
}
 
export default StudentRatings;