import React, { useState } from 'react'
import styles from '../../../../styles/ed/PillFrequency.module.css'
import { Radio } from '@mantine/core'

const answers = [{
  times: 'Use 4 times per month',
  value: <p>Use <span className='font-bold'>4 times</span> per month</p>,
  img: 4
},
{
  times: 'Use 6 times per month',
  value: <p>Use <span className='font-bold'>6 times</span> per month</p>,
  img: 4
},
{
  times: 'Use 8 times per month',
  value: <p>Use <span className='font-bold'>8 times</span> per month</p>,
  img: 4
},
{
  times: 'Use 10 times per month',
  value: <p>Use <span className='font-bold'>10 times</span> per month</p>,
  img: 4
},
{
  times: 'Use 12 times per month',
  value: <p>Use <span className='font-bold'>12 times</span> per month</p>,
  img: 4
},
{
  times: 'Use 16 times per month',
  value: <p>Use <span className='font-bold'>16 times</span> per month</p>,
  img: 4
}]

export default function PillFrequency({handleNext, setCurrentStage}) {
  const[frequenc, setFrequenc] = useState('')

  const handleClick = () => {
    handleNext(frequenc, 'frequency')
    setCurrentStage('dosage')

  }

  return (
    <div className={styles.container}>
      <span className={styles.monthly}>Cantidad</span>
      <h1 className={styles.title}>How many uses per month do you anticipate?</h1>
      <span className={styles.description}>If you are prescribed a medication, how often do you expect to use it for sexual activity?</span>
      <div className='mb-24 mt-12'>
        <Radio.Group
        orientation='vertical'
        value={frequenc} onChange={setFrequenc}
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
