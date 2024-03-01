"use client"
import Navbar from "@/_components/common/Navbar/Navbar"
import styles from "./Header.module.css";
import aboutStyles from "@pages/AboutUs/AboutUs.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
    const router = useRouter();
    const pathName = usePathname();
    const [isTransparent, setIsTransparent] = useState(true);
    const [isAboutUsPage, setIsAboutUsPage] = useState(true);

    useEffect(() => {
        const handleScroll = (event) => {
            const aboutDiv = document.getElementsByClassName(aboutStyles.background_overlay)[0];
            if (aboutDiv) {
                setIsTransparent(event.target.className === aboutDiv.className);
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [isTransparent]);

    useEffect(() => {
        setIsAboutUsPage(pathName === '/about-us' || pathName === '/about-us/');
    }, [pathName]);

    return (
        <div
            className={styles.header}
            style={{
                backgroundColor: isTransparent ? (isAboutUsPage ? 'transparent' : 'white') : ('white'),
                color: isAboutUsPage ? (isTransparent ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)') : ('rgba(0, 0, 0, 0.5)')
            }}
        >
            {isAboutUsPage == true ? <Navbar transparency={isTransparent} /> : <Navbar transparency={false} />}
        </div>
    );
}

export default Header;