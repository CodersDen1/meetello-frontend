import React from 'react'
import { Link } from 'react-router-dom'


import styles from "./Navigation.module.css"

function Navigation() {

    const NavStyleProps={
            color:'#ffffff',
            textDecoration:'none',
            fontWeight:'bold',
            fontSize:'30px',
            display:  'flex',
            alignItems:'center'
    }

  return (

     

    <nav className={`${styles.navbar} container`}>
        <Link style={NavStyleProps} to="/">
           {
            //<img alt='logo-img' />
            <span>Meetello</span>
           } 
        </Link>
    </nav>
  )
}

export default Navigation