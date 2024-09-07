import React from 'react';
import styles from './BootcampSection.module.css';
import BootCamp from '../BootCamp/BootCamp';
import Comingsoon from '../comingsoon/Comingsoon';

const BootcampSection = () => {
    return (
        <div className={styles.container1}>
            <video autoPlay muted loop className={styles.backgroundVideo}>
                <source src="../../../public/video/-4f6d-4e2c-9446-b55c5fa19b8a.mp4" type="video/mp4" />
            </video>
            <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.tagContainer}>
                    <div className={styles.bootcampTag}>
                        <div className={styles.bootcampLabel}>Bootcamps</div>
                    </div>
                    <div className={styles.workshopTag}>
                        <div className={styles.workshopLabel}>Workshops</div>
                    </div>
                </div>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Explore our upcoming bootcamps</div>
                    <div className={styles.subtitle}>We equip you with essential, market-relevant skills, preparing you to thrive in today’s technology-driven world. Explore our upcoming boot camps now!</div>
                </div>
            </div>
            <div className={styles.cardContainer}>
            <BootCamp/>
            <BootCamp/>
            <BootCamp/>
            </div>
            <Comingsoon/>
            </div>
        </div>

    );
};

export default BootcampSection;
