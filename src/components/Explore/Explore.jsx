import React from 'react'
import styles from './Explore.module.css'

export default function Explore() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Explore all</div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemHeader}>
          <div className={styles.itemTitle}>Planning for unplanned work</div>
          <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '48px', display: 'flex' }}>
            <div className={styles.date}>12 Nov 2024</div>
            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
              <div className={styles.tag}>
                <div className={styles.tagText}>Tech</div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagText}>No-code</div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the item header for additional items as needed */}
      </div>
    </div>
  )
}
