"use client";
import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Card = ({ title, description, icon }) => {
    const router = useRouter();
    const maxLength = 128;
    const truncateDescription = (text) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
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
                <Link href={"/events"}>Learn more</Link>
            </div>
        </div>
    );
};

export default Card;
