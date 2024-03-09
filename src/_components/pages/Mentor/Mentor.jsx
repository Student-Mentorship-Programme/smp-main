import React from 'react'
import styles from './Mentor.module.css'

const Index = () => {
    const text = "Search by name, enrollment number or branch"
    return (
        <div className={styles.mentor_page_main}>
            <div className={styles.mentor_page_main_content}>
                <div className={styles.mentor_page_main_heading}>
                    <span>Mentors</span>&nbsp;Search
                </div>
                <div className={styles.mentor_page_main_filter}>
                    <input type="text" placeholder={text}/>
                </div>
            </div>
        </div>
    )
}

export default Index