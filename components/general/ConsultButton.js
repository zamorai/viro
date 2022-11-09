import React from 'react'
import styles from '../../styles/general/Button.module.css'

export default function ConsultButton({text}) {
  return (
    <button className={styles.consultButton}>
      {text}
    </button>
  )
}
