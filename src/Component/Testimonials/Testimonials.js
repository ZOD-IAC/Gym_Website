import React from "react";
import ReviewCard from "./ReviewCard";
import styles from "@/styles/Testimonisals/Testimonisals.module.css";

const testimonials = [
  {
    name: "John Doe",
    content:
      "This gym has transformed my life! The facilities are top-notch.This gym has transformed my life! The facilities are top-notch.This gym has transformed my life! ",
    image: "/images/john.jpg",
  },
  {
    name: "Jane Smith",
    content: "The trainers here are incredibly supportive and knowledgeable.",
    image: "/images/jane.jpg",
  },
  {
    name: "Mike Johnson",
    content: "I’ve never felt more motivated to work out!",
    image: "/images/mike.jpg",
  },
  {
    name: "John Doe",
    content:
      "This gym has transformed my life! The facilities are top-notch.This gym has transformed my life! The facilities are top-notch.This gym has transformed my life! ",
    image: "/images/john.jpg",
  },
  {
    name: "Jane Smith",
    content: "The trainers here are incredibly supportive and knowledgeable.",
    image: "/images/jane.jpg",
  },
  {
    name: "Mike Johnson",
    content: "I’ve never felt more motivated to work out!",
    image: "/images/mike.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className={styles.testimonial_container}>
      <h2 className={styles.heading}>
        Hear from <span>Our Fitness </span> Family
      </h2>
      <div className={styles.test_card_container}>
        {testimonials.map((ele, idx) => {
          return (
            <ReviewCard
              name={ele.name}
              content={ele.content}
              image={ele.image}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
