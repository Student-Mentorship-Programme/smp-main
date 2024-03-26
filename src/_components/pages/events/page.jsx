"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Image1 from "@/images/pages/events/image1.svg"
import Image2 from "@/images/pages/events/image2.svg"
import Image3 from "@/images/pages/events/image3.svg"
import Image4 from "@/images/pages/events/image4.svg"

const events = [
    {
        title: 'Talk on Machine Learning & Quantum Computing',
        date: '2024-02-26',
        time: '16:15:00 hrs',
        venue: 'LHC 005',
        description: 'The wait for all the Machine Learning and Quantum Computing enthusiasts is finally over!',
        image: Image1
    },
    {
        title: 'Cross Mentorship',
        date: '2024-04-04',
        time: '16:30:00 hrs',
        venue: 'SMP Office',
        description: 'SMP conducts cross-mentorship intra-batch and inter-branch as well.',
        image: Image2
    },
    {
        title: 'Competitive Programming and Web Development Talk',
        date: '2024-02-23',
        time: '16:15:00 hrs',
        venue: 'LHC 005',
        description: 'Here comes the most awaited session of the series, all you need to know about Software Engineering.',
        image: Image3
    },
    {
        title: 'Climbing up the Corporate Ladder',
        date: '2024-02-23',
        time: '16:15:00 hrs',
        venue: 'LHC 005',
        description: 'Get a real outlook of the corporate world and make better decision about your chosen field.',
        image: Image4
    },
]

const Index = () => {
    return (
        <div className={styles.events_main}>
            <div className={styles.events_main_heading}>
                <span>Events</span>
            </div>
            {
                events.map((event, index)=>{
                    return (
                        <div key={index} className={`${styles.event_card} ${index % 2 === 0 ? styles.even : styles.odd}`}>
                            <div className={styles.event_card_content}>
                                <span className={styles.event_card_content_title}>{event?.title}</span>
                                <div className={styles.event_card_content_main}>
                                    <span className={styles.event_card_content_main_date}>
                                        {event?.date}
                                    </span>
                                    <ul>
                                        <li>{event?.time}</li>
                                        <li>{event?.venue}</li>
                                    </ul>
                                </div>
                                <div className={styles.event_card_content_main_description}>
                                    <span>{event?.description}</span>
                                </div>
                                <button>Learn more</button>
                            </div>
                            <div className={styles.event_card_image}>
                                <Image 
                                    src={event?.image}
                                    alt={event?.title}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Index