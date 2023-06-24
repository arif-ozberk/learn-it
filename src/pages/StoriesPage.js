import React from 'react';

// Styles
import styles from "../styles/storiesPage/StoriesPage.module.css";

// Components
import Footer from '../components/Footer';
import StoryCard from '../components/storiesPage/StoryCard';
import InviteCard from "../components/InviteCard";

// Data
import storyData from "../data/storyData.json";


const StoriesPage = () => {
    return (
        <div className={`${styles.storiesPageContainer}`}>
            <div className='main-container'>
                <h1 className={`main-heading ${styles.storiesMainHeading}`}>Knowadays Success Stories</h1>
                <h2 className={`small-heading ${styles.storiesSmallHeading}`}>Wherever you are in life right now, there’s a Learn.it graduate who started from a similar place. Students and retirees, new parents, and career changers – they’ve all taken our courses and found new ways of working.</h2>
            </div>

            <div className={`main-container ${styles.storyContainer}`}>
                {storyData.storyData?.map((item, index) => (
                    <StoryCard 
                        key={index}
                        userImage={item.userImage} 
                        userName={item.userName} 
                        userTitle={item.userTitle} 
                        story={item.story} 
                    />
                ))}
            </div>

            <InviteCard />

            <Footer />
        </div>
    );
}
 
export default StoriesPage;