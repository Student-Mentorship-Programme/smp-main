"use client"
import smpLogo from "@/images/SMP-Logo.png"
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const Navbar = ({transparency}) => {
    const router = useRouter()
    const [activeNavElement, setActiveNavElement] = useState(null)

    const handleNavElementClick = (index) => {
        setActiveNavElement(index)
    }

    const handleNavButtonClick = () => {
        setActiveNavElement(4)
        router.push('/about-us')
    }

    return (
        <div className={styles.navbar_main}>
            <div className={styles.navbar_main_left}>
                <div className={styles.img_holder_navbar}>
                    <Image
                        src={smpLogo}
                    />
                </div>
                <div className={styles.smp_heading_navbar}>
                    <Link href={"/"} onClick={() => setActiveNavElement(null)}><span style={{ color: '#ED2B2B' }}>SMP</span><span style={{ color: '#073C52' }}>-IITR</span></Link>
                </div>
            </div>
            <div className={styles.navbar_main_right}>
                <ul>
                    {["freshers-section : Freshers Section", "mentors : Mentors", "blogs : Blogs", "events : Events"].map((section, index) => (
                        <li key={index} onClick={() => handleNavElementClick(index)} className={activeNavElement === index ? styles.active_option : ""}>
                            <Link href={`/${section.split(':')[0].trim()}`}>
                                {section.split(':')[1].trim()}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleNavButtonClick}
                    className={transparency == true ? styles.navbar_about_us_button_transparent : styles.navbar_about_us_button}
                >
                    About us
                </button>
            </div>
        </div>
    );
}

export default Navbar;
