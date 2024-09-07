import React from 'react'
import styles from './ContactUs.module.css'
import ContactForm from '../ContactForm/ContactForm'

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <img className={styles.contact1} src='images/contact1.png'/>
      <div className={styles.leftSection}>
        <div className={styles.letsConnect}>
          <div className={styles.connectText}>LET’S CONNECT</div>
        </div>
        <div className={styles.title}>Get in Touch with Arvix</div>
        <div className={styles.description}>
          Whether you have questions about our bootcamps, partnerships, or upcoming events, we’re here to help! Reach out to us for any inquiries or to discuss how Arvix can help you or your institution equip students with essential skills for the future.
        </div>
        <div className={styles.infoRow}>
          <div className={styles.icon}>
          <img src='images/check.svg'/>
          </div>
          <div className={styles.infoText}>
            Have questions about our bootcamps, partnerships, or events? We’re here to help!
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.icon}>
            <img src='images/check.svg'/>
          </div>
          <div className={styles.infoText}>
            Reach out for any inquiries about our programs and offerings.
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.icon}>
          <img src='images/check.svg'/>
          </div>
          <div className={styles.infoText}>
            Discuss how Arvix can assist your institution in equipping students with essential skills for the future.
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <ContactForm/>
        </div>
        <img className={styles.contact2} src='images/contact2.png'/>
    </div>
  )
}
