import React from 'react'
import styles from './Comingsoon.module.css'

export default function Comingsoon() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>Coming Soon</div>
        <div className={styles.iconWrapper}>
          <img src='images/enquire1.png'/>
        </div>
      </div>
    </div>
  )
}
