import React from 'react';

// Styles
import styles from "../../styles/storiesPage/StoryCard.module.css";


const StoryCard = ({ userName, userTitle, userImage, story }) => {
    return (
        <div className={styles.storyCard}>
            <img src={userImage} alt="story-user-img" />
            <h3>{userName}</h3>
            <h2>{userTitle}</h2>
            <p>{story}</p>
            <button>Read More</button>
        </div>
    );
}
 
export default StoryCard;