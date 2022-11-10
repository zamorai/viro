import React from 'react'
import styles from '../../../styles/navigation/Navbar.module.css'
import Link from 'next/link'
import {TbChevronLeft} from 'react-icons/tb'

export default function MainControllerHeader() {
  return (
    <div>
      <div className='h-24 w-full text-center flex items-center justify-center'>
        <Link href='/'>
          <h1 className={styles.logoAlt}>Viro</h1>
        </Link>
        
      </div>

    </div>
  )
}

