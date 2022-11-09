import React from 'react'
import styles from '../../../../styles/navigation/Navbar.module.css'
import Link from 'next/link'
import {TbChevronLeft} from 'react-icons/tb'

export default function PillHeader({ handleBack, currentStage }) {
  return (
    <div>
      <div className='h-24 flex items-center justify-between px-[5rem] border'>
        <div>
          {currentStage !== 'pill' && <TbChevronLeft onClick={handleBack} size={25} strokeWidth={2} />}
        </div>

        <div className={`text-2xl ${currentStage !== 'pill' && '-ml-10'}`}>
          Preferencia de Tratamiento
        </div>

        <div>
        </div>
      </div>

    </div>
  )
}

