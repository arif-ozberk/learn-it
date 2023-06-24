import React from 'react';

// Styles
import styles from "../styles/guaranteedWorkPage/GuaranteedWorkPage.module.css";

// Components
import Faq from '../components/coursesPage/Faq';
import Footer from '../components/Footer';


const GuaranteedWorkPage = () => {
    return (
        <div className={styles.guaranteedWorkPage}>
            <div className={`main-container ${styles.guaranteedContext}`}>
                <h1 className={`main-heading ${styles.guaranteedHeading}`}>Guaranteed Work</h1>
                <p className='small-heading'>Whether you’re just starting out as a freelancer or hoping to expand your client base, you’ll love the idea of guaranteed work with our partner company, Proofed.</p>
                <p className='small-heading'>Becoming A Proofreader: If you pass the final assignment with a distinction (80% or more), you can begin working on a trial basis with Proofed. Expert feedback on the documents you proofread will allow you to continue to hone the skills you developed in the course. As your confidence gradually builds, you’ll soon be ready to take on more complex documents and greater volumes of work.</p>
                <p className='small-heading'>Becoming An Editor: Passing this course and receiving a distinction for Becoming A Proofreader means you’ll be fast-tracked to a greater variety of Proofed opportunities. This often means a higher rate of pay and the chance to tackle more in-depth editorial assignments in academic, business or creative writing.</p>
                <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="work-img" />
            </div>

            <Faq />

            <Footer />
        </div>
    );
}
 
export default GuaranteedWorkPage;