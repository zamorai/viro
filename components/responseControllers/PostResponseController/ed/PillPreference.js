import React from 'react'
import styles from '../../../../styles/ed/PillPreference.module.css'

export default function PillPreference({pillChoice, setPillChoic, setCurrentStage}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>La pastilla para la DE</h1>
      <span className={styles.description}>Upon submitting your visit, a provider will review your information and determine the best treatment plan for you. <br/><br/> For those who have never used ED medication in the past, the most commonly prescribed drug through Viro is sildenafil.</span>

      <section className={styles.card}>

        <div className={styles.left}>
          <div className={styles.upperLeft}>
            <span className={styles.tag}>Te Recomendamos</span>
            <span className={styles.medicine}>Viagra Generico</span>
          </div>
          <span className={styles.ingredient}>Sildenafil</span>
        </div>

        <div className={styles.right}>
          <div className={styles.upperRight}>
            <span className={styles.boost}>Performance boost</span>
            <div className={styles.duration}>
              <p><span>Listo:</span> 30m</p>
              <p><span>Pico:</span> 1h</p>
              <p><span>En sistema:</span> 12h</p>
            </div>
          </div>

          <div className={styles.info}>
            <p>- Uses the same exact active ingredient as brand name Viagra - mismo ingrediente activo</p>
            <p>- Popular for being the most affordable treatment but required a little planning</p>
          </div>

          <div className={styles.bottomRight}>
            <span className={styles.learnMore}>Learn more</span>
            <button onClick={() => setCurrentStage('frequency')} className={styles.button}>Continuar</button>
          </div>
        </div>
      </section>

    </div>
  )
}
