// import React from "react";
import styles from "../../styles/Loader/Loader.module.css";

function Loader() {
  return (
    <div className={styles.container}>
      <div class={styles.wrapper}>
        <div class={styles.circle}></div>
        <div class={styles.circle}></div>
        <div class={styles.circle}></div>
        <div class={styles.shadow}></div>
        <div class={styles.shadow}></div>
        <div class={styles.shadow}></div>
      </div>
    </div>
  );
}

export default Loader;
