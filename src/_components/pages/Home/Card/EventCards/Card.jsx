import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';

const Card = ({ title, description, icon }) => {
    const maxLength = 130;
    const truncateDescription = (text) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className={styles.card_container}>
            <div className={styles.card_container_icon}>
                <Image src={icon} className={styles.card_container_icon} />
            </div>
            <div className={styles.card_container_heading}>
                <span>{title}</span>
            </div>
            <div className={styles.card_container_description}>
                {truncateDescription(description)}
            </div>
            <div className={styles.card_container_learn_more}>
                <a href="/">Learn more</a>
            </div>
        </div>
    );
};

export default Card;
