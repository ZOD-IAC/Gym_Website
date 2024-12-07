import React from "react";
import styles from "@/styles/FAQs/FAQs.module.css";
import { FAQ_draw } from "@/svg/Dumble";

const FAQs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.faq_section}>
        <h2 className={styles.faq_title}>Frequently Asked Questions (FAQs)</h2>
        <div className={styles.faq_list}>
          <div className={styles.faq_item}>
            <h3 className={styles.faq_question}>
              What is the Fitness Calculator?
            </h3>
            <p className={styles.faq_answer}>
              Our fitness calculator includes tools to calculate your BMI, daily
              calorie needs, and body fat percentage.
            </p>
          </div>
          <div className={styles.faq_item}>
            <h3 className={styles.faq_question}>
              How accurate are the calculations?
            </h3>
            <p className={styles.faq_answer}>
              While our calculators provide good estimates, we recommend
              consulting with a fitness professional or doctor for personalized
              advice.
            </p>
          </div>
          <div className={styles.faq_item}>
            <h3 className={styles.faq_question}>
              What are your opening hours?
            </h3>
            <p className={styles.faq_answer}>
              We are open from 5:30 am to 12pm and 5:00 pm to 10:00 pm every
              day.
            </p>
          </div>
          <div className={styles.faq_item}>
            <h3 className={styles.faq_question}>
              Do you offer personal training?
            </h3>
            <p className={styles.faq_answer}>
              Yes, we have certified personal trainer available.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.illustrate}>
        <FAQ_draw width={"25rem"} />
      </div>
    </div>
  );
};

export default FAQs;
