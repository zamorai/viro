import React, { useEffect, useState } from 'react'
import supabase from '../../utils/supabase'

export default function Historial({ currentPatient }) {
  const[medicalHistory, setMedicalHistory] = useState([])

  useEffect(() => {
    const getPatientInfo = async () => {
      const {data, error} = await supabase
        .from(currentPatient.type)
        .select('*')
        .eq('id', currentPatient.patient)

        if (data) {
          console.log(JSON.parse(data[0].respuestas))
          setMedicalHistory(JSON.parse(data[0].respuestas))
        } else {
          console.log(error)
        }
    }

    getPatientInfo()
    console.log(currentPatient)
  }, [currentPatient])

  const renderHistory = () => {
    return medicalHistory.map((med, i) => {
      const[q, a] = med.response.split('~')
      return (
      <div className={`${i % 2 ? 'bg-white' : 'bg-gray-100'} p-8`}>
        <p className='text-2xl mb-2'>{q}</p>
        <p className='text-2xl font-bold'>{a}</p>
      </div>
      )
    })

  }


  return (
    <div className='bg-gray-50 h-[calc(100vh-12.5rem)] overflow-auto'>
      {medicalHistory && renderHistory()}
    </div>
  )
}
