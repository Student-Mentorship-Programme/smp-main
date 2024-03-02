import React, { useState } from 'react'
import styles from './Card.module.css';
import dropIcon from '@/images/pages/home/drop-down.svg'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from 'next/image';

const Card = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.card_container}>
                <div className={styles.card_container_top}>
                    <div className={styles.card_container_top_left}>
                        {question}
                    </div>
                    <div className={styles.card_container_drop_down} onClick={toggleCard}>
                        {/* <Image src={isOpen ? "" : dropIcon} alt={isOpen ? "Drop-up" : "Drop-down"} /> */}
                        <button onClick={toggleCard}>
                            {isOpen ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className={styles.answer_container}>
                        {answer}
                    </div>
                )}
        </div>
    );
}

export default Card