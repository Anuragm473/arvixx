import React from 'react';
import styles from './Component.module.css'; // Import the CSS Module

const Component = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.header}>
                    <div className={styles.learnButton}>
                        <div className={styles.buttonBackground}></div>
                        <div className={styles.buttonText}>Learn with us</div>
                    </div>
                    <div className={styles.skillsHeader}>
                        Skills that Matters
                    </div>
                </div>
                <div className={styles.description}>
                    <span>Unlock your potential with our comprehensive bootcamps, where we cover </span>
                    <span className={styles.essentialTools}>50+ essential</span>
                    <span> tools </span>
                </div>
            </div>
            <div className={styles.cardContainer}>
                {/* Add your card components here */}
            </div>
        </div>
    );
};

export default Component;
