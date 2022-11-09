import React, { useState } from 'react'
import styles from '../../../../styles/ed/PillDosage.module.css'
import { Radio } from '@mantine/core'


const answers = [{
  times: '50mg',
  value: <div className='flex justify-between w-full relative'><span className='font-bold'>50mg</span> <div className='px-8'><span className='font-bold'>$6</span><p className='text-[1.2rem]'>Por dosis</p></div></div>,
  img: 4
},
{
  times: '25mg',
  value: <div className='flex justify-between w-full'><span className='font-bold'>25mg</span> <div className='px-8'><span className='font-bold'>$4</span><p className='text-[1.2rem]'>Por dosis</p></div></div>,
  img: 4
},
{
  times: '100mg',
  value: <div className='flex justify-between w-full'><span className='font-bold'>100mg</span> <div className='px-8'><span className='font-bold'>$10</span><p className='text-[1.2rem]'>Por dosis</p></div></div>,
  img: 4
},
]

export default function PillDosage({ handleSubmit }) {
  const[radio, setRadio] = useState('')
  const handleClick = () => {
    handleSubmit(radio)
  }
  return (
    <div className={styles.container}>
      <span className={styles.monthly}>Dosis</span>
      <h1 className={styles.title}>Chose a dosage Strength</h1>
      <span className={styles.description}>If you're new to the medication, we recommend you request a 50mg dosage strength.</span>
      <div className='mb-24 mt-12'>
        <Radio.Group
        orientation='vertical'
        value={radio} onChange={setRadio}
        >
          {answers.map(({times, value, img}) => (
            <Radio key={times} classNames={{
              radioWrapper: styles.checkboxRoot,
              label: styles.checkboxLabel,
              radio: styles.checkboxInput
          }} value={times} label={value} />
          ))}
          
      </Radio.Group>
      <button onClick={handleClick} className={styles.button}>Continuar</button>
    </div>

    </div>
  )
}
