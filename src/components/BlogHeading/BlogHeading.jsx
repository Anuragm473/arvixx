import React from 'react'
import styles from './BlogHeading.module.css'

export default function BlogHeading() {
  return (
    <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Blogs</div>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.categories}>
                    <div className={styles.category}>
                        <div className={styles.categoryText}>Categories</div>
                        <div className={styles.arrow}>
                            <img src='images/category.png'/>
                        </div>
                    </div>
                    <div className={styles.categoryButtons}>
                        <div className={`${styles.button} ${styles.active}`}>
                            <div className={styles.buttonText}>ALL</div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>AI</div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>Freelance</div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>Digital Marketing</div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>Tech</div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>News</div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>Others</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}
