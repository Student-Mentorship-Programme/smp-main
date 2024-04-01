"use client";
import smpLogo from "@/images/SMP-Logo.png";
import hamburger from "@/images/pages/home/hamburger.svg";
import close from "@/images/pages/home/close_icon.svg";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  // console.log(typeof window !== 'undefined');
  const router = useRouter();
  const [activeNavElement, setActiveNavElement] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleNavElementClick = (index) => {
    setActiveNavElement(index);
  };

  const handleNavButtonClick = () => {
    setActiveNavElement(4);
    router.push("/about-us");
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={styles.navbar_main}>
      <div className={styles.navbar_main_container}>
        <div className={styles.navbar_main_left}>
          <div className={styles.img_holder_navbar}>
            <Link href={"/"} onClick={() => setActiveNavElement(null)}>
              <Image src={smpLogo} />
            </Link>
          </div>
          <div className={styles.smp_heading_navbar}>
            <Link href={"/"} onClick={() => setActiveNavElement(null)}>
              <span style={{ color: "#ed2b2b" }}>SMP</span>
              <span style={{ color: "#073C52" }}>-IITR</span>
            </Link>
          </div>
        </div>
        <div className={styles.navbar_main_right}>
          <ul>
            {[
              "freshers-section : Freshers Section",
              "mentors : Mentors",
              "blogs : Blogs",
              "events : Events",
            ].map((section, index) => (
              <li
                key={index}
                onClick={() => handleNavElementClick(index)}
                className={
                  activeNavElement === index ? styles.active_option : ""
                }
              >
                <Link href={`/${section.split(":")[0].trim()}`}>
                  {section.split(":")[1].trim()}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className={styles.navbar_main_right_about_us_button}
            onClick={handleNavButtonClick}
            // className={activeNavElement === 4 ? styles.active_button : ""}
          >
            About us
          </button>
          <button
            className={styles.navbar_main_right_menu_button}
            onClick={toggleSidebar}
          >
            <Image src={hamburger}></Image>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------Side Bar------------------------------------------------------------ */}
      <div
        className={
          isSidebarVisible ? styles.sidebar_visible : styles.sidebar_invisible
        }
      >
        
        <button onClick={toggleSidebar} className={styles.close_button}>
          <Image src={close}></Image>
        </button>

        <ul className={styles.unordered_list_mobile}>
          {[
            "freshers-section : Freshers Section",
            "mentors : Mentors",
            "blogs : Blogs",
            "events : Events",
            "about-us : About Us",
          ].map((section, index) => (
            <li
              key={index}
              onClick={() => handleNavElementClick(index)}
              className={styles.list_options_mobile}
            >
              <Link href={`/${section.split(":")[0].trim()}`}>
                <span>{section.split(":")[1].trim()}</span>
                
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
