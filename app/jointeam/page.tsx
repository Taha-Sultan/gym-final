import React from 'react'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from './JoinTeamPage.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Titan_One } from 'next/font/google';
import { Poppins } from 'next/font/google';
import NavBar from '../components/navigationbar/page';
import Footer from '../components/footer/page';


const poppin8 = Poppins({ subsets:["latin"], weight: ["800"] });
const poppin6 = Poppins({ subsets:["latin"], weight: ["600"] });
const titanOne = Titan_One({ subsets: ["latin"], weight: ["400"] });
const poppin5 = Poppins({ subsets:["latin"], weight: ["500"] });
const poppin7 = Poppins({ subsets:["latin"], weight: ["700"] });


const JoinTeamPage = () => {
  return (
    <>

<body>

<NavBar/>

<div className={styles.mainTxtDiv}>

    <div className={styles.headingMain} style={poppin8.style}>APPLY TO JOIN OUR TEAM...</div>
    <div className={styles.txtMain} style={poppin6.style}>Are you interested in joining our team. Want to earn extra income through becoming an affiliate.</div>
    <div className={`${styles.txtMain} ${styles.txtSub}`} style={poppin6.style}>Fill in this form below & we will get back to you within 48 hrs.</div>
</div>

<div className={styles.mainFormDiv}>
    <div className={styles.nameForms}>
        <label className={`${styles.nameForm} ${styles.formLabel}`}  style={poppin6.style}>Name*</label>
        <input type="text"/>
    </div>
    <div className={styles.emailForms}>
        <label className={`${styles.emailForm} ${styles.formLabel}`}  style={poppin6.style}>Email Address*</label>
        <input type="email"/>
    </div>
    <div className={styles.orderForms}>
        <label className={`${styles.orderForm} ${styles.formLabel}`}  style={poppin6.style}>Phone Number*</label>
        <input type="text"/>
    </div>
    <div className={styles.messageForms}>
        <label className={`${styles.messageForm} ${styles.formLabel}`}  style={poppin6.style}>Message*</label>
        <textarea name="message" id="" rows={10} defaultValue={""} />
    </div>
    <div className={styles.submitBtn} style={poppin6.style}>Submit</div>
</div>

    <div className={styles.bottomTxtDiv} style={poppin5.style}>
        <i>Terms and conditions: We will pay you a flat fee everytime someone orders a piece of clothing through your affiliate link</i>
    </div>







<Footer/>

</body>
    
    </>
  )
}

export default JoinTeamPage