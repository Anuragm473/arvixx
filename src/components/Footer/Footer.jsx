import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <div className={styles.title}>LIVE LEARNING</div>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <div className={styles.iconInner}></div>
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>SKILL 4.0</div>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <div className={styles.iconInner}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.column}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <img className={styles.logoImg1} src="https://via.placeholder.com/28x29" alt="Logo" />
                <img className={styles.logoImg2} src="https://via.placeholder.com/13x18" alt="Sublogo" />
              </div>
              <div className={styles.companyName}>ARVIX</div>
            </div>
            <div className={styles.tagline}>Shaping Tomorrow’s Innovators, Today</div>
          </div>
          <div className={styles.linkSection}>
            <div className={styles.sectionTitle}>Bootcamps</div>
            <div className={styles.links}>
              <div>Skill 4.0</div>
              <div>No code</div>
              <div>Creativity</div>
              <div>Editing</div>
            </div>
          </div>
          <div className={styles.linkSection}>
            <div className={styles.sectionTitle}>Workshops</div>
            <div className={styles.links}>
              <div>The new Industry</div>
              <div>No code</div>
              <div>Productive Tool</div>
              <div>Understanding Skill4.0</div>
            </div>
          </div>
          <div className={styles.linkSection}>
            <div className={styles.sectionTitle}>Company</div>
            <div className={styles.links}>
              <div>About us</div>
              <div>Blog</div>
            </div>
          </div>
          <div className={styles.linkSection}>
            <div className={styles.sectionTitle}>Resources</div>
            <div className={styles.links}>
              <div>Community</div>
              <div>Contact</div>
              <div>Privacy Policy</div>
              <div>Terms of service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
