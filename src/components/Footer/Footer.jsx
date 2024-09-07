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
              <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Frame">
                  <path id="Vector" d="M33.5687 67.515C29.6666 53.8221 15.4002 39.6093 1.65573 35.7219C0.114757 35.2267 0.114757 34.1372 1.65573 33.6173C15.425 29.705 29.6666 15.5169 33.5935 1.79932C34.0161 0.288899 35.0351 0.288899 35.4576 1.79932C39.3597 15.5169 53.6261 29.705 67.3459 33.6173C68.8868 34.1125 68.8868 35.2267 67.3459 35.7219C53.6012 39.6093 39.3348 53.8221 35.4328 67.515C35.0102 69.0503 33.9912 69.0503 33.5687 67.515Z" fill="#0ACF83"/>
                  </g>
                  </svg>

              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>SKILL 4.0</div>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
              <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Frame">
                  <path id="Vector" d="M33.5687 67.515C29.6666 53.8221 15.4002 39.6093 1.65573 35.7219C0.114757 35.2267 0.114757 34.1372 1.65573 33.6173C15.425 29.705 29.6666 15.5169 33.5935 1.79932C34.0161 0.288899 35.0351 0.288899 35.4576 1.79932C39.3597 15.5169 53.6261 29.705 67.3459 33.6173C68.8868 34.1125 68.8868 35.2267 67.3459 35.7219C53.6012 39.6093 39.3348 53.8221 35.4328 67.515C35.0102 69.0503 33.9912 69.0503 33.5687 67.515Z" fill="#0ACF83"/>
                  </g>
                  </svg>

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
                <img className={styles.logoImg1} src="images/icon.png" alt="Logo" />
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
