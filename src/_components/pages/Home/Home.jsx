"use client"
import React from 'react';
import styles from "./Home.module.css";
import Image from "next/image";
import EventsCard from "@pages/Home/Card/EventCards/Card";
import QnACard from "@pages/Home/Card/QnACards/Card"
import MentorCard from "@pages/Home/Card/MentorCards/Card"
import vectorImage from '@/images/vector-image.svg'

const Index = () => {
    return (
        <div className={styles.main}>
            {/* First Container */}
            <div className={styles.main_first_container}>
                <div className={styles.main_first_container_content}>
                    <div className={styles.main_first_container_content_title_area}>
                        <div className={styles.main_first_container_content_title_area_heading}>
                            Fostering Senior Junior Relation
                        </div>
                        <div className={styles.main_first_container_content_title_area_description}>
                            Student Mentorship Program is one of the largest on-campus student body initiatives which assigns a mentor (a Pre-Final or Final year student) to all the freshmen within the same branch. It ensures bridging the communication gap between them by providing a dynamic environment for healthy discussion, guidance and one-to-one counselling.
                        </div>
                        <button>
                            Learn more
                        </button>
                    </div>
                    <div className={styles.main_first_container_image}>
                        <Image src={vectorImage} />
                    </div>
                </div>
            </div>

            {/* Second Container */}
            <div className={styles.main_second_container}>
                <div className={styles.main_second_container_content}>
                    <div className={styles.main_second_container_content_heading}>
                        <span>Events</span>
                    </div>
                    <div className={styles.main_second_container_content_cards}>
                        {
                            Array.from(Array(3)).map((_,index)=>{
                                return <EventsCard />
                            })
                        }
                    </div>
                    <div className={styles.main_second_container_content_button}>
                        <button>
                            More about our events
                        </button>
                    </div>
                </div>
            </div>

            {/* Third Container */}
            <div className={styles.main_third_container}>
                <div className={styles.main_third_container_content_heading}>
                    <span>Hear from our Mentors</span>
                </div>
                <div className={styles.main_third_container_content_card_area}>
                    <div className={styles.main_third_container_content_card_area_left_fade}></div>
                    <div className={styles.main_third_container_content_cards}>
                        {
                            Array.from(Array(6)).map((_,index)=>{
                                return <MentorCard />
                            })
                        }
                    </div>
                    <div className={styles.main_third_container_content_card_area_right_fade}></div>
                </div>
            </div>

            {/* Fourth Container */}
            <div className={styles.main_fourth_container}>
                <div className={styles.main_fourth_container_content}>
                    <div className={styles.main_fourth_container_content_heading}>
                        What can we&nbsp;<span>help</span>&nbsp;you with?
                    </div>
                    <div className={styles.main_fourth_container_content_cards}>
                        {
                            Array.from(Array(5)).map((_,index)=>{
                                return <QnACard/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.main_fourth_container_option}>
                <a href="/">view more</a>
            </div>
        </div>
    );
}

export default Index;
