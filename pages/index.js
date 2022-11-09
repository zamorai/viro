import Titles from '../components/general/Titles'
import Hero from '../components/homePage/Hero'
import styles from '../styles/home/Home.module.css'
import { useHover } from '@mantine/hooks';
import { BiRightArrowAlt } from 'react-icons/bi'
import Perks from '../components/homePage/Perks';
import Gallery from '../components/homePage/Gallery';
import ProductGallery from '../components/general/ProductGallery';
import HighlightProduct from '../components/general/HighlightProduct';
import { mainSpotlight, secondSpotlight } from '../information/spotlight';

export default function Home() {
  const { hovered: hovered1, ref: ref1 } = useHover();
  const { hovered: hovered2, ref: ref2 } = useHover();
  console.log(hovered1)

  return (
    <div >
      <Hero />

      <section className='mt-8'>
        <Titles primary={'Explora tratamientos '} secondary='completamente personalizados.' />

        <div className={styles.treatmentsWrapper}>

          <section ref={ref1} className={`${styles.treatment1} ${styles.treatments} `}>
            <div className='flex flex-col justify-between h-full relative'>
              <span className={styles.treatmentsDesc}>Perdida de cabello</span>
              <span className={styles.treatmentsIcon}><BiRightArrowAlt color={`${hovered1 ? 'white' : 'black'}`} size={30} /></span>
            </div>
          </section>

          <section ref={ref2} className={`${styles.treatment2} ${styles.treatments} `}>
          < div className='flex flex-col justify-between h-full relative'>
              <span className={styles.treatmentsDesc}>Disfuncion Erectil</span>
              <span className={styles.treatmentsIcon}><BiRightArrowAlt color={`${hovered2 ? 'white' : 'black'}`} size={30} /></span>

            </div>
          </section>

        </div>
      </section>

      <Perks />

      <Gallery />

      <div>
        <Titles primary={'Comienza tu camino a la salud,'} secondary='aqui estamos para apoyarte' />
        <ProductGallery />
      </div>

      <HighlightProduct order={'left'} info={mainSpotlight} />
      <HighlightProduct order={'right'} info={secondSpotlight} />

    </div>
  )
}
