import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footer} d-flex justify-content-around mt-5`}>
      <div className={styles.color}>
        Created by : Nathalie, Perrine, Jonathan, Florian, Nizar, Stephane
      </div>
      <div className={styles.color}> Hackathon WildCodeSchool 18/04/19 </div>
    </div>
  );
};

export default Footer;
