"use client"
import React, { useEffect, useState, useRef } from 'react'
import styles from './AboutUs.module.css';
import Image from 'next/image'
import image1 from '@/images/pages/about-us/image1.svg'
import image2 from '@/images/pages/about-us/image2.svg'
import image3 from '@/images/pages/about-us/image3.svg'
import image4 from '@/images/pages/about-us/image4.svg'
import mainImage from '@/images/pages/about-us/image-main.svg'
import { useRouter } from 'next/navigation'

const Index = () => {
    const router = useRouter();
    const scrollPosition = useRef(0);
    const activeChildren = useRef(0);

    const handleScroll = (e) => {
        console.log(e.currentTarget);
        // if (scrollPosition.current < window.scrollY) {
        //     let slideMain = document.getElementsByClassName(styles.about_us_main)[0];
        //     slideMain.children[activeChildren.current + 1].scrollIntoView({ behavior: "smooth" });
        //     setTimeout(() => activeChildren.current += 1, 1000);
        // }
        // else {
        // }
        // scrollPosition.current = window.scrollY;
    };

    return (
        <div className={styles.about_us_main} onWheelCapture={handleScroll}>
            <div className={styles.slide_container}>
                <div className={styles.background_overlay}></div>
            </div>
            <div className={styles.slide_container}>
                <div>
                    <div className={styles.about_us_main_heading}>
                        ABOUT US
                    </div>
                    <div className={styles.about_us_main_container_1}>
                        <div className={styles.about_us_main_container_1_content}>
                            <div className={styles.about_us_main_container_1_content_text_area}>
                                <div className={styles.about_us_main_container_1_content_text_area_heading}>
                                    <span>
                                        What is SMP?
                                    </span>
                                </div>
                                <div className={styles.about_us_main_container_1_content_text_area_description}>
                                    <span>
                                        SMP is a student initiative of IIT Roorkee under the aegis of the DoSW which ensures that the transition of freshers into the IIT life is smooth.
                                    </span>
                                </div>
                                <div className={styles.about_us_main_container_1_content_text_area_image}>
                                    <Image src={image1} />
                                </div>
                            </div>
                            <div className={styles.about_us_main_container_1_content_image}>
                                <Image src={image2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.slide_container}>
                <div className={styles.about_us_main_container_2}>
                    <div className={styles.about_us_main_container_2_content}>
                        <div className={styles.about_us_main_container_2_content_image}>
                            <Image src={image3} />
                        </div>
                        <div className={styles.about_us_main_container_2_content_text_area}>
                            <div className={styles.about_us_main_container_2_content_text_area_heading}>
                                <span>
                                    What we do?
                                </span>
                            </div>
                            <div className={styles.about_us_main_container_2_content_text_area_description}>
                                <span>
                                    We are mainly involved in mentoring the students on the campus, off the campus and on the web. We conduct guest lectures and and cross-mentorship. Please add more lines related to what SMP does so that it not only gives a clear idea on the functionality but also describes why SMP is important.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.slide_container}>
                <div className={styles.about_us_main_container_3}>
                    <div className={styles.about_us_main_container_3_content}>
                        <div className={styles.about_us_main_container_3_content_text_area}>
                            <div className={styles.about_us_main_container_3_content_text_area_heading}>
                                <span>
                                    Our Team
                                </span>
                            </div>
                            <div className={styles.about_us_main_container_3_content_text_area_description}>
                                <span>
                                    The amazing amalgamation of designers, developers, operations, etc. along with a vast alumni base has always been an important part of our journey. Check out our Team's page to know more about our team.
                                </span>
                            </div>
                            <button onClick={() => router.push("/")}>Our Team</button>
                        </div>
                        <div className={styles.about_us_main_container_3_content_image}>
                            <Image src={image4} />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Index