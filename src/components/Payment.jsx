import React from 'react'
import styles from "./Payment.module.css"



const Payment = ({data}) => {
  return (
    <div className={styles.box} style={{background:data.color}}>

        <div className={styles.logo}>
         <div>
             <h3>{data.date}</h3>
             <button className={styles.btn}><h3>Case Study</h3></button>
         </div>
          <div> <  img className={styles.image} src={data.logo} alt="" /></div>
        </div>
        <h1>{data.heading}</h1>
        <h1>{data.subheading}</h1>
        <div className={styles.last}>  
        <h3>{data.devices}</h3>
        <i className="fa fa-long-arrow-right" style={{fontSize:50}}></i>
        </div>











    </div>
  )
}

export default Payment