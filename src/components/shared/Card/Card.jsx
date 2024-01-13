import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'


function Card({title,children}) {
  return (
    <div className={styles.card}>
        <div className={styles.card}>
          <div className={styles.headingWrapper}>
              <h1 className={styles.heading}> {title}</h1>   
          </div>
          </div>
         {children}
    </div>
    
  )
}

export default Card