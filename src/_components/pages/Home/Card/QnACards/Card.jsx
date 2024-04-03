// import React, { useState } from 'react'
// import styles from './Card.module.css';
// import dropIcon from '@/images/pages/home/drop-down.svg'
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import Image from 'next/image';

// const Card = ({ question, answer }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleCard = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className={styles.card_container}>
//                 <div className={styles.card_container_top}>
//                     <div className={styles.card_container_top_left}>
//                         {question}
//                     </div>
//                     <div className={styles.card_container_drop_down} onClick={toggleCard}>
//                         <button onClick={toggleCard}>
//                             {isOpen ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
//                         </button>
//                     </div>
//                 </div>
//                 {isOpen && (
//                     <div className={styles.answer_container}>
//                         {answer}
//                     </div>
//                 )}
//         </div>
//     );
// }

// export default Card

import React, { useEffect, useRef, useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styles from './Card.module.css'; 
import { Button } from 'antd';

const QnACard = ({ question, answer, number }) => {
    const [isOpen, setIsOpen] = useState(number === 0 ? true : false);
    const [answerHeight, setAnswerHeight] = useState(0);
    const answerRef = useRef(null);

    useEffect(() => {
        setAnswerHeight(isOpen ? answerRef.current.scrollHeight : 0);
    }, [isOpen]);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.card_container}>
            <div className={styles.question} onClick={toggleCard}>
                {question}
                <Button
                    className={`${styles.toggle_button}`}
                    icon={isOpen ? <UpOutlined /> : <DownOutlined />}
                />
            </div>
            {isOpen && (
                <div
                    className={`${styles.answer} ${styles.opened}`}
                    style={{ maxHeight: `${answerHeight}px` }}
                    ref={answerRef}
                >
                    {answer}
                </div>
            )}
        </div>
    );
};

export default QnACard;



