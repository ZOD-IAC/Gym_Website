import React from "react";
import styles from "@/styles/Testimonisals/Testimonisals.module.css";
import Image from "next/image";
import sample from "../../../public/bbgIAmge.jpg";

function ReviewCard({ name, content, image }) {
  return (
    <div className={styles.card}>
      <Image
        src={sample}
        alt={name}
        width="150"
        height={"150"}
        className={styles.avt}
      />
      <p className={styles.quote}>{content}</p>
      <p className={styles.name}>- {name}</p>
    </div>
  );
}

export default ReviewCard;
