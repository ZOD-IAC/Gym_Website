"use client";

import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import styles from "@/styles/ImageGallery/ImageGallery.module.css";
import Image from "next/image";
import { Dumble } from "@/svg/Dumble";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// const image = {
//   equipment: [
//     "/carousel/img1.jpg",
//     "/carousel/img2.jpg",
//     "/carousel/img3.jpg",
//     "/carousel/img4.jpg",
//     "/carousel/img5.jpg",
//     "/carousel/img6.jpg",
//     "/carousel/img7.jpg",
//   ],
//   interior: [
//     "/carousel/img5.jpg",
//     "/carousel/img3.jpg",
//     "/carousel/img7.jpg",
//     "/carousel/img6.jpg",
//     "/carousel/img1.jpg",
//     "/carousel/img2.jpg",
//     "/carousel/img4.jpg",
//   ],

//   more: [
//     "/carousel/img7.jpg",
//     "/carousel/img6.jpg",
//     "/carousel/img5.jpg",
//     "/carousel/img4.jpg",
//     "/carousel/img3.jpg",
//     "/carousel/img2.jpg",
//     "/carousel/img1.jpg",
//   ],
// };

const image = [
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

gsap.registerPlugin(ScrollTrigger);

function ImageGallery() {
  // const [select, SetSelect] = useState("equipment");
  // const displayData = image[select];
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (image) => {
    setSelectedImage(image);
    gsap.fromTo(
      ".modal-image",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    );
    gsap.to(".modal-backdrop", { opacity: 1, duration: 0.5 });
  };

  const closeModal = () => {
    gsap.to(".modal-image", {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => setSelectedImage(null),
    });
    gsap.to(".modal-backdrop", { opacity: 0, duration: 0.3 });
  };

  return (
    <div className={styles.galleryContainer}>
      <h3 className={styles.heading}>Gallery</h3>
      <div className={styles.container}>
        <Carousel />
      </div>
      <div className={styles.imageSelection}>
        <label>
          ALL IMAGES :
          {/* <select
            id="select"
            defaultValue={select}
            onChange={(e) => SetSelect(e.target.value)}
          >
            <option value="equipment"> Equipments </option>
            <option value="interior"> Interior </option>
            <option value="more">More</option>
          </select> */}
        </label>
        <div className={styles.imagegallery}>
          <div className={styles.gallery}>
            {image.map((ele, idx) => {
              return (
                <Image
                  src={ele}
                  width={200}
                  height={400}
                  alt={ele}
                  key={idx}
                  className={styles.galleryImg}
                  onClick={() => openModal(ele)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {selectedImage && (
          <>
            <div className={styles.modal_backdrop} onClick={closeModal} />
            <div className={styles.modal}>
              <Image
                width={100}
                height={100}
                src={selectedImage}
                alt="Selected"
                sizes="@media (max-width : 768) 300px , auto"
                className={styles.modal_image}
              />
              <button className={styles.close_button} onClick={closeModal}>
                &times;
              </button>
            </div>
          </>
        )}
      </div>

      <div className={styles.dumble}>
        <Dumble width={"40vw"} id="dumble" />
      </div>
    </div>
  );
}

export default ImageGallery;
