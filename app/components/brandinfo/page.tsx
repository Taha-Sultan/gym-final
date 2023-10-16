import React from 'react'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from './brandinfo.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Titan_One } from 'next/font/google';
import { Poppins } from 'next/font/google';

const titanOne = Titan_One({ subsets: ["latin"], weight: ["400"] });
const poppin5 = Poppins({ subsets:["latin"], weight: ["500"] });
const poppin6 = Poppins({ subsets:["latin"], weight: ["600"] });
const poppin7 = Poppins({ subsets:["latin"], weight: ["700"] });
const poppin8 = Poppins({ subsets:["latin"], weight: ["800"] });

const BrandInfo = () => {
  return (
    <>
    <Head>
      <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"/>
    </Head>

    <body>
    <div className={styles.body}>

<nav className={`${styles.navbar}`}>
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
        <i className="bi bi-handbag"></i>
        </div>
    </div>
</nav>

<div className={`${styles.mainPage} row`}>
    <div className={`col-lg-6 ${styles.imgDiv} m-auto`}>
        <Image src="/brandpageimg.png" className={`${styles.brandImage} m-auto`} width={10000} height={1000} alt=""/>
    </div>
    <div className={`col-lg-6 ${styles.txtDiv}`}>
        <div className={styles.txtDivHeading} style={poppin8.style}>
            ERRATIC
        </div>
        <div className={styles.txtDivParas}>
            <div className={styles.txtDivPara}  style={poppin6.style}>Add a paragraph about your brand here and we will fill this in later.</div>
            <div className={styles.txtDivPara}  style={poppin6.style}>Add a paragraph about your brand here and we will fill this in later. Add a paragraph about your brand here and we will fill this in later.</div>
            <div className={styles.txtDivPara}  style={poppin6.style}>Add a paragraph about your brand here and we will fill this in later. Add a paragraph about your brand here and we will fill this in later.</div>
        </div>
    </div>
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

</div>
    </body>
</>
  )
}

export default BrandInfo