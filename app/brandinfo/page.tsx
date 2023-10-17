import React from 'react'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from './brandinfo.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Titan_One } from 'next/font/google';
import { Poppins } from 'next/font/google';
import NavBar from '../components/navigationbar/page';
import Footer from '../components/footer/page';

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

<NavBar/>

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

<Footer/>

</div>
    </body>
</>
  )
}

export default BrandInfo