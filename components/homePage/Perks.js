import React, {useEffect, useRef} from 'react'
import Titles from '../general/Titles'
import styles from '../../styles/home/Perks.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import {TbStars, TbUserCheck, TbTruckDelivery, TbPackage, TbReportMedical, TbDeviceMobileMessage, TbBulb} from 'react-icons/tb'

const slides = [
  {
  desc: <p><span className='text-[#DE6B48]'>Mensajes ilimitados</span> con doctores sobre tus tratamientos</p>,
  icon: <TbDeviceMobileMessage size={60} strokeWidth={1} />
},
{
  desc: <p>Productos <span className='text-[#5447DE]'>inovadores y eficazes</span></p>,
  icon: <TbBulb size={60} strokeWidth={1} />
},
{
  desc: <p>Tratamientos completamente <span className='text-[#4FCB99]'>personalizados</span></p>,
  icon: <TbUserCheck size={60} strokeWidth={1} />
},
{
  desc: <p>Unete a los <span className='text-[#4795DE]'>2 millones</span> de usuarios que confian en Viro</p>,
  icon: <TbStars size={60} strokeWidth={1} />
},
{
    desc: <p><span className='text-[#FFC71F]'>Envio gratis</span> para todas las medicinas con receta</p>,
  icon: <TbTruckDelivery size={60} strokeWidth={1} />
},
{
  desc: <p><span className='text-[#CC5050]'>Empaques discretos</span> y entrega directa</p>,
  icon: <TbPackage size={60} strokeWidth={1} />
},
{
  desc: <p><span className='text-[#FF7D27]'>Doctores certificados</span> para cada tratamiento</p>,
  icon: <TbReportMedical size={60} strokeWidth={1} />
},

]

export default function Perks() {
  const autoplay = useRef(
    Autoplay(
      { delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
      
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true }, [autoplay.current])
  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi])

  const renderSlides = slides.map((slide) => (
    <div className={styles.embla__slide}>
      {slide.desc}
      <div>{slide.icon}</div>
    </div>
  ))

  return (
    <div className={styles.perksContainer}>
      <Titles primary='Tu salud &amp; bienestar' secondary='sin compromiso, con Viro.' />

      <div ref={emblaRef} className={styles.embla}>
        <div className={styles.embla__container}>
          {renderSlides}
        </div>
      </div>
    </div>
  )
}
