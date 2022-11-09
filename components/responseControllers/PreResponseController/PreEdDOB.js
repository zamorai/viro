import React, { useState } from 'react'
import styles from '../../../styles/preEd/PreEdDOB.module.css'
import styles2 from '../../../styles/questions/GeneralQ.module.css'
import dayjs from 'dayjs'
import supabase from '../../../utils/supabase'
import { useAuth } from '../../../context/Auth'

export default function PreEdDOB({ nextSubStage }) {
  const[date, setDate] = useState('')
  const[validDate, setValidDate] = useState(true)
  const user = useAuth()

  const handleNext = async () => {
    
    const isValid = dayjs(date, 'YYYY-MM-DD', true).isValid()
    
    if (isValid) {
      setValidDate(true)
      const { data, error } = await supabase
        .from('profiles')
        .update({ birth: date })
        .match({ id: user.user.id })
      if (data) {
        nextSubStage('finalizar')
      } else {
        console.log(error)
      }
    } else {
      setValidDate(false)
    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.monthly}>Aplicamos tu consulta gratuita!</span>
      <h1 className={styles.title}>Confirma tu fecha de nacimiento</h1>
      <span className={styles.description}>Introduce tu edad.</span>

      <div className='mb-24 mt-12'>
      <input className={styles.date} type="date" id="start" name="trip-start"
       value={date} onChange={(e) => setDate(e.target.value)}
       />
       {!validDate && <span className='text-red-500 text-2xl'>Introduce una fecha valida</span>}
       <button onClick={handleNext} className={styles2.submitButton}>Siguiente</button>
      </div>

    </div>
  )
}
