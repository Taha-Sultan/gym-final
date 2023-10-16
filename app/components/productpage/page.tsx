import React from 'react'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from './ProductPage.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Titan_One } from 'next/font/google';
import { Poppins } from 'next/font/google';


const poppin8 = Poppins({ subsets:["latin"], weight: ["800"] });
const poppin6 = Poppins({ subsets:["latin"], weight: ["600"] });
const titanOne = Titan_One({ subsets: ["latin"], weight: ["400"] });
const poppin5 = Poppins({ subsets:["latin"], weight: ["500"] });
const poppin4 = Poppins({ subsets:["latin"], weight: ["400"] });
const poppin3 = Poppins({ subsets:["latin"], weight: ["300"] });
const poppin7 = Poppins({ subsets:["latin"], weight: ["700"] });



const ProductPage = () => {
  return (
    <>
    
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



    <div className={`${styles.mainPage} row container`}>
        <div className={`col-lg-5 ${styles.imgMainDiv}`}>
            <div className={styles.productImgs}>
                <div className={styles.mainProduct}>
                    <Image width={1000} height={1000} src="/mainProduct.png" alt="" />
                </div>
                <div className={styles.productSizes}>
                    <Image className={`${styles.img1} ${styles.imgProduct}`} width={200} height={200} src="/productSizes.png" alt="" />
                    <Image className={`${styles.img2} ${styles.imgProduct}`} width={200} height={200} src="/productSizes.png" alt="" />
                    <Image className={`${styles.img3} ${styles.imgProduct}`} width={200} height={200} src="/productSizes.png" alt="" />
                    <Image className={`${styles.img4} ${styles.imgProduct}`} width={200} height={200} src="/productSizes.png" alt="" />
                </div>
            </div>
            <div className={styles.sizeChartDiv}>
                <div className={styles.sizeChartTxt} style={poppin4.style}>General Size Chart</div>
                <i className={`bi bi-plus-lg size-chart-icon`}></i>
            </div>
        </div>
        <div className={`col-lg-6 p-0 ${styles.descDiv}`}>
            <div className={styles.topDesc}>
                <span className={styles.headingDesc} style={poppin7.style}>Phantom Hero “Denim” compression T-Shirt</span>
                <div className={`${styles.priceAndRating} d-flex`}>
                    <div className={styles.price} style={poppin4.style}>$55.00 USD</div>
                    <div className={`${styles.rating} d-flex gap-2`}>
                        <i className={`bi bi-star-fill`}></i>
                        <i className={`bi bi-star-fill`}></i>
                        <i className={`bi bi-star-fill`}></i>
                        <i className={`bi bi-star-fill`}></i>
                    </div>
                </div>
                <div className={styles.paraDesc} style={poppin4.style}>
                    Paragraph will be added here later with description of product. Paragraph will be added here later with description of product. Paragraph will be added here later with description of product. 
                </div>
            </div>
            <div className={styles.bottomDesc}>
                <div className={styles.size}>
                    <div className={styles.sizeTxt} style={poppin4.style}>Size</div>
                    <div className={styles.sizeBtns} style={poppin4.style}>
                        <button className={`${styles.sizeBtnMain} ${styles.sizes}`} style={poppin4.style}>Small</button>
                        <button className={`${styles.sizeBtn} ${styles.sizes}`} style={poppin4.style}>Medium</button>
                        <button className={`${styles.sizeBtn} ${styles.sizes}`} style={poppin4.style}>Large</button>
                        <button className={`${styles.sizeBtn} ${styles.sizes}`} style={poppin4.style}>X-Large</button>
                    </div>
                </div>
                <div className={styles.payment}>
                    <div className={styles.addToCart} style={poppin5.style}>ADD TO CART</div>
                    <div className={styles.payByGpay} style={poppin4.style}><div className={styles.gpayTxt}><span className={styles.buyWith} style={poppin4.style}>Buy With </span><span><Image src="/googleFont.png" alt="" width={30} height={30} /></span><span className={styles.payFont} style={poppin4.style}>Pay</span></div></div>
                    <div className={styles.infoPaymentDesc}><span className={styles.txtInfoDescPay} style={poppin4.style}>Information</span><i className={`bi bi-chevron-down ${styles.chevron}`}></i></div>
                </div>
            </div>
        </div>
    </div>

    <div className={`${styles.moreFromUs} container`}>
        <div className={styles.headingMore} style={poppin8.style}>
            YOU MAY ALSO LIKE
        </div>
        <div className={`row ${styles.moreProducts}`}>
            <div className={`col-lg-3 col-6 ${styles.productMore1} ${styles.productMore}`}>
                <div className={styles.imageMore}>
                <Image width={350} height={350} src="/productMore.png" alt="" />
                </div>
                <div className={styles.descMore} style={poppin5.style}>
                    Phantom Hero “Manifesting Dreams” T-shirt
                </div>
                <div className={styles.priceMore} style={poppin3.style}>
                    $34.00
                </div>
            </div>
            <div className={`col-lg-3 col-6 ${styles.productMore2} ${styles.productMore}`}>
                <div className={styles.imageMore}>
                    <Image width={350} height={350} src="/productMore.png" alt="" />
                </div>
                <div className={styles.descMore} style={poppin5.style}>
                    Phantom Hero “Manifesting Dreams” T-shirt
                </div>
                <div className={styles.priceMore} style={poppin3.style}>
                    $34.00
                </div>
            </div>
            <div className={`col-lg-3 col-6 ${styles.productMore3} ${styles.productMore}`}>
                <div className={styles.imageMore}>
                    <Image width={350} height={350} src="/productMore.png" alt="" />
                </div>
                <div className={styles.descMore} style={poppin5.style}>
                    Phantom Hero “Manifesting Dreams” T-shirt
                </div>
                <div className={styles.priceMore} style={poppin3.style}>
                    $34.00
                </div>
            </div>
            <div className={`col-lg-3 col-6 ${styles.productMore4} ${styles.productMore}`}>
                <div className={styles.imageMore}>
                    <Image width={350} height={350} src="/productMore.png" alt="" />
                </div>
                <div className={styles.descMore} style={poppin5.style}>
                    Phantom Hero “Manifesting Dreams” T-shirt
                </div>
                <div className={styles.priceMore} style={poppin3.style}>
                    $34.00
                </div>
            </div>
        </div>
    </div>

    <hr className={styles.endLine}></hr>



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





    </>
  )
}

export default ProductPage