import { useEffect, useState } from 'react'
import styles from '../../styles/home/Hero.module.css'
import Button from '../general/Button'
import { motion, AnimatePresence } from "framer-motion"
import TreatmentDrawer from '../general/TreatmentDrawer';
import { useAuth } from '../../context/Auth';

const texts = [
  "LA PERDIDA DE CABELLO",
  "LA DISFUNCION ERECTIL",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1 <= texts.length - 1 ? index + 1 : 0),
      4000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.container}>

      <section className={styles.leftContent}>
        <img className={styles.mockup} src='/sildenafil-sideways-mockup.png'></img>
      </section>

      <section className={styles.content}>
        <h1 className={styles.title}>
          Dile <span className={styles.magic}>adios</span> a <br /> 
          <AnimatePresence exitBeforeEnter>
            {index == 0 ?
              <motion.span
              key='initial'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0  }}
              >
                la perdida de cabello
              </motion.span>
              :
              <motion.span
              key='final'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              >
                la disfuncion erectil
              </motion.span>
            }   
          </AnimatePresence>
        </h1>
        <p className={styles.sub}>Tratamientos aprovados por la FDA entregados a tu puerta.</p>
        <span onClick={() => setTreatmentsOpen(!treatmentsOpen)}><Button /></span>
      </section>


      <TreatmentDrawer opened={treatmentsOpen} setOpened={setTreatmentsOpen} />
    </div>
  )
}
