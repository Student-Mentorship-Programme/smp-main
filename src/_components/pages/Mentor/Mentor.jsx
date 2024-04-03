"use client";
import React, { useState, useEffect } from "react";
import styles from "./Mentor.module.css";

const Index = () => {
    const text = "Search by name, enrollment number or branch";
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(() => {
        const targetCount1 = 100; // Set your target count for number 1 here
        const targetCount2 = 200; // Set your target count for number 2 here
        const targetCount3 = 300; // Set your target count for number 3 here

        const duration = 3000; // Duration in milliseconds

        // Calculate steps for each number
        const step1 = Math.ceil(targetCount1 / (duration / 100));
        const step2 = Math.ceil(targetCount2 / (duration / 100));
        const step3 = Math.ceil(targetCount3 / (duration / 100));

        // Interval for number 1
        const interval1 = setInterval(() => {
            setCount1((prevCount) => {
                const nextCount = prevCount + step1;
                return nextCount >= targetCount1 ? targetCount1 : nextCount;
            });
        }, 100);

        // Interval for number 2
        const interval2 = setInterval(() => {
            setCount2((prevCount) => {
                const nextCount = prevCount + step2;
                return nextCount >= targetCount2 ? targetCount2 : nextCount;
            });
        }, 100);

        // Interval for number 3
        const interval3 = setInterval(() => {
            setCount3((prevCount) => {
                const nextCount = prevCount + step3;
                return nextCount >= targetCount3 ? targetCount3 : nextCount;
            });
        }, 100);

        // Clear intervals
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <div className={styles.mentor_page_main}>
            <div className={styles.mentor_page_main_content}>
                <div className={styles.mentor_page_main_heading}>
                    <span>Mentors</span>&nbsp;Search
                </div>
                <div className={styles.mentor_page_main_filter}>
                    <input type="text" placeholder={text} />
                </div>
                <div>{count1}</div>
                <div>{count2}</div>
                <div>{count3}</div>
            </div>
        </div>
    );
};

export default Index;
