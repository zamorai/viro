import React from 'react'
import {TbChevronLeft} from 'react-icons/tb'


export default function QuestionsReturn({currentQuestion, handleReturnButton, validQuestions}) {
  return (
    <div className='h-24 flex items-center justify-between px-[5rem] border'>
      <div>
        {validQuestions[currentQuestion - 1] && <TbChevronLeft onClick={handleReturnButton} size={25} strokeWidth={2} />}
      </div>

      <div className={`text-2xl ${currentQuestion > 0 && '-ml-10'}`}>
        Tu Salud
      </div>

      <div>
      </div>
    </div>
  )
}
