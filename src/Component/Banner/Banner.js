import React from "react";
import styles from "@/styles/Banner/Banner.module.css";
import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

function Banner({ ref }) {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      `.${styles.title}`,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    )
      .fromTo(
        `.${styles.subtitle}`,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        `.${styles.ctaButton}`,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleClick = () => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>Unleash Your Strength</h1>
        <p className={styles.subtitle}>
          Join the community that&apos;s transforming bodies and minds.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <button className={styles.ctaButton} onClick={handleClick}>
            Start Reading
          </button>
          <Link
            href={"/About#price"}
            className={styles.ctaButton}
            onClick={handleClick}
          >
            Pricing Plans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
