import React, { useState } from 'react'

import StepName from '../RegisterStepper/StepperName/StepName'
import StepProfilePic from '../RegisterStepper/StepperProfilePic/StepProfilePic'



const stepper={
  
    1 : StepName,
    2: StepProfilePic,
    
    }


 const Activate = () => {
    const onNextClick=()=>{
        if(step<2)
        setStep(step+1);
        else{
          console.log("page limit reached");
        }
      }
      
        const [step , setStep] = useState(1);
        const  Step = stepper[step];
      

  return (
    <>
     <div >
            <Step onClick={onNextClick} />
    </div>
    </>
  )
}


export default Activate;


