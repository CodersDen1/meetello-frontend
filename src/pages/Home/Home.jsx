import React from 'react'
import { Link ,useHistory, useNavigate} from 'react-router-dom';


import ArrowForwardIosRoundedIcon  from '@mui/icons-material/ArrowForwardIosRounded';


import styles from './Home.module.css'
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';


const Home = () => {

  const linkStyle={
    color:'#0077ff',
    fontWieght:'bold',
    textDecoration:'none',
    marginLeft:'10px'

  }


  const navigate = useNavigate();
  const authenticate=()=>{
        navigate('/authenticate')
        console.log('Button clicked')
  }  

  return (
    <div className={styles.cardWrapper}>

      <Card title="Welcome to Meetello!!!" >
        
        <p className={styles.text}>We at Meetello , are gradually building up the neet envoirnment for audio conferencing app , if anything break do let us know so that we can fix it!!!</p>

        <div >
          <Button onClick={authenticate} title="Lets get started!" icon={<ArrowForwardIosRoundedIcon/>} />
        </div>
        <div className={styles.signWrapper}>
          <span className={styles.invite}>Have a invite code?</span>
        </div>

      </Card>
     
    </div>
  )
}

export default Home