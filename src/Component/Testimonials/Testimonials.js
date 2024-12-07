import React from "react";
import ReviewCard from "./ReviewCard";
import styles from "@/styles/Testimonisals/Testimonisals.module.css";

const testimonials = [
  {
    name: "Abhishek Chandra",
    content:
      "I must say that joining Body Mechanix was the best decision. It is by far one of the best gyms in the area. Everyone at the gym is well-mannered, educated, and maintains good hygiene.The trainer (as well as the owner) is a great person with a friendly and supportive nature. It's been six months now, and I am having a great time training here.So, if you're looking for a gym, your search ends here—you won’t regret your decision.",
    image: "/images/Avatars/male avatar.jpg",
  },
  {
    name: "Nisha Sharma",
    content:
      "The most amazing instructor that you can ever ask for, he will help you, assist, guide you even if you ask for multiple times.Secondly the gym , wonderful with all the equipment that you required.Its been one year for me since I’m going there and honestly i can’t think of going anywhere else.Would definitely recommend if you are also looking forward to start your fitness journey",
    image: "/images/Avatars/female Avatar.jpg",
  },
  {
    name: "Narayan Patil",
    content:
      "I would say this is the best gym in this area in terms of space and equipment, trainer is also very supportive and attentive for everyone, I would say this is highly recommend gym👍",
    image: "/images/Avatars/male avatar.jpg",
  },
  {
    name: "Keshav Tiwari",
    content:
      "A very good gym located in sector 8, pocket friendly and fully equipped with all the necessary equipments, professional trainer with 20+ year of experience in the field. If you are looking for GYM in sector 8 bagdola this is the best place to go.",
    image: "/images/Avatars/male avatar.jpg",
  },
  {
    name: "Himani baingalia",
    content:
      "This is my first to join the gym and from the first day i really like the environment of it and the best thing is the owner of this gym Vipul bhaiya. He is really good in his work and a great support like me who dont know anything about gym. For ladies this gym is best to join.",
    image: "/images/Avatars/female Avatar.jpg",
  },
  {
    name: "Sanchit Bhargava",
    content:
      "The gym has all the necessary equipments. Moderate and civilised crowd with an overall focused ambience. Owner is respectful, deticated individually and equally passionate about fitness.",
    image: "/images/Avatars/male avatar.jpg",
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
