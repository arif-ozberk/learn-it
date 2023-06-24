import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/Navbar.module.css";


const NavbarLinks = ({ isSidebarOn, switchIsSidebarOn }) => {

    const handleCloseButton = () => {
        switchIsSidebarOn(false);
    }

    const closeSidebar = () => {
        switchIsSidebarOn(false);
    }


    return (
        <div className={`${styles.linksContainer} ${isSidebarOn ? styles.sidebarActive : ""}`}>
            <i onClick={handleCloseButton} className='fas fa-close'></i>
            <ul className={styles.navbarLinks}>
                <li><Link onClick={closeSidebar} to='/coursesPage'>Courses</Link></li>
                <li><Link onClick={closeSidebar} to='/storiesPage'>Stories</Link></li>
                <li><Link onClick={closeSidebar} to='/guaranteedWorkPage'>Guaranteed Work</Link></li>
                <li><Link onClick={closeSidebar} to='/aboutUsPage'>About Us</Link></li>
            </ul>
            <Link className={styles.exploreButton} to='/coursesPage'>Explore Now</Link>
        </div>
    );
}
 
export default NavbarLinks;