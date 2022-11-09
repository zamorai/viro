import React, {useEffect, useState} from 'react'
import PasswordReset from '../../components/userProfile/PasswordReset'
import PaymentMethods from '../../components/userProfile/PaymentMethods'
import Prescriptions from '../../components/userProfile/Prescriptions'
import Profile from '../../components/userProfile/Profile'
import ShippingAddress from '../../components/userProfile/ShippingAddress'
import styles from '../../styles/userProfile/informacion.module.css'
import { TbChevronDown } from 'react-icons/tb'

const leftSections = [
  {
    title: 'Perfil',
    component: <Profile />
  },
  {
    title: 'Direccion de Envio',
    component: <ShippingAddress />
  },
  {
    title: 'Contrasena',
    component: <PasswordReset />
  },
]

const rightSections = [
  {
    title: 'Metodos de Pago',
    component: <PaymentMethods />
  },
  {
    title: 'Prescripciones',
    component: <Prescriptions />
  }
]

export default function informacion() {
  const[cardHeight, setCardHeight] = useState({
    'Perfil': 'smallHeight',
    'Metodos de Pago': 'smallHeight',
    'Direccion de Envio': 'smallHeight',
    'Contrasena': 'smallHeight',
    'Prescripciones': 'smallHeight',
  })

  const resizeCard = (title) => {
    let cardHeightDupe = { ...cardHeight }
    cardHeightDupe[title] === 'smallHeight' ? cardHeightDupe[title] = 'bigHeight' : cardHeightDupe[title] = 'smallHeight'
    setCardHeight(cardHeightDupe)
  }

  useEffect(() => {
    console.log(cardHeight.Contrasena)
  }, [cardHeight])

  return (
    <div className={styles.container}>

      <div className={styles.sections}>
        <section className={styles.leftSection}>
          {leftSections.map((section) => (
            <div className={`${styles.sectionCard} ${styles[cardHeight[section.title]]}`}>
              <div className={styles.cardHeader}>
                <h1 className='text-5xl font-semibold'>{section.title}</h1>
                <span onClick={() => resizeCard(section.title)} className='text-4xl cursor-pointer'><TbChevronDown /></span>
              </div>

              <section className={styles.cardComponent}>
                {section.component}
              </section>
            </div>
          ))}
        </section>

        <section className={styles.rightSection}>
          {rightSections.map((section) => (
            <div className={`${styles.sectionCard} ${styles[cardHeight[section.title]]}`}>
              <div className={styles.cardHeader}>
                <h1 className='text-5xl font-semibold'>{section.title}</h1>
                <span onClick={() => resizeCard(section.title)} className='text-4xl cursor-pointer'><TbChevronDown /></span>
              </div>

              <section className={styles.cardComponent}>
                {section.component}
              </section>
            </div>
          ))}
        </section>

      </div>

    </div>
  )
}
