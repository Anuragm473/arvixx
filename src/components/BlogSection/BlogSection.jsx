import React from 'react'
import styles from './BlogSection.module.css'

export default function BlogSection() {
  return (
    <div className={styles.container}>
            <div className={styles.leftColumn}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="images/blogimg1.png" alt="Blog" />
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.tagContainer}>
                        <div className={styles.tag}>
                            <div className={styles.tagText}>Tech</div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.tagText}>No-code</div>
                        </div>
                    </div>
                    <div className={styles.title}>Code vs No-code</div>
                    <div className={styles.description}>
                        At Arvix, our mission is to empower students with practical, market-relevant skills through engaging live bootcamps, preparing them for success in the technology-driven world.
                    </div>
                    <div className={styles.readContainer}>
                        <div className={styles.readTime}>
                            <div className={styles.readContent}>
                                <div className={styles.readIcon}><img src='images/clock.svg'/></div>
                                <div className={styles.readText}>5m Read</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
