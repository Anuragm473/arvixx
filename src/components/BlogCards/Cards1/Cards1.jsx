import React from 'react';
import styles from './Cards1.module.css';

const Cards1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageSmall}
          src="images/blog1.png"
          alt="Small Placeholder"
        />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.tagContainer}>
          <div className={styles.tag}>
            <div className={styles.tagText}>Tech</div>
          </div>
          <div className={styles.tag}>
            <div className={styles.tagText}>No-code</div>
          </div>
        </div>
        <div className={styles.heading}>Code vs No-code</div>
        <div className={styles.readContainer}>
          <div className={styles.readTime}>
            <div className={styles.readContent}>
              <div className={styles.icon}>
                <img src='images/clock2.svg'/>
              </div>
              <div className={styles.readText}>5m Read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards1;
