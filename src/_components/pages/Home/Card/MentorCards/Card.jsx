import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import styles from './Card.module.css';

const { Meta } = Card;
const { Text } = Typography;

const CustomCard = ({ mentor, quote, branch, year }) => {
    return (
        <Card className={styles.card_container}>
            <Avatar className={styles.card_container_icon} />
            <div className={styles.card_container_quote}>
                <Text>{quote}</Text>
            </div>
            <Meta
                className={styles.card_container_name}
                title={mentor}
            />
            <div className={styles.card_container_branch_year}>
                <Text>{branch}</Text>
                <Text>{year}</Text>
            </div>
        </Card>
    );
};

export default CustomCard;
