import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card';
import { ArrowCircleRightOutlined, LockOutlined } from '@mui/icons-material';
import TextInput from '../../../components/shared/TextInput/TextInput';

import styles from './StepOTP.module.css';
import Button from '../../../components/shared/Button/Button';


const StepOTP=({onNext}) => {

  function next(){
      console.log(otp)
  }
  const [otp , setOtp] = useState('');

  return (
    <>
      <div className={styles.cardWrapper}>
      <Card 
      title="Enter the otp which we have sent to you !!"  
      icon={<LockOutlined/>}
      >
          <TextInput 
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
          />
      
                    <div className={styles.actionButtonWrapper}>

                    <Button title="Continue" icon={<ArrowCircleRightOutlined/>} 
                    onClick={onNext}
                    />
                    </div>

                <p className={styles.desclaimerParagraph}>By entering your phone number you are agreeing to our terms of service and Privacy Policy</p>


      </Card>

      </div>
    </>
  )
}

export default StepOTP;