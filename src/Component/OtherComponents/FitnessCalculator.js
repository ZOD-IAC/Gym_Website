import React, { useState } from "react";
import styles from "@/styles/MorePage/MorePage.module.css";
import { BMI, Calories, BodyFat } from "@/svg/Dumble";

const FitnessCalculator = () => {
  const [activeTab, setActiveTab] = useState("BMI");
  const [inputValues, setInputValues] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activity: "",
    waist: "",
    neck: "",
    hip: "",
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const calculateBMI = () => {
    const { weight, height } = inputValues;
    if (weight && height) {
      const bmi = (weight / (height / 100) ** 2).toFixed(2);
      setResult(`Your BMI is ${bmi}`);
    } else {
      setResult("Please enter weight and height!");
    }
  };

  const calculateCalories = () => {
    const { weight, height, age, gender, activity } = inputValues;
    if (weight && height && age && gender && activity) {
      let bmr;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      const calorieNeeds = bmr * parseFloat(activity);
      setResult(
        `Your daily calorie requirement is ${calorieNeeds.toFixed(2)} kcal`
      );
    } else {
      setResult("Please fill in all fields!");
    }
  };

  const calculateBodyFat = () => {
    const { weight, waist, neck, hip, gender, height } = inputValues;
    if (weight && waist && neck && gender && (gender === "male" || hip)) {
      let bodyFat;
      if (gender === "male") {
        bodyFat =
          495 /
            (1.0324 -
              0.19077 * Math.log10(waist - neck) +
              0.15456 * Math.log10(height)) -
          450;
      } else {
        bodyFat =
          495 /
            (1.29579 -
              0.35004 * Math.log10(waist + hip - neck) +
              0.221 * Math.log10(height)) -
          450;
      }
      setResult(`Your body fat percentage is ${bodyFat.toFixed(2)}%`);
    } else {
      setResult("Please fill in all required fields!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "BMI") calculateBMI();
    else if (activeTab === "Calories") calculateCalories();
    else if (activeTab === "BodyFat") calculateBodyFat();
  };

  return (
    <div className={styles.Calculator_Wrapper}>
      <div className={styles.calculator}>
        <h2 className={styles.title}>Calculator</h2>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "BMI" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("BMI")}
          >
            BMI Calculator
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Calories" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("Calories")}
          >
            Calorie Calculator
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "BodyFat" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("BodyFat")}
          >
            Body Fat Calculator
          </button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          {(activeTab === "BMI" || activeTab === "Calories") && (
            <>
              <div className={styles.formGroup}>
                <label>
                  Weight (kg):
                  <input
                    type="number"
                    name="weight"
                    value={inputValues.weight}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  Height (cm):
                  <input
                    type="number"
                    name="height"
                    value={inputValues.height}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            </>
          )}
          {activeTab === "Calories" && (
            <>
              <div className={styles.formGroup}>
                <label>
                  Age:
                  <input
                    type="number"
                    name="age"
                    value={inputValues.age}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  Gender:
                  <select
                    name="gender"
                    value={inputValues.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  Activity Level:
                  <select
                    name="activity"
                    value={inputValues.activity}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="1.2">Sedentary</option>
                    <option value="1.375">Lightly Active</option>
                    <option value="1.55">Moderately Active</option>
                    <option value="1.725">Very Active</option>
                  </select>
                </label>
              </div>
            </>
          )}
          {activeTab === "BodyFat" && (
            <>
              <div className={styles.formGroup}>
                <label>
                  Waist (cm):
                  <input
                    type="number"
                    name="waist"
                    value={inputValues.waist}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  height (cm):
                  <input
                    type="number"
                    name="height"
                    value={inputValues.height}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  Neck (cm):
                  <input
                    type="number"
                    name="neck"
                    value={inputValues.neck}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              {inputValues.gender === "female" && (
                <div className={styles.formGroup}>
                  <label>
                    Hip (cm):
                    <input
                      type="number"
                      name="hip"
                      value={inputValues.hip}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              )}
            </>
          )}
          <button type="submit" className={styles.calculateBtn}>
            Calculate
          </button>
        </form>
        <div className={styles.result}>{result && <p>{result}</p>}</div>
      </div>
      <div>
        {activeTab === "BMI" ? <BMI width={"40vw"} /> : ""}
        {activeTab === "Calories" ? <Calories width={"40vw"} /> : ""}
        {activeTab === "BodyFat" ? <BodyFat width={"40vw"} /> : ""}
      </div>
    </div>
  );
};

export default FitnessCalculator;
