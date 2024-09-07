import React from 'react';
import styles from './CommunitySection.module.css'; // Import the CSS module

const CommunitySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <div className={styles.tag}>
            <div className={styles.tagText}>Join excellence</div>
          </div>
          <div className={styles.title}>BEYOND WORKSHOPS</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.subTitle}>
              <span className={styles.subTitleText}>More than Just Workshops – A </span>
              <span className={styles.highlightText}>Supportive Community</span>
              <span className={styles.subTitleText}> for Lifelong Growth</span>
            </div>
            <div className={styles.paragraph}>
              At Arvix, we don’t just teach skills; we create a vibrant community where students can grow, connect, and collaborate long after the bootcamps end.
            </div>
          </div>
          <div className={styles.joinButton}>
            <div className={styles.buttonIcon}></div>
            <div className={styles.buttonText}>Join Community</div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageOverlay}></div>
          <div className={styles.greenBubble}>
            <div className={styles.greenBubbleInner}></div>
            <div className={styles.greenBubbleText}>we talk growth</div>
          </div>
          <div className={styles.redBubble}>
            <div className={styles.redBubbleInner}></div>
            <div className={styles.redBubbleText}>Community that helps</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
