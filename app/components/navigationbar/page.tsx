import React from 'react'
import styles from './navBar.module.css'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Titan_One } from 'next/font/google';
import { Poppins } from 'next/font/google';

const titanOne = Titan_One({ subsets: ["latin"], weight: ["400"] });
const poppin8 = Poppins({ subsets:["latin"], weight: ["800"] });


const NavBar = () => {
  return (
    <nav className={styles.navBar}>
            <div className={`${styles.left} ${styles.navLinks}`}>
                <ul>
                    <li className={styles.navItem} style={poppin8.style}>SHOP</li>
                    <Link href="/brandinfo" className={styles.navItem} style={poppin8.style}>ABOUT</Link>
                    <Link href="/helppage" className={styles.navItem} style={poppin8.style}>CONTACT US</Link>
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
  )
}

export default NavBar