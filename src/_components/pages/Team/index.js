import React from 'react';
import styles from "./main.module.css";
import Image from 'next/image';
import TeamImage from "@/images/pages/team/TeamPage.jpg";
import TeamCard from './TeamCard';

// Test Import Images
import Shrey from "@/images/pages/team/Shrey.jpg";
import Piyush from "@/images/pages/team/Piyush.jpg";
import Kushagra from "@/images/pages/team/Kushagra.jpg";

const TeamInfo = {
    "secretaries": [
        {
            name: "Shrey Agrawal",
            position: "Chief Secretary",
            image: Shrey
        },
        {
            name: "Kushagra Chandiya",
            position: "Additional Secretary Planning and Strategy",
            image: Kushagra
        },
        {
            name: "Piyush Agarwal",
            position: "Additional Secretary Administration",
            image: Piyush
        },
        {
            name: "Shrey Agrawal",
            position: "Chief Secretary",
            image: Shrey
        },
        {
            name: "Kushagra Chandiya",
            position: "Additional Secretary Planning and Strategy",
            image: Kushagra
        },
        {
            name: "Piyush Agarwal",
            position: "Additional Secretary Administration",
            image: Piyush
        },
        {
            name: "Shrey Agrawal",
            position: "Chief Secretary",
            image: Shrey
        },
        {
            name: "Kushagra Chandiya",
            position: "Additional Secretary Planning and Strategy",
            image: Kushagra
        },
        {
            name: "Piyush Agarwal",
            position: "Additional Secretary Administration",
            image: Piyush
        },
        {
            name: "Shrey Agrawal",
            position: "Chief Secretary",
            image: Shrey
        },
        {
            name: "Kushagra Chandiya",
            position: "Additional Secretary Planning and Strategy",
            image: Kushagra
        },
    ],
    "team-members": [
        {
            category: "Senior Executive Members",
            members:
                [
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh"
                ],
        },
        {
            category: "Operations Manager",
            members:
                [
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh",
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh",
                ],
        },
        {
            category: "Events Coordinator",
            members:
                [
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh"
                ],
        },
        {
            category: "Developer",
            members:
                [
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh"
                ],
        },
        {
            category: "Senior Executive Members",
            members:
                [
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh"
                ],
        },
        {
            category: "Operations Manager",
            members:
                [
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh",
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh",
                ],
        },
        {
            category: "Events Coordinator",
            members:
                [
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh"
                ],
        },
        {
            category: "Developer",
            members:
                [
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh"
                ],
        },
        {
            category: "Events Coordinator",
            members:
                [
                    "Abhinav Kumar Singh",
                    "Eshu",
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh"
                ],
        },
        {
            category: "Developer",
            members:
                [
                    "Anirudh Venkata Ganesh Mangudy",
                    "Randeep Singh"
                ],
        },
    ]
}

const Index = () => {
    return (
        <div className={styles.team_page_holder}>
            <h1>OUR <span>TEAM</span></h1>
            <div className={styles.team_page_image_main}>
                <Image
                    src={TeamImage}
                />
            </div>

            <div className={styles.team_filter_holder}>
                <div className={styles.team_filter}>
                    <button>All</button>
                    <button>Secretaries</button>
                    <button>Developers</button>
                    <button>Content and Design</button>
                </div>
            </div>

            <div className={styles.team_grid_holder}>
                <div className={styles.team_grid_top}>
                    <h2>
                        {`Secretaries`}
                    </h2>
                    <hr />
                </div>
                <div className={styles.team_grid_secy}>
                    {
                        TeamInfo["secretaries"]?.map((elem, index) => {
                            return <TeamCard elem={elem} key={`team-secy-key-${index}`}/>
                        })
                    }
                </div>

                <div className={styles.team_grid_top + " " + styles.team_grid_top_members}>
                    <h2>
                        {`Team Members`}
                    </h2>
                    <hr />
                </div>
                <div className={styles.team_grid_members}>
                    {
                        TeamInfo["team-members"]?.map((elem, index) => {
                            return (
                                <div key={`team-members-${index}`}>
                                    <div className={styles.team_grid_members_head}>{elem.category}</div>
                                    {elem?.members?.map((member,index2)=>{
                                        return(
                                            <div className={styles.team_grid_members_elem} key={`team-members-elem-${elem.category}-${index2}`}>
                                                {member}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Index;