import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/Auth';
import AddressController from '../AddressController/AddressController';
import CheckoutController from '../CheckoutController/CheckoutController';
import GeneralQ from '../CoreResponseController/GeneralQ';
import PillController from '../PostResponseController/ed/PillController';
import PreEdController from '../PreResponseController/PreEdController';
import MainControllerHeader from './MainControllerHeader';
import selectStage from './stageSelectorUtils';

// This main controller does two things, controls the header of the response form and controls
// what form the user is currently in. There might be more things but for now that is what it controls.

const testValues = {
  currentStage: 'preResponse',
  category: 'ed'
}


const stages = {
  preResponse: 'preResponse',
  coreResponse: 'coreResponse',
  postResponse: 'postResponse',
  address: 'address',
  checkout: 'checkout',
  final: 'final'
}

const categories = {
  ed: 'ed', // erectile dysfunction
  hl: 'hl',// hairloss
  mh: 'mh' // mental health 
}

// This controller will receive the stage and other info from the main url, and make desicions based on that
// We also need a category to choose what sequence to show eg. erectile disfunction, hair loss, depression, etc.
export default function MainController() {
  const user = useAuth() // user info
  const router = useRouter() // category

  const [currentStage, setCurrentStage] = useState(null)
  const [renderedStage, setRenderedStage] = useState(null); // default to no stage until info received
  const [clientSecret, setClientSecret] = useState('')

  console.log(currentStage, clientSecret)
  // FUNCTION TO CHOOSE CURRENT STAGE, AND EACH STAGE REGARDS THEIR OWN BACK AND FORTH LOGIC. 
  const chooseCurrentStage = (stage, subStage) => {
    setCurrentStage(stage)
    switch (stage) {
      case stages.preResponse:
        // render preResponse
        setRenderedStage(<PreEdController nextStage={handleNextStage} subStage={subStage}/>)
        break;
      case stages.coreResponse:
        // render coreResponse
        setRenderedStage(<GeneralQ nextStage={handleNextStage} />)
        break;
      case stages.postResponse:
        setRenderedStage(<PillController nextStage={handleNextStage} />)
        break;
      case stages.address:
        setRenderedStage(<AddressController setClientSecret={setClientSecret} nextStage={handleNextStage} />)
        break;
      case stages.checkout:
        setRenderedStage(<CheckoutController clientSecret={clientSecret} />)
        break;
      case stages.final:
        // render final
    }
  }

  // BACK AND FORTH LOGIC 
  const handleNextStage = (stage, subStage) => {
    chooseCurrentStage(stage, subStage)
  }

  // LISTENERS

  // update UI based on updated stage
  useEffect(() => {
    const getStage = async () => {
      const [stage, subStage] = await selectStage(user, router.query.tratamiento)
      chooseCurrentStage(stage, subStage)
    }
    if (router.query.tratamiento) {
      getStage()
    }

  }, [router.query])

  useEffect(() => {
    console.log(clientSecret)
    if (clientSecret) {
      handleNextStage('checkout', null)
    }
  }, [clientSecret])


  return (
    <div>
      {/** gotta pass the handler for backing out depending on stage. and  */}
      <MainControllerHeader />

      {renderedStage}
    </div>
  )
}
