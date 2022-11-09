import React, {useState, useEffect} from 'react'
import styles from '../../../styles/questions/GeneralQ.module.css'
import PreEdRegister from './PreEdRegister'
import PreEdLogin from './PreEdLogin';
import PreEdFinal from './PreEdFinal';
import PreEdDOB from './PreEdDOB';
import { useRouter } from 'next/router';
import PreEdHeader from './PreEdHeader';

export default function PreEdController({ nextStage, subStage }) {

  const[stage, setStage] = useState(subStage); // registrar, iniciar, extra, finalizar
  const[currentPage, setCurrentPage] = useState(null)

  const renderComponent = () => {
    let currentStage;
    switch (stage) {
      case 'registrar':
        currentStage = <PreEdRegister nextSubStage={nextSubStage} />
        break;
      case 'extra':
        currentStage = <PreEdDOB nextSubStage={nextSubStage} />
        break;
      case 'iniciar':
        currentStage= <PreEdLogin nextSubStage={nextSubStage} />
        break;
      case 'finalizar':
        currentStage = <PreEdFinal nextStage={nextStage} />
        break;
    }
    setCurrentPage(currentStage)
  }

  const nextSubStage = (stage) => {
    setStage(stage)
  }

  useEffect(() => {
    renderComponent()
  }, [stage])

  return (
    <div>
      <PreEdHeader />
      <section className={styles.container}>
        {currentPage ? currentPage : 'Loading...'}

      </section>

    </div>
  )
}
