import React from 'react'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from './helppage.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Titan_One } from 'next/font/google';
import { Poppins } from 'next/font/google';


const poppin8 = Poppins({ subsets:["latin"], weight: ["800"] });
const poppin6 = Poppins({ subsets:["latin"], weight: ["600"] });
const titanOne = Titan_One({ subsets: ["latin"], weight: ["400"] });
const poppin5 = Poppins({ subsets:["latin"], weight: ["500"] });
const poppin7 = Poppins({ subsets:["latin"], weight: ["700"] });


const HelpPage = () => {
  return (
    <>

<body>

<nav className={styles.navBar}>
    <div className={`${styles.left} ${styles.navLinks}`}>
        <ul>
            <li className={styles.navItem} style={poppin8.style}>SHOP</li>
            <li className={styles.navItem} style={poppin8.style}>ABOUT</li>
            <li className={styles.navItem} style={poppin8.style}>CONTACT US</li>
        </ul>
    </div>
    <div className={`${styles.centre} ${styles.logo}`} style={titanOne.style}>
        Erratic
    </div>
    <div className={`${styles.right} ${styles.icons}`}>
        <div className={styles.search}>
            <i className="bi bi-search"></i>
        </div>
        <div className={styles.bag}>
            <i className="bi bi-bag"></i>
        </div>
    </div>
</nav>

<div className={styles.mainTxtDiv}>

    <div className={styles.headingMain} style={poppin8.style}>HOW CAN WE HELP</div>
    <div className={styles.txtMain} style={poppin6.style}>Let us know your questions, thoughts and ideas via the form below. Our support team will get back to you as soon as possible.</div>

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
        <label className={`${styles.orderForm} ${styles.formLabel}`}  style={poppin6.style}>Order Number*</label>
        <input type="text"/>
    </div>
    <div className={styles.messageForms}>
        <label className={`${styles.messageForm} ${styles.formLabel}`}  style={poppin6.style}>Message*</label>
        <textarea name="message" id="" rows={10} defaultValue={""} />
    </div>
    <div className={styles.submitBtn} style={poppin6.style}>Submit</div>
</div>









<footer className={`containerFluid ${styles.footer}`}>
    <div className={styles.footerOuter}>
    <div className={`container ${styles.footerInternal} row m-auto`}>
      <div className={`${styles.footerLeft} col-lg-6 col-12`}>
        <div className={styles.brandInfo}>
          <div className={styles.name}>
            <span className={styles.yourBrandTxt} style={poppin7.style}><span className={styles.yourTxt}>Your</span> Brand Name</span>
          </div>
          
        </div>
        <div className={`${styles.brandLocation} mt-3`}>
          <div className={styles.boldText}>
            <span className={styles.yourBrandInc} style={poppin7.style}>@2023 Your Brand Name, inc. All rights reserved</span>
          </div>
          <div className={styles.normalText}>
            <span className={styles.agencyHq} style={poppin5.style}>Clothing brand Headquartered<br/> in the USA</span>
          </div>
        </div>
        <div className={styles.faqsEtc}>
          <ul className={styles.faqList} style={poppin5.style}>
              <li className={`col-lg-3 col-3`}><b>Contact Us</b></li>
              <li className={`col-lg-3 col-4`}><b>Privacy Policy</b></li>
              <li className={`col-lg-3 col-4`}><b>Shipping Page</b></li>
              <li className={`col-lg-1 col-1`}><b>FAQ</b></li>
              <li  className={`col-lg-4 col-5`}><b>Terms & Conditions</b></li>
              <li className={`col-lg-3 col-4`}><b>New Arrivals</b></li>
              <li className={`col-lg-3 col-5`}><b>Become Affiliate</b></li>
          </ul>
      </div>
    </div>

    <div className={`${styles.footerRight} col-lg-6 col-12`}>
      <div className={styles.infoIcons}>
          <i className="bi bi-instagram text-dark fs-3"></i>
          <i className="bi bi-envelope text-dark fs-3"></i>
          <i className="bi bi-tiktok text-dark fs-3"></i>
      </div>
    </div>
  </div>
    </div>
  </footer>

</body>
    
    </>
  )
}

export default HelpPage