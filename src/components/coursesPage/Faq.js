import React, { useState } from 'react';

// Styles
import styles from "../../styles/coursesPage/Faq.module.css";

// Data
import faqData from "../../data/faqData.json";


const Faq = () => {

    const [selectedFaqs, setSelectedFaqs] = useState([]);

    const handleFaqClick = (faqIndex) => {
        if(selectedFaqs.includes(faqIndex)) {
            const filteredFaqs = selectedFaqs.filter(item => item !== faqIndex);
            setSelectedFaqs(filteredFaqs);
            return
        }
        setSelectedFaqs(prev => [...prev, faqIndex]);
    }


    return (
        <div className={`main-container ${styles.faqContainer}`}>
            <h1 className={`main-heading ${styles.faqHeading}`}>F.A.Qs</h1>
            <div className={styles.qaContainer}>
                {faqData.faqData.map((item, index) => (
                    <div key={index} className={styles.qaPair}>
                        <div className={styles.question}>
                            <h2>{item.question}</h2>
                            <i 
                                className={`fas fa-chevron-down ${selectedFaqs.includes(index) ? styles.chevronActive : ""}`}
                                onClick={() => handleFaqClick(index)}
                                ></i>
                        </div>
                        <div className={`${styles.answer} ${selectedFaqs.includes(index) ? styles.answerActive : ""}`}>
                            <p>{item.answer}</p>
                        </div>    
                    </div>
                ))}

            </div>
        </div>
    );
}
 
export default Faq;