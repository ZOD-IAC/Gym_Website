import React from "react";
import { useEffect, useState } from "react";
import styles from "@/styles/Navigation/Navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import LOGO from "../../../public/logo.png";

function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <div className={`${styles.nav} `}>
      <div
        className={`${styles.optionlist} ${show ? styles.show : "opacity-0"} `}
      >
        <label onClick={() => setShow((prev) => !prev)}>X</label>
        <ul>
          <li>
            <Link href="/" onClick={() => setShow((prev) => !prev)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" onClick={() => setShow((prev) => !prev)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact" onClick={() => setShow((prev) => !prev)}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/More" onClick={() => setShow((prev) => !prev)}>
              More..
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <Image src={LOGO} width={90} height={90} alt="Logo" />
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <h2>Zodiac</h2>
        </Link>
        <label onClick={() => setShow((prev) => !prev)}>&#x2630;</label>
      </div>
    </div>
  );
}

export default Navigation;
