import React, { useEffect, useState } from 'react'
import PillHeader from './PillHeader'
import styles from '../../../../styles/questions/GeneralQ.module.css'
import PillFrequency from './PillFrequency'
import PillDosage from './PillDosage'
import PillPreference from './PillPreference'
import { useRouter } from 'next/dist/client/router'
import { useAuth } from '../../../../context/Auth'
import supabase from '../../../../utils/supabase'

export default function PillController({ nextStage }) {
  const router = useRouter()
  const[pillChoice, setPillChoice] = useState('Sildenafil');
  const[frequencyChoice, setFrequencyChoice] = useState('');
  const[dosageChoice, setDosageChoice] = useState('');
  const [component, setComponent] = useState(null);
  const [currentStage, setCurrentStage] = useState('pill') // pill, frequency, choice

  const user = useAuth();

  const handleBack = () => {
    currentStage === 'dosage' ? setCurrentStage('frequency') : setCurrentStage('pill')
  }

  console.log(frequencyChoice, dosageChoice)

  const handleNext = (value, stage) => {
    if (stage === 'frequency') {
      setFrequencyChoice(value)
    } else if ('dosage') {
      setDosageChoice(value)
    } else {
      setPillChoice(value)
    }
  }

  const handleSubmit = async (val) => {
    setDosageChoice(val)
    const producto = JSON.stringify({
      producto: 'Sildenafil',
      frequencia: frequencyChoice,
      dosis: val
    })
    const { data, error } = await supabase
    .from(router.query.tratamiento)
    .update({ stage: 3, producto: producto })
    .match({ id: user.user.id })

    if(data) {
      nextStage('address', null)
    } else {
      console.log(error)
    }
  }

  const renderComponent = (stage) => {
    let comp;
    switch (stage) {
      case 'pill':
        comp = <PillPreference handleNext={handleNext} setCurrentStage={setCurrentStage} />
        break;
      case 'dosage':
        comp = <PillDosage handleSubmit={handleSubmit} />
        break;
      case 'frequency':
        comp = <PillFrequency handleNext={handleNext} setCurrentStage={setCurrentStage} />
        break;
    }
    setComponent(comp)
  }

  useEffect(() => {
    renderComponent(currentStage)
  }, [currentStage])

  return (
    <div>
      <PillHeader handleBack={handleBack} currentStage={currentStage} />

      <section className={styles.container}>

        {component ? component : 'Loading...'}

      </section>

    </div>
  )
}
