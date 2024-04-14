"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Mentor.module.css";
import ChartComponent from "./ChartComponent/ChartComponent";

const companyChartData = {
    labels: [
        "SDE",
        "Quant",
        "Design",
        "Data Analyst",
        "Data",
        "Core",
        "Consulting",
        "Analyst",
        "Others",
    ],
    datasets: [
        {
            label: "Mentorship Stats",
            data: [120, 4, 6, 10, 20, 48, 8, 35, 20],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(244, 180, 0)",
                "rgb(15, 157, 88)",
                "rgb(255, 0, 216)",
                "rgb(67, 73, 210)",
                "rgb(247, 120, 40)",
                "rgb(164, 0, 247)",
            ],
            hoverOffset: 4,
        },
    ],
};

const branchMentorChartData = {
    labels: [
        "CSE",
        "EE",
        "ECE",
        "MIED",
        "Civil",
        "Chemical",
        "Earth Science",
        "EPH",
        "Meta",
        "Others",
    ],
    datasets: [
        {
            label: "Mentors",
            data: [38, 42, 27, 45, 37, 200, 18, 14, 21, 119],
            backgroundColor: [
                "rgb(66, 133, 244)",
                "rgb(219, 68, 55)",
                "rgb(244, 180, 0)",
                "rgb(15, 157, 88)",
                "rgb(255, 0, 216)",
                "rgb(67, 73, 210)",
                "rgb(247, 120, 40)",
                "rgb(27, 218, 187)",
                "rgb(164, 0, 247)",
                "rgb(239, 216, 5)",
            ],
            hoverOffset: 4,
        },
    ],
};

// Dummy Data for now
const dummyMentorData = [
    {
        name: "John Doe",
        enrollmentId: "2021001",
        branch: "Computer Science",
        year: "3",
        interest: "Machine Learning",
    },
    {
        name: "Alice Smith",
        enrollmentId: "2021002",
        branch: "Electrical Engineering",
        year: "2",
        interest: "Robotics",
    },
    {
        name: "Bob Johnson",
        enrollmentId: "2021003",
        branch: "Mechanical Engineering",
        year: "4",
        interest: "Automotive Engineering",
    },
    {
        name: "Emily Brown",
        enrollmentId: "2021004",
        branch: "Civil Engineering",
        year: "3",
        interest: "Structural Engineering",
    },
    {
        name: "Michael Wilson",
        enrollmentId: "2021005",
        branch: "Chemical Engineering",
        year: "2",
        interest: "Biotechnology",
    },
    {
        name: "Sophia Garcia",
        enrollmentId: "2021006",
        branch: "Aerospace Engineering",
        year: "4",
        interest: "Astronautics",
    },
];

const Index = () => {
    const text = "Search by name, enrollment number or branch";
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(() => {
        const targetCount1 = 1920;
        const targetCount2 = 610;
        const targetCount3 = 381;

        const duration = 3000;

        const step1 = Math.ceil(targetCount1 / (duration / 100));
        const step2 = Math.ceil(targetCount2 / (duration / 100));
        const step3 = Math.ceil(targetCount3 / (duration / 100));

        const interval1 = setInterval(() => {
            setCount1((prevCount) => {
                const nextCount = prevCount + step1;
                return nextCount >= targetCount1 ? targetCount1 : nextCount;
            });
        }, 100);

        const interval2 = setInterval(() => {
            setCount2((prevCount) => {
                const nextCount = prevCount + step2;
                return nextCount >= targetCount2 ? targetCount2 : nextCount;
            });
        }, 100);

        const interval3 = setInterval(() => {
            setCount3((prevCount) => {
                const nextCount = prevCount + step3;
                return nextCount >= targetCount3 ? targetCount3 : nextCount;
            });
        }, 100);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <div className={styles.mentor_page_main}>
            <div className={styles.mentor_page_main_content}>
                <div className={styles.mentor_page_main_search_section}>
                    <div className={styles.mentor_page_main_heading}>
                        <span>Mentors</span>&nbsp;Search
                    </div>
                    <div className={styles.mentor_page_main_filter}>
                        <input type="text" placeholder={text} />
                    </div>
                </div>
                <div className={styles.mentor_page_main_table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Mentees</th>
                                <th>Meets</th>
                                <th>Mentors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{count1}</td>
                                <td>{count2}</td>
                                <td>{count3}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.mentor_page_main_charts}>
                    <div className={styles.mentor_page_main_pie_charts}>
                        <ChartComponent data={branchMentorChartData} />
                        <span>Branch Distribution of Mentors</span>
                    </div>
                    <div className={styles.mentor_page_main_bar_charts}>
                        <ChartComponent data={companyChartData} />
                        <span>Company Distribution by Profile</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
