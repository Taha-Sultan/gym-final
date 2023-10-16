"use client"

import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import Head from 'next/head'
import styles from './mainpage.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Titan_One } from 'next/font/google';
import { Poppins } from 'next/font/google';


const titanOne = Titan_One({ subsets: ["latin"], weight: ["400"] });
const poppin5 = Poppins({ subsets:["latin"], weight: ["500"] });
const poppin6 = Poppins({ subsets:["latin"], weight: ["600"] });
const poppin7 = Poppins({ subsets:["latin"], weight: ["700"] });
const poppin8 = Poppins({ subsets:["latin"], weight: ["800"] });


const Page = () => {
  return (
    <body style={{overflowX:'hidden'}}>
      {/* <h1>Hello WOrld!</h1>
      <Link href="/components/brandinfo">Brand Page</Link><br />
      <Link href="/components/helppage">Help Page</Link><br />
      <Link href="/components/jointeam">Join Team</Link><br />
      <Link href="/components/productpage">Product Page</Link><br /> */}

      <div className={styles.mainPage}>
        <nav className={styles.navBar}>
            <div className={`${styles.left} ${styles.navLinks}`}>
                <ul>
                    <li className={styles.navItem} style={poppin8.style}>SHOP</li>
                    <Link href="/components/brandinfo" className={styles.navItem} style={poppin8.style}>ABOUT</Link>
                    <Link href="/components/helppage" className={styles.navItem} style={poppin8.style}>CONTACT US</Link>
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
        <div className={styles.mainpageTxt}>
              <div className={styles.logoMain}>
                  Erratic
              </div>
              <div className={styles.heading} style={poppin8.style}>
                  Phantom Hero Collection
              </div>
              <div className={styles.shopBtn}>
                  <a href="#" style={poppin6.style}><u>SHOP</u></a>
              </div>
        </div>
      </div>


      <div className={`container ${styles.popularDiv}`}>
      <div className={styles.popularDivTop}>
            <div className={styles.left} style={poppin8.style}>POPULAR</div>
            <div className={styles.right} style={poppin8.style}>
                SHOP ALL
            </div>
      </div>

      <Swiper
        className={styles.Swiper}
        spaceBetween={10}
        slidesPerView={5}
        onSlideChange={ () => console.log('slide change') }
        onSwiper={ (swiper) => console.log(swiper)} 
      >
        <div className="swiper-wrapper">
          <SwiperSlide  className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SlideItem}>
          <div className={`${styles.product} col-lg-3 m-auto ${styles.product1}`}>
                  <div className={styles.image}>
                      <Image src="/popular-item-img.jpg" alt="" height={1000} width={200} />
                  </div>
                  <div className={styles.productInfo}>
                      <div className={styles.productName} style={poppin7.style}>Product Name</div>
                      <div className={styles.phantomDiv}>
                          <div className={styles.phantomTxt} style={poppin7.style}>Phantom Hero</div>
                          <div className={styles.phantomCollection} style={poppin7.style}>Collection</div>
                      </div>
                      <div className={styles.price} style={poppin7.style}>$36.00</div>
                  </div>
              </div>
          </SwiperSlide>
        </div>
      </Swiper>
      </div>

      <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <Image src="/landing-right-grid-img.png" alt="" height={500} width={500}/>
              <div className={styles.gridItemTxtDiv}>
                <div className={styles.newCollectionTxt} style={poppin8.style}>
                  NEW <br/>COLLECTION
                </div>
                <div className={styles.checkItOut} style={poppin6.style}>
                  Go check it out
                </div>
                <button className={styles.shopNowBtn} style={poppin8.style}>
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.gridItem1}>
                <div className={styles.gridItemTxtDiv1}>
                  <div className={styles.pumpCover} style={poppin8.style}>
                    PUMP <br/>COVER
                  </div>
                  <div className={styles.overSized} style={poppin6.style}>
                    Oversized. Hide your progress
                  </div>
                  <button className={styles.shopNowBtn} style={poppin8.style}>
                    SHOP NOW
                  </button>
                </div>
                <Image src="/landing-left-grid-img-1.png" alt="" width={530 } height={1000} className={styles.landingLeftGridImg1}/>
              </div>
              <div className={styles.gridItem2}>
                <Image src="/landing-left-grid-img-2.png" alt="" width={540} height={1000} className={styles.landingLeftGridImg2}/>
                <div className={styles.gridItemTxtDiv2}>
                  <div className={styles.lastChance} style={poppin8.style}>
                    LAST <br/>CHANCE
                  </div>
                  <div className={styles.dontMiss} style={poppin6.style}>
                    Dont miss out!
                  </div>
                  <button className={styles.shopNowBtn} style={poppin8.style}>
                    SHOP NOW
                  </button>
                </div>
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


    </body>
  )
}

export default Page


