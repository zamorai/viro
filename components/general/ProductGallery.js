import { motion, useMotionValue } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import styles from '../../styles/general/ProductGallery.module.css'
import ConsultButton from './ConsultButton';
import { TbPrescription } from 'react-icons/tb'

const products = [
  {
    name: 'Topical Finasteride',
    note: true,
    img: '/finasteride-product.jpg',
  },
  {
    name: 'Generic for Viagra',
    note: false,
    img: '/Sildenafil-product.jpg',
  },
  {
    name: 'Sleep Gummies',
    note: true,
    img: '/minoxidil-product.jpg',
  },
  {
    name: 'Goodnight Wrinkle',
    note: false,
    img: '/finasteride-product.jpg',
  },
  {
    name: 'Minoxidil',
    note: false,
    img: '/Sildenafil-product.jpg',
  }
]

export default function ProductGallery() {
  const [width, setWidth] = useState(0)
  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div>
      <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor:"grabbing"}}>
        <motion.div drag='x' dragConstraints={{right: 0, left: -width-50}} className={styles.innerCarousel}>
          {products.map((product, idx) => (
            <div className={`${styles[`item-${idx}`]} ${styles.item}`}>
              <section className={styles.productContainer}>
                <div className={styles.productTop}>
                  <h1 className={styles.productTitle}>{product.name}</h1>
                  <span className={styles.productAlt}>{product.note && <TbPrescription size={25} />}</span>
                </div>

                <div className={styles.productBottom}>
                  <ConsultButton text={'Consulta'} />
                  <p className={styles.productInfo}>Mas Informacion</p>
                </div>
              </section>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
