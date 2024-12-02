import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/MorePage/MorePage.module.css";
import Image from "next/image";
import sampleImage from "../../../public/images/Banners/bbgIAmge.jpg";
import FitnessCalculator from "@/Component/OtherComponents/FitnessCalculator";
import Link from "next/link";
import blogs from "../Data/blog.json";

const content = [
  {
    heading: "Consistency is Key",
    description:
      "Success doesn’t happen overnight. Whether you’re working out, eating healthy, or learning a new skill, staying consistent will always bring the best results. Small daily efforts compound over time.",
  },
  {
    heading: "Listen to Your Body",
    description:
      "Your body gives signals when something isn’t right. Rest when you need to, avoid overtraining, and pay attention to aches or discomforts. Rest is as essential as activity in any regimen.",
  },
  {
    heading: "Set Realistic Goals",
    description:
      "Dream big, but start small. Setting achievable milestones helps you stay motivated and focused. Unrealistic expectations can lead to burnout or discouragement.",
  },
  {
    heading: "Stay Hydrated",
    description:
      "Water is vital for your energy levels, focus, and overall health. Carry a water bottle and drink consistently throughout the day, especially during workouts.",
  },
  {
    heading: "Quality Over Quantity",
    description:
      "It’s not about doing the most reps or spending hours at the gym. Proper form, effective exercises, and mindful effort will yield better results than just going through the motions.",
  },
  {
    heading: "Embrace Rest and Recovery",
    description:
      "Progress happens during recovery, not just during activity. Prioritize good sleep, active recovery days, and relaxation techniques like stretching or yoga.",
  },
  {
    heading: "Nutrition Matters",
    description:
      "Exercise alone won’t lead to optimal health. Eat a balanced diet rich in whole foods, lean proteins, healthy fats, and complex carbohydrates to fuel your body.",
  },
  {
    heading: "Avoid Comparison",
    description:
      "Your journey is unique. Comparing yourself to others can lead to frustration. Focus on your progress, not someone else’s highlights.",
  },
  {
    heading: "Keep Learning",
    description:
      "There’s always more to discover about health, fitness, and self-care. Stay curious, try new things, and adjust your approach as you learn what works best for you.",
  },
  {
    heading: "Celebrate Small Wins",
    description:
      "Every step forward counts. Whether it’s completing a tough workout, drinking enough water, or simply showing up, celebrate your progress—it fuels motivation!",
  },
];

function More() {
  const ref = useRef();
  const [data, setData] = useState();
  const [hide, SetHide] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (hide) {
        return setData(blogs.slice(0, 4));
      }
      setData(blogs);
    };
    fetchData();
  }, [hide]);

  const handleClick = () => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>Fitness & Lifestyle Blog</h1>
          <p className={styles.subtitle}>
            Discover expert tips, workout routines, nutrition advice and success
            stories to help you achieve your fitness goals
          </p>
          <button className={styles.ctaButton} onClick={handleClick}>
            Start Reading
          </button>
        </div>
      </div>
      <div className={styles.ExaConWrapper} ref={ref}>
        <h2 className={styles.blogTitle}>Some Common Things to Remember</h2>
        <div className={styles.ExtraContent}>
          {content.map((ele, idx) => {
            return (
              <div className={styles.BasicContentWrapper} key={idx}>
                <h3>
                  {idx + 1}.{ele.heading}
                </h3>
                <p>{ele.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.blogSection} id="fitnessCalculator">
        <h2 className={styles.blogTitle}>Fitness Calculator</h2>
        <FitnessCalculator />
      </div>
      <div className={styles.blogSection} id="blogs">
        <h2 className={styles.blogTitle}>Latest Blog Posts</h2>
        <div className={styles.blogPosts}>
          {data
            ? data.map((ele, idx) => {
                return (
                  <div className={styles.blogPost} key={idx}>
                    <Image
                      src={ele.image ? ele.image : sampleImage}
                      alt="Blog Post 1"
                      width={378}
                      height={200}
                      className={styles.blogImage}
                    />
                    <div className={styles.blogContent}>
                      <h3 className={styles.blogHeading}>{ele.title}</h3>
                      <p className={styles.blogSummary}>{ele.description}</p>
                      <Link
                        href={`/More/${ele.title}`}
                        className={styles.readMore}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <button
          onClick={() => SetHide((prev) => !prev)}
          className="mt-10 ml-2 text-xl text-yellow-500"
        >
          {hide ? "Show all.." : "Hide all.."}
        </button>
      </div>
    </div>
  );
}

export default More;
