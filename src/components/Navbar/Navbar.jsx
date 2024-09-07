import React from 'react';
import styles from './Navbar.module.css';
import logo from './../../../public/images/icon.png'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoWrapper}>
                        <img className={styles.logoImage} src={logo} alt="Logo" />
                    </div>
                    <div className={styles.logoText}>ARVIX</div>
                </div>
                <div className={styles.navContainer}>
                    <div className={styles.bootcampButton}>
                        <div className={styles.bootcampIndicator}></div>
                        <div className={styles.bootcampText}>Bootcamps</div>
                        <div className={styles.arrow}></div>
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
        </div>
    );
};

export default Navbar;

