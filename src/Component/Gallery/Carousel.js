import React, { useRef, useState } from "react";
import styles from "@/styles/ImageGallery/ImageGallery.module.css";
import Image from "next/image";
import { Dumble } from "@/svg/Dumble";

const initialImages = [
  "/carousel/img1.jpg",
  "/carousel/img2.jpg",
  "/carousel/img3.jpg",
  "/carousel/img4.jpg",
  "/carousel/img5.jpg",
  "/carousel/img6.jpg",
  "/carousel/img7.jpg",
];
function Carousel() {
  // const [image, setImages] = useState(initialImages);
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
        <h2>Heading</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable
        </p>
      </div>
    </div>
  );
}

export default Carousel;
