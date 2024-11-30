import React from "react";
import styles from "@/styles/Footer/Footer.module.css";
import Image from "next/image";
import favicon from "../../../public/favicon.ico";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.FootContatiner}>
      <div className={styles.logo}>
        <Image src={favicon} alt="logo" width={30} height={30} />
        <h2>Zodiac</h2>
      </div>
      <div className={styles.option}>
        <label>Quick links</label>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/About">
            <li>About</li>
          </Link>
          <Link href="/Contact">
            <li>Contact</li>
          </Link>
          <Link href="/More">
            <li>More</li>
          </Link>
        </ul>
      </div>
      <div className={styles.contact}>
        <label>Contact Us</label>
        <p>Email: bodymechanix11@gmail.com</p>
        <p>Phone: (+91) 9871219906</p>
        <p>Address: Body Mechanix Gym,A-144,sec.8 Dwarka</p>
      </div>
      <div className={styles.social}>
        <label>Follow Us</label>
        <div className={styles.socialIcons}>
          <span>Instagram</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
