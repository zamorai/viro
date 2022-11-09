import { useRouter } from 'next/router'
import React from 'react'
import Address from '../../../components/general/Address'
import { useAuth } from '../../../context/Auth'
import styles from '../../../styles/general/envio.module.css'
import styles1 from '../../../styles/questions/GeneralQ.module.css'
import supabase from '../../../utils/supabase'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const subscriptionStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  CANCELED: 'CANCELED',
  PAUSED: 'PAUSED'
}

export default function AddressController({ nextStage }) {
  const router = useRouter()
  const user = useAuth()

  const updateDbStage = async() => {
    const { data, error } = await supabase
        .from(router.query.tratamiento)
        .update({ stage: 5 })
        .match({ id: user.user.id })
  }

  const createSubscription = async (address) => {
    // info from their completed survey, 
    const { data: profile } = await supabase
    .from(router.query.tratamiento)
    .select()
    .eq('id', user.user.id)
    .single()

    // get user name 
    const { data: info } = await supabase
    .from('profiles')
    .select()
    .eq('id', user.user.id)
    .single()

    // pair them with a doctor 
    const { data: doctors } = await supabase
    .from('doctors')
    .select()
    .eq('type', router.query.tratamiento)
    .order('activePatients', { ascending: true })
    .limit(10)

    const doctorAssigned = doctors[getRandomInt(doctors.length)]

    // and start a message conversation with the doctor.
    await supabase
    .from('messages')
    .insert({ patientName: info.name ?? info.email, doctorName: doctorAssigned.name, patientId: user.user.id, doctorId: doctorAssigned.id, message:'Welcome to the best day of your life for your health!', type: router.query.tratamiento, sender: doctorAssigned.id })

    // update doctor patient count
    const { data } = await supabase
        .from('doctors')
        .update({ activePatients: doctorAssigned.activePatients + 1 })
        .match({ id: doctorAssigned.id })

    // update doctor patient relationship table
    await supabase
    .from('patients')
    .insert({ patientName: info.name ?? info.email, doctorName: doctorAssigned.name, patient: user.user.id, doctor: doctorAssigned.id, type: router.query.tratamiento })

    // finish by creating the subscription
    await supabase
    .from('subs')
    .insert({ id: user.user.id, address: JSON.stringify(address[0]), producto: profile.producto, status: subscriptionStatus.PENDING })
  }

  return (
    <div>

    <div className='h-24 bg-white flex items-center justify-center px-[5rem] border'>

    <div className='text-2xl'>
     Envio
    </div>

    </div>

    <div className={styles1.container}>

      <div className={styles.container}>
      <h1 className={styles.title}>Direccion de envio</h1>
      <p className='text-2xl text-gray-500'>Mandaremos tu paquete discretamente a esta direccion</p>
      
      <div className='w-full'>
        <Address nextStage={nextStage} updateDbStage={updateDbStage} createPurchase={createSubscription} />
      </div>
      </div>
    </div>

    </div>
  )
}
