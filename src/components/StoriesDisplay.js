import React from 'react';

// Styles
import styles from "../styles/StoriesDisplay.module.css";


const StoriesDisplay = () => {
    return (
        <div className={`main-container ${styles.storiesContainer}`}>
            <h1 className={`main-heading`}>Student Success Stories</h1>
            <h2 className={`small-heading ${styles.storySmallHeading}`}>Take a look at the journeys of our former students.</h2>
            <div className={styles.storyCardContainer}>
                <div className={styles.storyCard}>
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="story-img" />
                    <h2>Miranda</h2>
                    <h1>Passive Income</h1>
                    <p>To supplement the income from her day job, Hayley likes to work on freelance proofreading assignments. This flexible work can be done from home, so there’s more time to spend with family and more money in the bank.</p>
                    <p><em>“I now get to work from home doing a skilled job that I love. I can work around my toddler and earn extra money. And I hope it will open doors in an industry that has always intrigued me.”</em></p>
                    <a href="#">Read More</a>
                </div>
                <div className={styles.storyCard}>
                    <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1021&q=80" alt="story-img" />
                    <h2>Jacob</h2>
                    <h1>Working From Home</h1>
                    <p>To supplement the income from her day job, Hayley likes to work on freelance proofreading assignments. This flexible work can be done from home, so there’s more time to spend with family and more money in the bank.</p>
                    <p><em>“I now get to work from home doing a skilled job that I love. I can work around my toddler and earn extra money. And I hope it will open doors in an industry that has always intrigued me.”</em></p>
                    <a href="#">Read More</a>
                </div>  
                <div className={styles.storyCard}>
                    <img src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" alt="story-img" />
                    <h2>Ashley</h2>
                    <h1>Student</h1>
                    <p>To supplement the income from her day job, Hayley likes to work on freelance proofreading assignments. This flexible work can be done from home, so there’s more time to spend with family and more money in the bank.</p>
                    <p><em>“I now get to work from home doing a skilled job that I love. I can work around my toddler and earn extra money. And I hope it will open doors in an industry that has always intrigued me.”</em></p>
                    <a href="#">Read More</a>
                </div>  
            </div>
            <a className={styles.seeStoriesButton}>Read more stories <i className='fas fa-chevron-right'></i></a>
        </div>
    );
}
 
export default StoriesDisplay;