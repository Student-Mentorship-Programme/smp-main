"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Image1 from "@/images/pages/events/image1.svg";
import Image2 from "@/images/pages/events/image2.svg";
import Image3 from "@/images/pages/events/image3.svg";
import Image4 from "@/images/pages/events/image4.svg";

const events = [
    {
        title: "Alumni Mentorship Program",
        date: "2024-02-26",
        time: "16:15:00 hrs",
        venue: "LHC 005",
        description:
            "Alumni Mentorship Program bridges the gap between current students and esteemed college alumni, offering invaluable guidance, support, and mentorship. From career advice to personal development tips, our alumni mentors empower students to navigate their academic and professional journeys with confidence.",
        image: Image1,
    },
    {
        title: "Mentor Workshop",
        date: "2024-04-04",
        time: "16:30:00 hrs",
        venue: "SMP Office",
        description:
            "The Mentor Workshop, organized by the Student Mentorship Program (SMP), is a pivotal event designed to equip mentors with the strategies and insights necessary to excel in their role. Through interactive sessions and guidance, mentors undergo comprehensive training, fostering a supportive community committed to student success.",
        image: Image2,
    },
    {
        title: "Career Talks",
        date: "2024-02-23",
        time: "16:15:00 hrs",
        venue: "LHC 005",
        description:
            "SMP organizes regular career talks where professionals from various industries share insights, trends, and opportunities in their respective fields. These talks help students gain valuable knowledge about different career paths and make informed decisions about their future.",
        image: Image3,
    },
    {
        title: "Ice-Breaking Events",
        date: "2024-02-23",
        time: "16:15:00 hrs",
        venue: "LHC 005",
        description:
            "To foster a sense of community and camaraderie among students, SMP hosts ice-breaking events at the beginning of each academic year. These events include fun activities and games designed to help students get to know each other better and build lasting friendships.",
        image: Image4,
    },
    {
        title: "Mentorship Programs",
        date: "2024-02-23",
        time: "16:15:00 hrs",
        venue: "LHC 005",
        description:
            "SMP facilitates mentorship programs where senior students mentor junior students, providing guidance, support, and advice on academic, career, and personal matters. These mentorship relationships help students navigate the challenges of college life and make the most of their time at IIT Roorkee.",
        image: Image4,
    },
];

const Index = () => {
    return (
        <div className={styles.events_main}>
            <div className={styles.events_main_heading}>
                <span>Events</span>
            </div>
            {events.map((event, index) => {
                return (
                    <div
                        key={index}
                        className={`${styles.event_card} ${
                            index % 2 === 0 ? styles.even : styles.odd
                        }`}
                    >
                        <div className={styles.event_card_content}>
                            <span className={styles.event_card_content_title}>
                                {event?.title}
                            </span>
                            {/* <div className={styles.event_card_content_main}>
                                <span
                                    className={
                                        styles.event_card_content_main_date
                                    }
                                >
                                    {event?.date}
                                </span>
                                <ul>
                                    <li>{event?.time}</li>
                                    <li>{event?.venue}</li>
                                </ul>
                            </div> */}
                            <div
                                className={
                                    styles.event_card_content_main_description
                                }
                            >
                                <span>{event?.description}</span>
                            </div>
                            {/* <button>Learn more</button> */}
                        </div>
                        <div className={styles.event_card_image}>
                            <Image src={event?.image} alt={event?.title} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Index;
