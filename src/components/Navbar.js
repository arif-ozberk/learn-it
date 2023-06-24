import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/Navbar.module.css";

// Components
import NavbarLinks from './NavbarLinks';

// Hooks
import { useScrollPosition } from '../hooks/useScrollPosition';


const Navbar = () => {

    const [isSidebarOn, switchIsSidebarOn] = useState(false);

    const handleHamburgerClick = () => {
        switchIsSidebarOn(isSidebarOn => !isSidebarOn);
    }

    const scrollPosition = useScrollPosition();


    return (
        <div className={`${styles.navbarContainer} ${scrollPosition > 80 ? styles.navbarShrink : ""}`}>
            <Link to='/learn-it' className={styles.navbarLogo}>Learn.<span>it</span></Link>
            <NavbarLinks switchIsSidebarOn={switchIsSidebarOn} isSidebarOn={isSidebarOn} />
            <div onClick={handleHamburgerClick} className={styles.hamburgerButton}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
 
export default Navbar;