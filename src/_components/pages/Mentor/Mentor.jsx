"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Mentor.module.css";
import ChartComponent from "./ChartComponent/ChartComponent";

const chartData = {
    labels: ["Male", "Female"],
    datasets: [
        {
            label: "Gender",
            data: [300, 100],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
            hoverOffset: 4,
        },
    ],
};

const Index = () => {
    const text = "Search by name, enrollment number or branch";
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const readXLSXFile = (filePath) => {
        const file = fs.readFileSync(filePath);
        const workbook = XLSX.read(file, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        let maleCount = 0;
        let femaleCount = 0;
        for (let i = 1; i < rows.length; i++) {
            const gender = rows[i][8];
            if (gender === "Male") {
                maleCount++;
            } else if (gender === "Female") {
                femaleCount++;
            }
        }
        setCount1(maleCount);
        setCount2(femaleCount);
    };

    useEffect(() => {
        const targetCount1 = 100;
        const targetCount2 = 200;
        const targetCount3 = 300;

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
                                <th>Something</th>
                                <th>Something</th>
                                <th>Something</th>
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
                        <ChartComponent data={chartData} />
                    </div>
                    <div className={styles.mentor_page_main_bar_charts}>
                        <ChartComponent data={chartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
