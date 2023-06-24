import React from 'react';

// Styles
import styles from "../styles/WelcomePage.module.css";

// Components
import WelcomeBanner from '../components/WelcomeBanner';
import Courses from '../components/Courses';
import Features from '../components/Features';
import StoriesDisplay from '../components/StoriesDisplay';
import InviteCard from '../components/InviteCard';
import Footer from '../components/Footer';


const WelcomePage = () => {
    return (
        <div className={styles.welcomePage}>
            <WelcomeBanner />
            <Courses />
            <Features />
            <StoriesDisplay />
            <InviteCard />
            <Footer />
        </div>
    );
}
 
export default WelcomePage;