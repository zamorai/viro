import React from 'react'
import Address from '../../components/general/Address'
import styles from '../../styles/general/envio.module.css'

export default function envio() {
  return (
    <div>
      <div className={styles.container}>
      <h1 className={styles.title}>Direccion de envio</h1>
      <p className='text-2xl text-gray-500'>Mandaremos tu paquete discretamente a esta direccion</p>
      
      <div className='w-full'>
        <Address />
      </div>
      </div>
    </div>
  )
}
