import React from 'react'
import styles from './Card.module.css';
import icon1 from '@/images/pages/home/icon1.svg';
import Image from 'next/image';

const Card = () => {
    return (
        <div className={styles.card_container}>
            <div className={styles.card_container_icon}>
                <Image src={icon1} className={styles.card_container_icon}/>
            </div>
            <div className={styles.card_container_heading}>
                <span>Cross Mentorship</span>
            </div>
            <div className={styles.card_container_description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste quia animi eum deleniti alias natus commodi temporibus amet ipsa. 
            </div>
            <div className={styles.card_container_learn_more}>
                <a href="/">Learn more</a>
            </div>
        </div>
    )
}

export default Card