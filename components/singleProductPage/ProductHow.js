import styles from '../../styles/product/ProductHow.module.css'

import React from 'react'

export default function ProductHow() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>How does sildenafil work</h1>
      <section className={styles.content}>

        
        <div className={styles.card}>
          <img className={styles.img} src='/product-bg.jpg' />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Inhibits PDE5</h3>
            <p className={styles.infoDesc}>Sildenafil is an oral ED medication that works by suppressing an enzyme in the body called PDE5.</p>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.img} src='/product-bg.jpg' />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Inhibits PDE5</h3>
            <p className={styles.infoDesc}>Sildenafil is an oral ED medication that works by suppressing an enzyme in the body called PDE5.</p>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.img} src='/product-bg.jpg' />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Inhibits PDE5</h3>
            <p className={styles.infoDesc}>Sildenafil is an oral ED medication that works by suppressing an enzyme in the body called PDE5.</p>
          </div>
        </div>


      </section>
    </div>
  )
}
