import React, { useState } from 'react'
import styles from './Card.module.css';
import dropIcon from '@/images/pages/home/drop-down.svg'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Image from 'next/image';

const Card = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.card_container}>
            <div className={`${styles.card_container_text_area} ${isOpen ? styles.opened : styles.closed}`}>
                <div>
                    {question}
                </div>
                {isOpen && (
                    <div className={styles.answer_container}>
                        {answer}
                    </div>
                )}
            </div>
            <div className={styles.card_container_drop_down} onClick={toggleCard}>
                <Image src={isOpen ? "" : dropIcon} alt={isOpen ? "Drop-up" : "Drop-down"} />
            </div>
        </div>
    );
}

export default Card