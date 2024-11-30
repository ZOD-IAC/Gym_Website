import React from "react";
import styles from "@/styles/Pricing/Pricing.module.css";

const PricingPlans = () => {
  return (
    <div className={styles.pricing_section} id="price">
      <h2 className={styles.pricing_title}>Pricing Plans</h2>
      <div className={styles.pricing_plans}>
        <div className={styles.plan}>
          <h3 className={styles.plan_title}>1 Month</h3>
          <p className={styles.plan_price}>$99</p>
          <ul className={styles.plan_features}>
            <li>Access to all gym equipment</li>
            <li>Unlimited group classes</li>
            <li>Personal training sessions</li>
          </ul>
        </div>
        <div className={styles.plan}>
          <h3 className={styles.plan_title}>3 Months</h3>
          <p className={styles.plan_price}>$249</p>
          <ul className={styles.plan_features}>
            <li>Access to all gym equipment</li>
            <li>Unlimited group classes</li>
            <li>Personal training sessions</li>
            <li>Free guest passes</li>
          </ul>
        </div>
        <div className={styles.plan}>
          <h3 className={styles.plan_title}>6 Months</h3>
          <p className={styles.plan_price}>$499</p>
          <ul className={styles.plan_features}>
            <li>Access to all gym equipment</li>
            <li>Unlimited group classes</li>
            <li>Personal training sessions</li>
            <li>Free guest passes</li>
            <li>Discounts on workshops</li>
          </ul>
        </div>
        <div className={styles.plan}>
          <h3 className={styles.plan_title}>1 Year</h3>
          <p className={styles.plan_price}>$999</p>
          <ul className={styles.plan_features}>
            <li>Access to all gym equipment</li>
            <li>Unlimited group classes</li>
            <li>Personal training sessions</li>
            <li>Free guest passes</li>
            <li>Discounts on workshops</li>
            <li>Priority access to new equipment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
