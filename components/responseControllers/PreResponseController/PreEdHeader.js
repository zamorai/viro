import React from 'react'
import styles from '../../../styles/navigation/Navbar.module.css'
import Link from 'next/link'
import {TbChevronLeft} from 'react-icons/tb'

export default function PreEdHeader() {
  return (
    <div>
      <div className='h-24 flex items-center justify-center px-[5rem] border'>

        <div className='text-2xl'>
          Bienvenido!
        </div>

      </div>

    </div>
  )
}

