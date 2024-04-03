import React from 'react';
import styles from "./TeamCard.module.css";
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const TeamCard = ({ elem }) => {
    return (
        <div className={styles.team_card_holder}>
            <div className={styles.team_card_image} style={{ backgroundColor: elem.bgColor }}>
                <Image
                    src={elem.image}
                />
                {/* <div className={styles.team_card_social_media}>
                    <div>
                        <LinkedInIcon />
                        <InstagramIcon />
                    </div>
                </div> */}
            </div>
            <div className={styles.team_card_name}>
                {elem.name}
            </div>
            <div className={styles.team_card_position}>
                {elem.position}
            </div>
        </div>
    );
}

export default TeamCard;