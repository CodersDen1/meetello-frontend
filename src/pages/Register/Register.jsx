import React, { useState } from 'react'

import styles from './Register.module.css'
import StepOTP from '../RegisterStepper/StepperOTP/StepOTP'
import StepName from '../RegisterStepper/StepperName/StepName'
import StepPhoneEmail from '../RegisterStepper/StepperPhoneEmail/StepPhoneEmail'
import StepProfilePic from '../RegisterStepper/StepperProfilePic/StepProfilePic'
import StepUsername from '../RegisterStepper/StepperUsername/StepUsername'




const stepper={
1: StepPhoneEmail ,
2 : StepOTP ,
3 : StepName,
4: StepProfilePic,
5 : StepUsername

}

const Register = ()=> {

const onNext=()=>{
  if(step<5)
  setStep(step+1);
  else{
    console.log("page limit reached");
  }
}

  const [step , setStep] = useState(1);
  const Step =   stepper[step];


  return (
    <div >
            <Step onClick={onNext} />
    </div>
  )
}

export default Register