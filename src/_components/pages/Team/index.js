import React from 'react';
import styles from "./main.module.css";
import Image from 'next/image';
import TeamImage from "@/images/pages/team/TeamPage.jpg";
import TeamCard from './TeamCard';
import { TeamList } from './TeamList';
import { Tabs } from 'antd';
import { ConfigProvider, Space } from 'antd';

const TeamPageFilterTab = [
    {
        label: `All`,
        key: 1,
        children: ``,
    },
    {
        label: `Secretaries`,
        key: 2,
        children: ``,
    },
    {
        label: `Developers`,
        key: 3,
        children: ``,
    },
    {
        label: `Content and Design`,
        key: 4,
        children: ``,
    },
    {
        label: `Events`,
        key: 5,
        children: ``,
    },
    {
        label: `Operations`,
        key: 6,
        children: ``,
    },
]

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
                <div>
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    itemHoverColor: "red",
                                    itemSelectedColor: "red",
                                    inkBarColor: "red",
                                    fontSize: "15px"
                                }
                            }
                        }}
                    >
                        <Space>
                            <Tabs
                                defaultActiveKey="1"
                                centered
                                size='2rem'
                                tabBarGutter={"3rem"}
                                items={TeamPageFilterTab}
                            />
                        </Space>
                    </ConfigProvider>
                </div>
            </div>

            {/* <div className={styles.team_grid_holder}>
                {Object.keys(TeamList).map((elem, index) => {
                    return (
                        <>
                            <div className={styles.team_grid_top}>
                                <hr />
                                <h2>
                                    {elem.charAt(0).toUpperCase() + elem.slice(1)}
                                </h2>
                                <hr />
                            </div>
                            <div className={styles.team_grid_list}>
                                {
                                    TeamList[elem]?.map((data, index2) => {
                                        return <TeamCard elem={data} key={`team-secy-key-${index2}`} />
                                    })
                                }
                            </div>
                        </>
                    )
                })}                
            </div> */}
        </div>
    );
}

export default Index;