import React from 'react';

// Styles
import styles from "../styles/aboutUsPage/AboutUsPage.module.css";

// Components
import InviteCard from '../components/InviteCard';
import Footer from '../components/Footer';


const AboutUsPage = () => {
    return (
        <div className={styles.aboutUsPage}>
            <div className={`main-container ${styles.aboutUsContext}`}>
                <h1 className={`main-heading ${styles.aboutUsMainHeading}`}>We are Learn.it</h1>
                <h2 className={`small-heading ${styles.aboutUsSmallHeading}`}>Taking a course with us means taking the first step towards a bright new career.</h2>
                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <h3>Empowering Learners Worldwide</h3>
                <p>Welcome to Learn.it, your premier destination for online learning! At Learn.it, we believe in the power of knowledge and its ability to transform lives. Our mission is to provide high-quality online courses that empower learners to acquire new skills, expand their horizons, and reach their full potential.</p>

                <h3>Expert Instructors, Exceptional Courses</h3>
                <p>With a diverse range of courses spanning various industries and disciplines, we strive to meet the needs of learners from all walks of life. Whether you're a professional looking to upskill, a student seeking additional resources, or an avid learner with a passion for personal growth, Learn.it has the perfect course for you.</p>

                <h3>Flexible Learning for Every Schedule</h3>
                <p>What sets Learn.it apart is our commitment to excellence in education. We handpick experienced instructors who are experts in their fields, ensuring that you receive top-notch instruction from industry leaders. Our courses are thoughtfully designed, combining interactive video lessons, engaging assignments, and practical exercises to maximize your learning experience.</p>

                <h3>Building a Supportive Learning Community</h3>
                <p>At Learn.it, we understand that everyone learns at their own pace. That's why our courses are self-paced, allowing you to learn whenever and wherever it's convenient for you. We also provide a supportive online community, where you can connect with fellow learners, share insights, and collaborate on projects.</p>

                <h3>Your Path to Lifelong Learning Begins Here</h3>
                <p>Your success is our priority. We're dedicated to helping you achieve your learning goals and thrive in your chosen endeavors. Whether you're looking to advance your career, explore new interests, or simply expand your knowledge, Learn.it is here to guide you on your learning journey Join thousands of learners who have already benefited from our courses and embark on your path to lifelong learning with Learn.it. Start discovering new possibilities today!"</p>
            </div>

            <InviteCard />

            <Footer />

        </div>
    );
}
 
export default AboutUsPage;