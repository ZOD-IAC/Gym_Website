import React, { useRef, useState } from "react";
import styles from "@/styles/ImageGallery/ImageGallery.module.css";
import Image from "next/image";

const initialImages = [
  "/images/ImageGallery/IMG-20241202-WA0001.jpg",
  "/images/ImageGallery/IMG-20241202-WA0002.jpg",
  "/images/ImageGallery/IMG-20241202-WA0003.jpg",
  "/images/ImageGallery/IMG-20241202-WA0004.jpg",
  "/images/ImageGallery/IMG-20241202-WA0005.jpg",
  "/images/ImageGallery/IMG-20241202-WA0006.jpg",
  "/images/ImageGallery/IMG-20241202-WA0007.jpg",
  "/images/ImageGallery/IMG-20241202-WA0008.jpg",
  "/images/ImageGallery/IMG-20241202-WA0009.jpg",
  "/images/ImageGallery/IMG-20241202-WA0010.jpg",
  "/images/ImageGallery/IMG-20241202-WA0011.jpg",
  "/images/ImageGallery/IMG-20241202-WA0012.jpg",
  "/images/ImageGallery/IMG-20241202-WA0013.jpg",
];

function Carousel() {
  const ref = useRef();
  const itemWidth = 300;
  const padding = 10;

  const prev = () => {
    ref.current.scrollLeft -= itemWidth + padding;
  };

  const next = () => {
    ref.current.scrollLeft += itemWidth + padding;
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.Carousel}>
        <div className={styles.slider} ref={ref}>
          {initialImages.map((ele, idx) => {
            return (
              <Image
                src={ele}
                width={300}
                height={300}
                alt={"image" + idx}
                key={idx}
                className={styles.slides}
              />
            );
          })}
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={() => prev()}> {"<"} </button>
          <button
            onClick={() => {
              next();
            }}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className={styles.TextContent}>
        <h2>Explore Our Fitness Space</h2>
        <p>
          Take a closer look at the vibrant and welcoming environment of our
          gym. From state-of-the-art equipment to comfortable amenities, we
          ensure your fitness journey is both productive and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default Carousel;
