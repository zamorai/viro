import React from 'react'
import styles from '../../styles/home/Gallery.module.css'
import Titles from '../general/Titles'

export default function Gallery() {
  return (
    <div>
      <Titles primary='Creetelo! la mejor inovacion ' secondary='al cuidado de tu salud.' />

      <section className={styles.galleryContainer}>
        <div className={`${styles.galleryBig} ${styles.galleryCard}`}>
          Lo mejor de medicina, 100% online. <span className='text-emerald-500 text-yellow-700'>Sin filas, farmacias o estres</span>
        </div>
        <div className={`${styles.gallerySmall1} ${styles.galleryCard}`}>
          Conectate con tu doctor via mensaje cuando quieras - <span className='text-blue-600'>completamente gratis</span>
        </div>

        <div className={`${styles.gallerySmall2} ${styles.galleryCard}`}>
          Recibe un plan unico, acorde a <span className='text-white'>tus metas y perfil</span>
        </div>
      </section>


    </div>
  )
}
