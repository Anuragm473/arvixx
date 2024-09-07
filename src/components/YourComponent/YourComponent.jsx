import React from 'react';
import styles from './YourComponent.module.css';
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import HostWorkshop from '../HostWorkshop/HostWorkshop';

const YourComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>THE ARVIX VALUES</div>
            </div>
            <div className={styles.subtitle}>
                <span style={{ color: '#0ACF83' }}>Shaping</span>
                <span style={{ color: 'black' }}> Tomorrow’s Innovators, Today</span>
            </div>
            <div className={styles.description}>
                <div className={styles.mission}>
                    <div className={styles.missionText}>
                        Our mission is to bridge the gap between traditional education and the fast-evolving demands of the modern workforce, ensuring every student is prepared for the challenges ahead.
                    </div>
                </div>
            </div>
            <FeaturesSection/>
            <HostWorkshop/>
        </div>
    );
};

export default YourComponent;
