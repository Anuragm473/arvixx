import React from 'react'
import styles from './ContactUs.module.css'

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="https://via.placeholder.com/467x336" alt="Placeholder" />
      <div className={styles.innerContainer}>
        <div className={styles.textSection}>
          <div className={styles.connectBadge}>
            <div className={styles.connectText}>LET’S CONNECT</div>
          </div>
          <div className={styles.heading}>Get in Touch with Arvix</div>
          <div className={styles.description}>
            Whether you have questions about our bootcamps, partnerships, or upcoming events, we’re here to help! Reach out to us for any inquiries or to discuss how Arvix can help you or your institution equip students with essential skills for the future.
          </div>
          {/* Repeat for checkbox items */}
          <div className={styles.checkItem}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxFill}></div>
            </div>
            <div className={styles.description}>Have questions about our bootcamps, partnerships, or events? We’re here to help!</div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          {/* Repeat for input fields */}
          <div className={styles.inputField}>
            <label>Full Name</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}
