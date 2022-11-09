import { useRouter } from 'next/router'
import React from 'react'
import MainController from '../components/responseControllers/MainResponseController/MainController'
import { useAuth } from '../context/Auth'


export default function cuestionario() {
  return (
    <div>
      <MainController />
    </div>
  )
}
