import React, { useContext } from 'react';

// Styles
import styles from "../styles/CoursesPage.module.css";

// Components
import CourseCard from '../components/coursesPage/CourseCard';
import BundleBanner from '../components/coursesPage/BundleBanner';
import InviteCard from '../components/InviteCard';
import Footer from '../components/Footer';

// Data
import courseData from "../data/courseData.json";

// Context
import { mainContext } from '../context/mainContext';


const CoursesPage = () => {

    const { setProofreader, setEditor, setCommunication, setFormatting } = useContext(mainContext);

    


    return (
        <div className={`${styles.coursesPageContainer}`}>
            <div className={`${styles.pageHeadings} main-container`}>
                <h1 className={`main-heading`}>The Right Course, Right Now</h1>
                <h2 className={`small-heading`}>Absolute beginner? Want to polish existing skills? A Learn.it course combines expert content and outstanding support to set you on a new path.</h2>
            </div>
            <div className={`${styles.coursesContainer} main-container`}>
                <div className={styles.coursesRow}>
                    <CourseCard 
                        courseTitle={courseData.courses.proofreader.courseTitle}
                        price={courseData.courses.proofreader.price}
                        courseImage={courseData.courses.proofreader.courseImage}
                        specs={courseData.courses.proofreader.specs}
                        courseSetter={setProofreader}
                    />

                    <CourseCard 
                        courseTitle={courseData.courses.editor.courseTitle}
                        price={courseData.courses.editor.price}
                        courseImage={courseData.courses.editor.courseImage}
                        specs={courseData.courses.editor.specs}
                        courseSetter={setEditor}
                    />
                </div>

                <BundleBanner />

                <div className={styles.coursesRow}>
                    <CourseCard
                        courseTitle={courseData.courses.communication.courseTitle}
                        price={courseData.courses.communication.price}
                        courseImage={courseData.courses.communication.courseImage}
                        specs={courseData.courses.communication.specs}
                        courseSetter={setCommunication}
                    />

                    <CourseCard
                        courseTitle={courseData.courses.formatting.courseTitle}
                        price={courseData.courses.formatting.price}
                        courseImage={courseData.courses.formatting.courseImage}
                        specs={courseData.courses.formatting.specs}
                        courseSetter={setFormatting}
                    />
                </div>
            </div>

            <InviteCard />
            <Footer />
        </div>
    );
}
 
export default CoursesPage;