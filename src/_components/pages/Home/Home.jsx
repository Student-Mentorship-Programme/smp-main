"use client";
import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import EventsCard from "@pages/Home/Card/EventCards/Card";
import QnACard from "@pages/Home/Card/QnACards/Card";
import MentorCard from "@pages/Home/Card/MentorCards/Card";
import vectorImage from "@/images/vector-image.svg";
import icon1 from "@/images/pages/home/icon1.svg";
import icon2 from "@/images/pages/home/icon2.svg";
import icon3 from "@/images/pages/home/icon3.svg";
import { useRouter } from "next/navigation";
import ParticleCanvas from "./ParticleCanvas/ParticleCanvas";

const eventCards = [
    {
        title: "AMP",
        description:
            "Alumni Mentorship Program bridges the gap between current students and esteemed college alumni, offering invaluable guidance, support, and mentorship. From career advice to personal development tips, our alumni mentors empower students to navigate their academic and professional journeys with confidence.",
        icon: icon1,
    },
    {
        title: "Career Talks",
        description:
            "SMP organizes regular career talks where professionals from various industries share insights, trends, and opportunities in their respective fields. These talks help students gain valuable knowledge about different career paths and make informed decisions about their future.",
        icon: icon2,
    },
    {
        title: "Mentor Workshop",
        description:
            "The Mentor Workshop, organized by the Student Mentorship Program (SMP), is a pivotal event designed to equip mentors with the strategies and insights necessary to excel in their role. Through interactive sessions and guidance, mentors undergo comprehensive training, fostering a supportive community committed to student success.",
        icon: icon3,
    },
];

const mentorQuotes = [
    {
        mentor: "",
        quote: "",
        branch: "",
        year: "",
    },
    {
        mentor: "",
        quote: "",
        branch: "",
        year: "",
    },
    {
        mentor: "",
        quote: "",
        branch: "",
        year: "",
    },
    {
        mentor: "",
        quote: "",
        branch: "",
        year: "",
    },
    {
        mentor: "",
        quote: "",
        branch: "",
        year: "",
    },
    {
        mentor: "",
        quote: "",
        branch: "",
        year: "",
    },
];

const questionAnswers = [
    {
        question: "How much time should I devote to being a mentor?",
        answer: "The amount of time you devote to being a mentor can vary based on your availability and the needs of your mentees. Generally, mentors are expected to commit to regular meetings with their mentees, typically ranging from one to two hours per meeting, as well as additional time for communication and support as needed",
    },
    {
        question:
            "What are the benefits of participating in the student mentorship program?",
        answer: "Participation in the student mentorship program offers numerous benefits, including personal and professional growth, networking opportunities, access to valuable resources and support, enhanced communication and leadership skills, and a sense of community and belonging",
    },
    {
        question: "What can I expect from my mentor?",
        answer: "You can expect your mentor to provide guidance, advice, and support tailored to your needs. Mentors are there to help you set goals, overcome challenges, and make the most of your university experience",
    },
    {
        question: "How often should I meet with my mentor?",
        answer: "The frequency of mentor-mentee meetings can vary depending on your needs and availability. Typically, mentors and mentees meet regularly, such as once a week or biweekly, to maintain consistent communication and progress towards goals",
    },
    {
        question: "What topics can I discuss with my mentor?",
        answer: "You can discuss a wide range of topics with your mentor, including academic challenges, career exploration, time management, study skills, extracurricular involvement, personal development, and any other concerns or interests you may have",
    },
];

const Index = () => {
    const router = useRouter();
    return (
        <div className={styles.main}>
            {/* First Container */}
            <div className={styles.main_first_container}>
                <div className={styles.main_first_container_content}>
                    <div
                        className={
                            styles.main_first_container_content_title_area
                        }
                    >
                        <div
                            className={
                                styles.main_first_container_content_title_area_heading
                            }
                        >
                            Fostering Senior Junior Relation
                        </div>
                        <div
                            className={
                                styles.main_first_container_content_title_area_description
                            }
                        >
                            Student Mentorship Program is one of the largest
                            on-campus student body initiatives which assigns a
                            mentor (a Pre-Final or Final year student) to all
                            the freshmen within the same branch. It ensures
                            bridging the communication gap between them by
                            providing a dynamic environment for healthy
                            discussion, guidance and one-to-one counselling.
                        </div>
                        <div
                            className={
                                styles.main_first_container_content_title_area_button
                            }
                        >
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className={styles.main_first_container_image}>
                        <Image src={vectorImage} />
                    </div>
                </div>
            </div>
            {/* Second Container */}
            <div className={styles.main_second_container}>
                <div className={styles.main_second_container_content}>
                    <div
                        className={styles.main_second_container_content_heading}
                    >
                        <span>Events</span>
                    </div>
                    <div className={styles.main_second_container_content_cards}>
                        {eventCards.map((event, index) => {
                            return (
                                <EventsCard
                                    key={index}
                                    title={event.title}
                                    description={event.description}
                                    icon={event.icon}
                                />
                            );
                        })}
                    </div>
                    <div
                        className={styles.main_second_container_content_button}
                    >
                        <button onClick={() => router.push("/events")}>
                            More about our events
                        </button>
                    </div>
                </div>
            </div>
            {/* Third Container */}
            <div className={styles.main_third_container}>
                <div className={styles.main_third_container_content_heading}>
                    <span>Gallery</span>
                </div>
                <div className={styles.main_third_container_content_card_area}>
                    <div className={styles.main_third_container_content_cards}>
                        <MentorCard />
                    </div>
                </div>
            </div>
            {/* Fourth Container */}
            <div className={styles.main_fourth_container}>
                <div className={styles.main_fourth_container_content}>
                    <div
                        className={styles.main_fourth_container_content_heading}
                    >
                        What can we&nbsp;<span>help</span>&nbsp;you with?
                    </div>
                    <div className={styles.main_fourth_container_content_cards}>
                        {questionAnswers.map((qA, index) => {
                            return (
                                <QnACard
                                    key={index}
                                    question={qA.question}
                                    answer={qA.answer}
                                    number={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* <div className={styles.main_fourth_container_option}>
                <a href="/">view more</a>
            </div> */}
        </div>
    );
};

export default Index;
