import React, { useState } from 'react'
import styles from '../../../styles/preEd/PreEdFinal.module.css'
import styles2 from '../../../styles/questions/GeneralQ.module.css'
import { useRouter } from 'next/dist/client/router';
import supabase from '../../../utils/supabase';
import { useAuth } from '../../../context/Auth';


export default function PreEdFinal({ nextStage }) {
  const user = useAuth()
  const router = useRouter()

  const handleSubmit = async () => {
    const { data, error } = await supabase
        .from(router.query.tratamiento)
        .update({ stage: 1 })
        .match({ id: user.user.id })
    if (!!data) {
      nextStage('coreResponse', null)
    } else {
      console.log(error, 'errrrrrr')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hablemos de tu salud</h1>
      <span className={styles.description}>Vamos a cubrir un tu salud e historial medico para encontrar opciones de tratamiento.</span>
      <div className='mb-24 mt-12'>
        <img src='/grassMan.png'></img>
        <button onClick={handleSubmit} className={styles2.submitButton}>Comenzar</button>
      </div>

    </div>
  )
}
