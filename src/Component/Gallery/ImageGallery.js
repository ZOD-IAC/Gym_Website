"use client";

import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import styles from "@/styles/ImageGallery/ImageGallery.module.css";
import Image from "next/image";
import { Dumble } from "@/svg/Dumble";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const image = {
  equipment: [
    "/carousel/img1.jpg",
    "/carousel/img2.jpg",
    "/carousel/img3.jpg",
    "/carousel/img4.jpg",
    "/carousel/img5.jpg",
    "/carousel/img6.jpg",
    "/carousel/img7.jpg",
  ],
  interior: [
    "/carousel/img5.jpg",
    "/carousel/img3.jpg",
    "/carousel/img7.jpg",
    "/carousel/img6.jpg",
    "/carousel/img1.jpg",
    "/carousel/img2.jpg",
    "/carousel/img4.jpg",
  ],

  more: [
    "/carousel/img7.jpg",
    "/carousel/img6.jpg",
    "/carousel/img5.jpg",
    "/carousel/img4.jpg",
    "/carousel/img3.jpg",
    "/carousel/img2.jpg",
    "/carousel/img1.jpg",
  ],
};

gsap.registerPlugin(ScrollTrigger);

function ImageGallery() {
  const [select, SetSelect] = useState("equipment");
  const displayData = image[select];

  useEffect(() => {
    gsap.fromTo(
      `.${styles.dumble}`,
      {
        duration: 2,
        x: 100 * 3,
        scrollTrigger: `.${styles.dumble}`,
      },
      { x: 1, scrollTrigger: `.${styles.dumble}`, delay: 1 }
    );
  });

  return (
    <div className={styles.galleryContainer}>
      <h3 className={styles.heading}>Gallery</h3>
      <div className={styles.container}>
        <Carousel />
      </div>
      <div className={styles.imageSelection}>
        <label>
          Category :
          <select
            id="select"
            defaultValue={select}
            onChange={(e) => SetSelect(e.target.value)}
          >
            <option value="equipment"> Equipments </option>
            <option value="interior"> Interior </option>
            <option value="more">More</option>
          </select>
        </label>
        <div className={styles.imagegallery}>
          <div className={styles.gallery}>
            {displayData.map((ele, idx) => {
              return (
                <Image
                  src={ele}
                  width={200}
                  height={400}
                  alt={ele}
                  key={idx}
                  className={styles.galleryImg}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.dumble}>
        <Dumble width={"40vw"} id="dumble" />
      </div>
    </div>
  );
}

export default ImageGallery;
