import styles from './FeaturesSection.module.css'; // Import your CSS module

const FeaturesSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.featureBox}>
        <div className={styles.featureItem}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.title}>Live Workshops</div>
        </div>
        <div className={styles.description}>
          Engaging, interactive sessions that offer real-time learning experiences.
        </div>
      </div>

      <div className={`${styles.featureBox} ${styles.withBorders}`}>
        <div className={styles.featureItem}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.title}>Practical, Hands-On Learning</div>
        </div>
        <div className={styles.description}>
          Every session is designed to offer real-world applications and problem-solving opportunities.
        </div>
      </div>

      <div className={styles.featureBox}>
        <div className={styles.featureItem}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.title}>Future-Ready Learners</div>
        </div>
        <div className={styles.description}>
          Equipping students with the tools they need to thrive in a technology-driven world.
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
