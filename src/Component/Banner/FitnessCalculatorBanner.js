import React from "react";
import styles from "@/styles/FitnessCalculatorBanner/FitnessCalculatorBanner.module.css";
import Link from "next/link";

const FitnessCalculatorBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h2 className={styles.title}>Explore More Fitness Calculators</h2>
        <p className={styles.description}>
          Take your fitness journey to the next level! Try our BMI, Calorie, and
          Body Fat calculators, and uncover the tools to achieve your goals.
        </p>
        <Link href="/More#fitnessCalculator" className={styles.ctaButton}>
          Explore Calculators
        </Link>
      </div>
    </div>
  );
};

export default FitnessCalculatorBanner;
