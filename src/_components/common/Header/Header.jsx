"use client"
import Navbar from "@/_components/common/Navbar/Navbar"
import styles from "./Header.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
    const router = useRouter();
    const pathName = usePathname();
    const [isTransparent, setIsTransparent] = useState(true);
    // const [prevScrollPosition, setPrevScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsTransparent(scrollPosition <= window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isTransparent]);
    
    const isAboutUsPage = (pathName === '/about-us' || pathName === '/about-us/')

    return (
        <div 
            className={styles.header}
            style={{ 
                backgroundColor: isTransparent ? (isAboutUsPage ? 'transparent' : 'white') : ('white'),
                color: isAboutUsPage ? (isTransparent ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)') : ('rgba(0, 0, 0, 0.5)')
            }}
        >
            <Navbar />
        </div>
    );
}

export default Header;