import React ,{useState}from 'react'

import styles from '../StepPhoneEmail.module.css';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import { ArrowCircleRightOutlined, LocalPhoneOutlined } from '@mui/icons-material';
import { colors } from '@mui/material';
import TextInput from '../../../../components/shared/TextInput/TextInput';



const Phone = ({onNext}) => {

  const [phoneNumber , setPhoneNumber] = useState('');

  

  return (
    <Card title="Please enter your phone number" icon ={<LocalPhoneOutlined/>}>

           <TextInput value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} />
                <div>
                    <div className={styles.actionButtonWrapper}>

                    <Button title="Continue" icon={<ArrowCircleRightOutlined/>}
                    onClick={onNext}
                    />
                    </div>

                <p className={styles.desclaimerParagraph}>By entering your phone number you are agreeing to our terms of service and Privacy Policy</p>

                </div>
    </Card>
  )
}

export default Phone