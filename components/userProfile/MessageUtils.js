import React, { useState } from 'react'
import styles from '../../styles/userProfile/MessageUtils.module.css'
import { Select } from '@mantine/core';

export default function MessageUtils() {
  const [currentChat, setCurrentChat] = useState('cabello');

  return (
    <div className={styles.container}>
      <section className={styles.allChats}>
      <Select
      placeholder="Pick one"
      value={currentChat}
      onChange={setCurrentChat}
      data={[
        { value: 'cabello', label: 'Perdida de cabello' },
        { value: 'disfuncionErectil', label: 'Disfuncion eretil' },
        { value: 'cremas', label: 'Cuidado de la piel' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
      </section>

      <section className={styles.title}>
        Hair Loss
      </section>
    </div>
  )
}
