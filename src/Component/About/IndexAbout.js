import React from "react";
import styles from "@/styles/IndexAbout/IndexAbout.module.css";
import Image from "next/image";
import about1 from "../../../public/images/about1.jpg";

function IndexAbout() {
  return (
    <div className={styles.mainContainer} id="about">
      {/* <div className={styles.dumble}>
        <svg fill="#fff" width="20rem" viewBox="0 0 45.174 45.174">
          <g>
            <path
              d="M41.573,15.879v-1.675c0-1.922-1.558-3.495-3.479-3.495h-2.761c-1.921,0-3.479,1.573-3.479,3.495v4.693H13.319v-4.693
		c0-1.922-1.558-3.495-3.479-3.495H7.079c-1.921,0-3.479,1.573-3.479,3.495v1.675c-1.979,0-3.6,1.617-3.6,3.613v6.172
		c0,1.996,1.71,3.613,3.6,3.613v1.674c0,1.922,1.558,3.513,3.479,3.513H9.84c1.921,0,3.479-1.591,3.479-3.513v-4.676h18.536v4.676
		c0,1.922,1.558,3.513,3.479,3.513h2.762c1.92,0,3.479-1.591,3.479-3.513v-1.674c1.979,0,3.6-1.619,3.6-3.613v-6.172
		C45.172,17.496,43.462,15.879,41.573,15.879z"
            />
          </g>
        </svg>
      </div> */}
      <div>
        <h3 className={styles.heading}>About</h3>
      </div>
      <div className={styles.container}>
        <Image
          src={about1}
          width={329.75}
          height={219.775}
          alt="about1"
          className={styles.images}
        />
        <p>
          At <span className="font-mono text-[#fca311]">BodyMechanix</span>, we
          believe fitness is more than just a workout—it&apos;s a lifestyle. Our
          mission is to create an inclusive and motivating environment where
          everyone, regardless of experience or fitness level, can achieve their
          goals. With state-of-the-art equipment, expert trainers, and a
          supportive community, we&apos;re dedicated to helping you become the
          best version of yourself. Whether you&apos;re here to build strength,
          improve your health, or find balance, we&apos;re with you every step
          of the way.
        </p>
      </div>
    </div>
  );
}

export default IndexAbout;
