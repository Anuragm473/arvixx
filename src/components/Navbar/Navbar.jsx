import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoWrapper}>
                        <img className={styles.logoImage} src='images/icon.png' alt="Logo" />
                    </div>
                    <div className={styles.logoText}>ARVIX</div>
                </div>

                <div className={styles.navActionContainer}>
                    <div className={styles.navContainer}>
                        <div className={styles.bootcampButton}>
                            <div className={styles.bootcampIndicator}></div>
                            <div className={styles.bootcampText}>Bootcamps</div>
                            <div className={styles.arrow}><img src='images/navdown.svg' alt="Arrow"/></div>
                        </div>
                        <div className={styles.navItem}>Events</div>
                        <div className={styles.navItem}>About</div>
                        <div className={styles.navItem}>Blogs</div>
                    </div>
                    <div className={styles.actionContainer}>
                        <div className={styles.learnMoreButton}>
                            <div className={styles.learnMoreText}>Learn More</div>
                        </div>
                        <div className={styles.bookCallButton}>
                            <div className={styles.callIndicator}></div>
                            <div className={styles.bookCallText}>Book a Call</div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.navActionContainer1} ${isMenuOpen ? styles.showMenu : ''}`} style={{display:isMenuOpen?'block':'none'}}>
                    <div className={styles.navContainer}>
                        <div className={styles.bootcampButton}>
                            <div className={styles.bootcampIndicator}></div>
                            <div className={styles.bootcampText}>Bootcamps</div>
                            <div className={styles.arrow}><img src='images/navdown.svg' alt="Arrow"/></div>
                        </div>
                        <div className={styles.navItem}>Events</div>
                        <div className={styles.navItem}>About</div>
                        <div className={styles.navItem}>Blogs</div>
                    </div>
                    <div className={styles.actionContainer1} style={{display:isMenuOpen?'block':'none'}}>
                        <div className={styles.learnMoreButton}>
                            <div className={styles.learnMoreText}>Learn More</div>
                        </div>
                        <div className={styles.bookCallButton}>
                            <div className={styles.callIndicator}></div>
                            <div className={styles.bookCallText}>Book a Call</div>
                        </div>
                    </div>
                </div>

                {/* Hamburger icon for small screens */}
                <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                    <ion-icon name="reorder-three-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
