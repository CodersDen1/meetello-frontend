


import React, { useState } from 'react'
import StepOTP from '../RegisterStepper/StepperOTP/StepOTP'
import StepPhoneEmail from '../RegisterStepper/StepperPhoneEmail/StepPhoneEmail'



const stepper={
    1: StepPhoneEmail ,
    2 : StepOTP ,    
    }

function Login() {

   const [step , setStep] = useState(1);
   const Step= stepper[step];
    
   const onNext=()=>{
    if(step<2) setStep(step+1)
    else console.log("Stepper limit reached");
   }


  return (
    <div>
      
      <Step  onClick={onNext}/>

    </div>
  )
}

export default Login