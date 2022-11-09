import React, { useEffect, useState } from 'react'
import supabase from '../../utils/supabase'
import dayjs from 'dayjs'

export default function InformacionGeneral({ currentPatient }) {
  const[generalInfo, setGeneralInfo] = useState([])

  useEffect(() => {
    const getPatientInfo = async () => {
      const {data} = await supabase
        .from('profiles')
        .select('*')
        .eq('id', currentPatient.patient)
        .single()
      
      if (data) {
        setGeneralInfo(data)
      }
    }

    getPatientInfo()
  }, [currentPatient])

  return (
    <div className='bg-gray-50 h-full'>
      {generalInfo && 
      <div className='p-8 text-2xl'>
        <p >Fecha de nacimiento: <span className='ml-4 font-bold'>{generalInfo.birth}</span></p> 
        <p >Edad: <span className='ml-4 font-bold'>{generalInfo.birth && dayjs().year() - parseInt(generalInfo.birth.split('-')[0])}</span></p>  
        <p >Nombre completo: <span className='ml-4 font-bold'>{generalInfo.firstName} {generalInfo.lastName}</span></p>  
        <p >Email: <span className='ml-4 font-bold'>{generalInfo.email}</span></p>  
        
      </div>
      }
    </div>
  )
}
