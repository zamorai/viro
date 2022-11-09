import { edQuestions } from '../../../information/sampleQ';
import { useState, useEffect } from 'react';
import styles from '../../../styles/questions/GeneralQ.module.css'
import { Radio, Checkbox, Textarea } from '@mantine/core';
import QuestionsReturn from './QuestionsReturn';
import { useRouter } from 'next/dist/client/router';
import supabase from '../../../utils/supabase';
import { useAuth } from '../../../context/Auth';

export default function GeneralQ({ nextStage, setShowReturn, handlePrevious }) {
  const router = useRouter()
  const user = useAuth();

  const [allQuestions, setAllQuestions] = useState(edQuestions);
  const [validQuestions, setValidQuestions] = useState([])
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [radioValue, setRadioValue] = useState('');
  const [textValue, setTextValue] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalQuestionsLength, setTotalQuestionsLength] = useState(validQuestions.length)
  const [newQuestionsAdded, setNewQuestionsAdded] = useState([])
  const [unsavedChanges, setUnsavedChanges] = useState(true)


  // prompt the user if they try and leave with unsaved changes  
  useEffect(() => {
    if (!validQuestions[currentQuestion + 1]) {
      return;
    }
    const warningText =
      'You have unsaved changes - are you sure you wish to leave this page?';
    const handleWindowClose = (e) => {
      if (!unsavedChanges) return;
      e.preventDefault();
      return (e.returnValue = warningText);
    };
    const handleBrowseAway = () => {
      if (!unsavedChanges) return;
      if (window.confirm(warningText)) return;
      router.events.emit('routeChangeError');
      throw 'routeChange aborted.';
    };
    window.addEventListener('beforeunload', handleWindowClose);
    router.events.on('routeChangeStart', handleBrowseAway);
    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
      router.events.off('routeChangeStart', handleBrowseAway);
    };
  }, [unsavedChanges]);


  useEffect(() => {
    const initialQ = allQuestions.filter(question => question.required === true)
    setValidQuestions(initialQ)
  }, [])


  useEffect(() => {
    setTotalQuestionsLength(validQuestions.length)
  }, [validQuestions])


  useEffect(() => {
    if (validQuestions[currentQuestion]?.type !== 'written') {
      handleAddNextQuestionCheckbox()
    }
  }, [checkboxValue])


  useEffect(() => {
    if (validQuestions[currentQuestion]?.type !== 'written') {
      handleAddNextQuestionRadio()
    }
  }, [radioValue])


  const renderRadio = (answers) => {
    return (
    <Radio.Group
      orientation='vertical'
      value={radioValue} onChange={(e) => handleRadioClick(e)}
      >
        {answers.map(([option, nextQuestion]) => (
          <Radio key={option} classNames={{
            radioWrapper: styles.checkboxRoot,
            label: styles.checkboxLabel,
            radio: styles.checkboxInput
        }} value={option} label={option} />
        ))}
        
    </Radio.Group>
    )
  }

  const renderCheckbox = (answers) => {
    return (
      <Checkbox.Group orientation='vertical' value={checkboxValue} onChange={(e) => handleCheckboxClick(e)}>
        {answers.map(([option, nextQuestion]) => (
          <Checkbox key={option} classNames={{
            root: styles.checkboxRoot,
            label: styles.checkboxLabel,
            input: styles.checkboxInput,
        }} value={option} label={option} />
        ))}
        
      </Checkbox.Group>
    )
  }

   // HANDLED
  const renderTextarea = () => {
    return (
      <Textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} autosize minRows={8} classNames={{
        wrapper: styles.textareaWrapper,
        input: styles.textareaInput
      }} 
      />
    )
  }

  // HANDLED
  const renderAnswers = (type, answers) => {
    return type === 'written' ? 
    renderTextarea() : type === 'single' ?
    renderRadio(answers) : renderCheckbox(answers)
  }

  // HANDLED
  const handleCheckboxClick = (e) => {
    setCheckboxValue(e)
  }

  // HANDLED
  const handleRadioClick = (e) => {
    setRadioValue(e)
  }


  // HANDLED
  const handleAddNextQuestionCheckbox = (e) => {
    const newQ = validQuestions[currentQuestion]?.answers.filter((answer) => checkboxValue.includes(answer[0]) && answer[1]).map((answer) => answer[1])

    if (newQ?.length > newQuestionsAdded?.length || (newQ?.length && !newQuestionsAdded)) {

      const temp = [...validQuestions]
      const questionsToAdd = newQ;
      const newValidQuestions = [...temp.slice(0, currentQuestion + 1), ...allQuestions.filter((question, idx) => questionsToAdd.includes(idx) && !newQuestionsAdded?.includes(idx)), ...temp.slice(currentQuestion + 1, validQuestions.length)]
      
      setValidQuestions(newValidQuestions)
    } 
    
    else if (newQ?.length < newQuestionsAdded?.length) {
      const temp = [...validQuestions]
      const nextQ = currentQuestion + 1;
      while (temp[nextQ] && temp[nextQ].required === false) {
        if (newQ.includes(temp[nextQ].id)) {
          nextQ++
          continue
        }
        temp.splice(nextQ, 1)
        break;
      }
      setValidQuestions(temp)
     }
    setNewQuestionsAdded(newQ)
  }

  const handleAddNextQuestionRadio = (e) => {
    const newQ = validQuestions[currentQuestion]?.answers.filter((answer) => radioValue.includes(answer[0]) && answer[1]).map((answer) => answer[1])
    if (newQ?.length > newQuestionsAdded?.length || (newQ?.length && !newQuestionsAdded)) {
      console.log('reached heaven')
      const temp = [...validQuestions]
      const questionsToAdd = newQ;
      const newValidQuestions = [...temp.slice(0, currentQuestion + 1), ...allQuestions.filter((question, idx) => questionsToAdd.includes(idx)), ...temp.slice(currentQuestion + 1, validQuestions.length)]
      setValidQuestions(newValidQuestions)
    } else if (newQ?.length < newQuestionsAdded?.length) {
      console.log('reached mid')
      const temp = [...validQuestions]
      const nextQ = currentQuestion + 1;
      temp.splice(nextQ, 1)
      setValidQuestions(temp)
     } else if (newQ?.length && (newQ?.length === newQuestionsAdded?.length)) {
      console.log('reached hell', newQ)
      const temp = [...validQuestions]
      const nextQ = currentQuestion + 1;
      temp[nextQ] = allQuestions[newQ]
      setValidQuestions(temp)
     }
    setNewQuestionsAdded(newQ)
  }

  // TODO
  const nextQuestionHandler = () => {
    const questionType = validQuestions[currentQuestion].type
    console.log(questionType)
    switch(questionType) {
      case 'multiple': 
        validQuestions[currentQuestion].selected = checkboxValue
        validQuestions[currentQuestion].newQuestionsAdded = newQuestionsAdded
        break;
      case 'single':
        validQuestions[currentQuestion].selected = radioValue
        validQuestions[currentQuestion].newQuestionsAdded = newQuestionsAdded
        break;
      case 'written':
        validQuestions[currentQuestion].selected = textValue
        break;
      default:
        // fuck why we reach here
    }

  if (!validQuestions[currentQuestion + 1]) {
    handleQuestionsSubmit()
    return;
  }

  const nextQType = getNextQuestionType()

  switch(nextQType) {
    case 'multiple': 
      if (validQuestions[currentQuestion + 1].selected.length) {
        setCheckboxValue(validQuestions[currentQuestion + 1].selected)
        setNewQuestionsAdded(validQuestions[currentQuestion + 1].newQuestionsAdded)
      } else {
        setCheckboxValue([])
        setNewQuestionsAdded([])
      }
      break;
    case 'single':
      if (validQuestions[currentQuestion + 1].selected.length) {
        setRadioValue(validQuestions[currentQuestion + 1].selected)
        setNewQuestionsAdded(validQuestions[currentQuestion + 1].newQuestionsAdded)
      } else {
        setRadioValue('')
        setNewQuestionsAdded([])
      }
      break;
    case 'written':
      if (validQuestions[currentQuestion + 1].selected.length) {
        setTextValue(validQuestions[currentQuestion + 1].selected)
      } else {
        setTextValue('')
        setNewQuestionsAdded([])
      }
      break;
    default:
      break;
  }

  setCurrentQuestion(currentQuestion + 1)
}

  const getNextQuestionType = () => {
    if (validQuestions[currentQuestion + 1]) {
      return validQuestions[currentQuestion + 1].type
    } 

    return null;
  }

  const handleReturnButton = () => {
    
    const questionType = validQuestions[currentQuestion - 1].type

    switch(questionType) {
      case 'multiple': 
        setCheckboxValue(validQuestions[currentQuestion - 1].selected)
        setNewQuestionsAdded(validQuestions[currentQuestion - 1].newQuestionsAdded)
        break;
      case 'single':
        setRadioValue(validQuestions[currentQuestion - 1].selected)
        setNewQuestionsAdded(validQuestions[currentQuestion - 1].newQuestionsAdded)
        break;
      case 'written':
        setTextValue(validQuestions[currentQuestion - 1].selected)
        break;
      default:
        // fuck why we reach here
    }

    setCurrentQuestion(currentQuestion - 1)
  }

  // validQuestions[currentQuestion-1] && handlePrevious(handleReturnButton);

  const handleQuestionsSubmit = async () => {
    const validQuestions = allQuestions.filter((q) => q.required === true).map((q) => {
      const newObj = { response: `${q.question}~${q.selected}`}
      return newObj
    })
    const { data, error } = await supabase
    .from(router.query.tratamiento)
    .update({ respuestas: JSON.stringify(validQuestions), stage: 2 })
    .match({ id: user.user.id })
  if (data) {
    nextStage('postResponse', null)
  }
  }

  const getCurrentState = () => {
    console.log('ValidQuestions', validQuestions)
    console.log('Checkbox Values', checkboxValue)
    console.log('RadioValues', radioValue)
    console.log('Text value', textValue)
    console.log('newQuestionsAdded', newQuestionsAdded)
    console.log('current Question', currentQuestion)
    console.log('total Length', totalQuestionsLength)
  }

  return (
    <>
    <QuestionsReturn validQuestions={validQuestions} currentQuestion={currentQuestion} handleReturnButton={handleReturnButton} />
    <div className={styles.container}>
      <section className={styles.infoContainer}>
        <span className={styles.numbers}>{currentQuestion + 1} de {totalQuestionsLength}</span>
        <h1 className={styles.question}>{validQuestions[currentQuestion]?.question}</h1>
        <span className={styles.subQuestion}>{validQuestions[currentQuestion]?.type === 'multiple' && 'Selecciona todas las que apliquen.'}</span>
        <div className={styles.answers}>
          {validQuestions.length > 0 && renderAnswers(validQuestions[currentQuestion]?.type, validQuestions[currentQuestion]?.answers) }
        </div>
        <button onClick={nextQuestionHandler} className={styles.submitButton}>Next</button>
        <button onClick={getCurrentState} className='text-3xl'>get current state</button>
      </section>
    </div>
    </>
  )
}


//.filter((answer) => checkboxValue.includes(answer[0]))