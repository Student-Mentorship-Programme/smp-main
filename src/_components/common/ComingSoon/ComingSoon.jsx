import React from "react";
import styles from "./ComingSoon.module.css";
import mainImage from "@/images/pages/coming-soon/coming_soon.png";
import Image from "next/image";

function ComingSoon() {
  return (
    <div className={styles.heroSection}>
      <Image src={mainImage} alt="Coming Soon" ></Image>
    </div>
  );
}

export default ComingSoon;
