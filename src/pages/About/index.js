import React from "react";
import styles from "@/styles/AboutPage/AboutPage.module.css";
import IndexAbout from "@/Component/About/IndexAbout";
import Pricing from "@/Component/About/Pricing";
import FAQs from "@/Component/About/FAQs";
import ImageGallery from "@/Component/Gallery/ImageGallery";
import FitnessCalculatorBanner from "@/Component/Banner/FitnessCalculatorBanner";
import { Dumble } from "@/svg/Dumble";

function index() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>About Our Fitness Journey</h1>
          <p className={styles.subtitle}>
            Learn about our mission to help people transform their lives through
            fitness, expert guidance, and a supportive community dedicated to
            your success
          </p>
          <button className={styles.ctaButton}>Start Reading</button>
        </div>
      </div>
      <div>
        <IndexAbout />
      </div>
      <div>
        <Pricing />
      </div>
      <div className={styles.ContentWrapper}>
        <div className={styles.TextContent}>
          <div className={styles.content}>
            <h3>1. Our Philosophy</h3>
            <p>
              At our gym, we believe fitness is more than just a physical
              journey—it’s a lifestyle that empowers you to become the best
              version of yourself. Our philosophy is rooted in fostering a
              welcoming and supportive environment where everyone, from
              beginners to advanced athletes, can thrive. We don’t just focus on
              building strength; we focus on building confidence, resilience,
              and community.
            </p>
          </div>
          <div className={styles.content}>
            <h3>2. What Sets Us Apart</h3>
            <p>
              What makes us unique? It’s our dedication to providing a
              personalized experience for every member. With state-of-the-art
              equipment, expert trainers, and a variety of classes to suit all
              fitness levels, we’re here to guide you every step of the way.
              Whether it’s achieving a personal best, staying active, or simply
              finding a place to unwind, our gym is designed to meet your needs.
            </p>
          </div>
          <div className={styles.content}>
            <h3>3. The Heart of Our Community</h3>
            <p>
              We’re more than just a gym—we’re a community. From group fitness
              classes that motivate you to push your limits, to social events
              that help you connect with like-minded individuals, we aim to
              create an atmosphere of camaraderie and support. Every member is
              an integral part of our fitness family.
            </p>
          </div>
          <div className={styles.content}>
            <h3>4. Our Commitment to Your Goals</h3>
            <p>
              Your goals are our priority. Whether you’re striving to lose
              weight, build muscle, improve flexibility, or enhance your overall
              health, we’re committed to helping you succeed. Our team of
              experienced trainers and staff are here to provide the guidance,
              support, and accountability you need to reach your full potential.
            </p>
          </div>
          <div className={styles.content}>
            <h3>5. A Space Designed for You</h3>
            <p>
              Our gym is thoughtfully designed to cater to your fitness journey.
              From the spacious workout areas and cutting-edge equipment to the
              clean and modern locker rooms, every detail is crafted to ensure
              your experience is comfortable and inspiring. We aim to provide a
              space where you feel motivated to reach your goals.
            </p>
          </div>
          <div className={styles.content}>
            <h3>6. Fitness for Everyone</h3>
            <p>
              No matter your age, fitness level, or experience, our gym is a
              place where everyone belongs. We believe fitness should be
              accessible to all, and we’re dedicated to offering inclusive
              programs that cater to a diverse range of needs. Whether you’re
              just starting out or looking to challenge yourself further, you’ll
              find a program that suits you.
            </p>
          </div>
          <div className={styles.content}>
            <h3>7. Innovation in Fitness</h3>
            <p>
              Fitness is constantly evolving, and so are we. From the latest
              workout trends to innovative training methods, we’re always
              looking for ways to enhance your fitness journey. Our team
              regularly updates classes, programs, and equipment to ensure you
              have access to the best tools to succeed.
            </p>
          </div>
        </div>
      </div>
      <div>
        <FitnessCalculatorBanner />
      </div>
      <div>
        <FAQs />
        <ImageGallery />
      </div>
    </div>
  );
}

export default index;
