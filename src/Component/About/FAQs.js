import React from "react";
import styles from "@/styles/FAQs/FAQs.module.css";
import { FAQ_draw } from "@/svg/Dumble";

const FAQs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.faq_section}>
        <h2 className={styles.faq_title}>Frequently Asked Questions</h2>
        <div className={styles.faq_list}>
          <div className={styles.faq_item}>
            <h3 className={styles.faq_question}>
              What are your opening hours?
            </h3>
            <p className={styles.faq_answer}>
              We are open from 6am to 10pm every day.
            </p>
          </div>
          <div className={styles.faq_item}>
            <h3 className={styles.faq_question}>
              Do you offer personal training?
            </h3>
            <p className={styles.faq_answer}>
              Yes, we have certified personal trainers available.
            </p>
          </div>
          <div className={styles.faq_item}>
            <h3 className={styles.faq_question}>
              Can I bring a friend to the gym?
            </h3>
            <p className={styles.faq_answer}>
              Yes, we offer guest passes for a small fee.
            </p>
          </div>
          <div className={styles.faq_item}>
            <h3 className={styles.faq_question}>
              Can I bring a friend to the gym?
            </h3>
            <p className={styles.faq_answer}>
              Yes, we offer guest passes for a small fee.
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
