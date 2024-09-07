import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>Tell us how we can help you</div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.formBody}>
      <div className={styles.inputSection}>
        <div className={styles.inputGroup}>
          <div className={styles.label}>Full name</div>
          <div className={styles.inputBox} />
        </div>
      </div>
        <div className={styles.inputSection}>
        <div className={styles.inputGroup}>
          <div className={styles.label}>Email</div>
          <div className={styles.inputBox} />
          </div>
        </div>
        <div className={styles.inputSection}>
        <div className={styles.inputGroup}>
          <div className={styles.label}>Phone number</div>
          <div className={styles.inputBox} />
        </div>
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.label}>Related to-</div>
          <div className={styles.radioButtons}>
            <div className={styles.radioOption}>
              <div className={styles.radioSelected} />
              <div className={styles.radioLabel}>Bootcamps</div>
            </div>
            <div className={styles.radioOption}>
              <div className={styles.radioUnselected} />
              <div className={styles.radioLabel}>Collaboration</div>
            </div>
            <div className={styles.radioOption}>
              <div className={styles.radioUnselected} />
              <div className={styles.radioLabel}>Others</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.messageSection}>
        <div className={styles.label}>Message</div>
        <div className={styles.messageBox}>
          <div className={styles.messageText}>I’m interested to know more about...</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.emailInfo}>You can also email us at arvix@gmail.com</div>
        <div className={styles.sendButton}>
          <div className={styles.sendText}>Send Message
            <div className={styles.arrowIcon}><img src='images/send-arrow.png'/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
