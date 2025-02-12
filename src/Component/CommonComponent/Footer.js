import React from "react";
import styles from "@/styles/Footer/Footer.module.css";
import Image from "next/image";
import logo from "../../../public/bodyLogo.jpg";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.FootContatiner}>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          sizes="150px"
          className="rounded-full"
        />
        <h2>BodyMechanix</h2>
      </div>
      <div className={styles.option}>
        <label>Quick links</label>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
          <li>
            <Link href="/More">More</Link>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <label>Contact Us</label>
        <p>Email: bodymechanix11@gmail.com</p>
        <p>Phone: (+91) 9871219906</p>
        <p>Address: Body Mechanix Gym,A-144,sec.8 Dwarka</p>
        <div className={styles.infoItem}>
          <label> Gym Hours</label>
          <p>Morning : 5:30 am - 12:00 pm</p>
          <p>Evening : 5:00 pm - 10:00 pm</p>
        </div>
      </div>
      <div className={styles.social}>
        <label>Follow Us</label>
        <div className={styles.socialIcons}>
          <span>
            <Link
              href={
                "https://www.instagram.com/bodymechnixgym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              target="_blank"
            >
              Instagram
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
