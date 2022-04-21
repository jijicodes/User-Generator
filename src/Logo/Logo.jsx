import React from "react";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.atag}>
      <img src={process.env.PUBLIC_URL + "/whitegh.png"} alt="github Logo" />
      <a
        className={styles.jiji}
        href="https://github.com/jijicodes"
        target="_blank"
        rel="noreferrer"
      >
        Handcrafted in Denver, CO by Jijicodes
      </a>
    </div>
  );
};
