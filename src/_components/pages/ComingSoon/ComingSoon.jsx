import React from "react";
import styles from "./ComingSoon.module.css";
import mainImage from "@/images/pages/coming-soon/coming_soon.svg";
import Image from "next/image";

function Index() {
  return (
    <div className={styles.heroSection}>
      <Image src={mainImage} alt="Coming Soon" ></Image>
      <h1>Coming soon!</h1>
    </div>
  );
}

export default Index;
