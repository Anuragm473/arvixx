import React from 'react'
import styles from './BlogCards.module.css'
import Cards1 from './Cards1/Cards1'
import Cards2 from './Cards2/Cards2'
import Cards3 from './Cards3/Cards3'

export default function BlogCards() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Cards1/>
        <Cards1/>
      </div>
      <div style={{width: '100%', color: 'white', fontSize: 40, fontFamily: 'Inter', fontWeight: '700', padding:'1rem', wordWrap: 'break-word'}}>Latest</div>
      <div style={{width: '100%', border: '1px white solid',marginBottom:'4rem'}}></div>
      <div className={styles.cardsFlex}>
        <Cards2/>
        <Cards2/>
        <Cards2/>
      </div>
      <div className={styles.card1}>
        <Cards3/>
        <Cards3/>
      </div>
    </div>
  )
}
