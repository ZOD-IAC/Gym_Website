import React, { useState } from "react";
import styles from "@/styles/SecondaryNav/SecondaryNav.module.css";
import Image from "next/image";
import sampleImage from "../../../public/bbgIAmge2.jpg";

const exercise = {
  shoulder: [
    {
      image: "/images/SecNav/shoulder/shoulder1.jpg",
      head: "Overhead Dumbbell Press",
      content:
        "The overhead dumbbell press is a compound movement that targets the deltoid muscles (shoulders) and engages the triceps and upper chest as secondary muscles. To perform this exercise, sit or stand with a dumbbell in each hand at shoulder height, palms facing forward. Press the weights upward until your arms are fully extended, then slowly lower them back to the starting position. This exercise builds strength and improves shoulder stability.",
    },
    {
      image: "/images/SecNav/shoulder/shoulder2.jpg",
      head: "Lateral Raises",
      content:
        "Lateral raises isolate the lateral (side) deltoid muscles, giving your shoulders a broader and more defined appearance. With a dumbbell in each hand, stand with your arms by your sides. Lift the dumbbells out to the sides until they reach shoulder height, keeping your arms slightly bent, then slowly lower them back down. This exercise emphasizes shoulder shape and width while improving muscle endurance.",
    },
  ],
  legs: [
    {
      image: "/images/SecNav/legs/legs1.jpg",
      head: "Squats",
      content:
        "Squats are a foundational lower-body exercise that targets the quadriceps, hamstrings, glutes, and calves. To perform a squat, stand with your feet shoulder-width apart, lower your hips back and down as if sitting in a chair, and then drive back up through your heels to the starting position. This movement builds strength, enhances mobility, and promotes overall leg development, making it a staple in any leg workout.",
    },
    {
      image: "/images/SecNav/legs/legs2.jpg",
      head: "Lunges",
      content:
        "Lunges focus on the quadriceps, glutes, and hamstrings while also improving balance and stability. Start by standing upright, then step one foot forward and lower your body until both knees are at a 90-degree angle. Push off the front foot to return to the starting position and alternate legs. Lunges are effective for building strength, improving symmetry between legs, and enhancing functional movement patterns.",
    },
  ],
  chest: [
    {
      image: "/images/SecNav/chest/chest1.jpg",
      head: "Bench Press",
      content:
        "The bench press is a classic compound exercise that targets the pectoral muscles (chest), with assistance from the triceps and shoulders. Lie flat on a bench with a barbell or dumbbells, lower the weight to your chest, and then press it upward until your arms are fully extended. This movement is excellent for building strength and mass in the chest while enhancing upper-body pushing power.",
    },
    {
      image: "/images/SecNav/chest/chest2.jpg",
      head: "Push-Ups",
      content:
        "Push-ups are a versatile bodyweight exercise that primarily works the chest while engaging the shoulders, triceps, and core. Begin in a plank position, lower your body by bending your elbows until your chest nearly touches the ground, and then push back up to the starting position. Push-ups are great for improving endurance, strengthening the chest, and can be modified to suit all fitness levels.",
    },
  ],
  thighs: [
    {
      image: "/images/SecNav/thighs/thighs1.jpg",
      head: "Goblet Squats",
      content:
        "Goblet squats are a variation of squats that focus on the quadriceps, glutes, and inner thighs. Holding a dumbbell or kettlebell close to your chest, stand with your feet slightly wider than shoulder-width apart. Lower your hips back and down into a squat, keeping your chest upright, and then push through your heels to return to standing. This exercise is excellent for building strength in the thighs and improving hip mobility.",
    },
    {
      image: "/images/SecNav/thighs/thighs2.jpg",
      head: "Step-Ups",
      content:
        "Step-ups target the quadriceps, hamstrings, and glutes while improving balance and coordination. Using a sturdy bench or platform, step one foot onto the surface, press through your heel to lift your body upward, and then bring the other foot to join. Step back down and alternate legs. Step-ups are a functional movement that strengthens the thighs and mimics everyday actions like climbing stairs.",
    },
  ],
  biceps: [
    {
      image: "/images/SecNav/biceps/biceps1.jpg",
      head: "Bicep Curls",
      content:
        "Bicep curls are a classic isolation exercise that directly targets the biceps brachii. Using dumbbells, barbells, or resistance bands, hold the weights with your palms facing up and arms fully extended. Curl the weights toward your shoulders while keeping your elbows stationary, then slowly lower them back to the starting position. This exercise builds strength and size in the biceps, enhancing arm definition and functionality.",
    },
    {
      image: "/images/SecNav/biceps/biceps2.jpg",
      head: "Hammer Curls",
      content:
        "Hammer curls are a variation of bicep curls that also engage the brachialis and brachioradialis muscles, contributing to overall arm thickness. Hold a dumbbell in each hand with your palms facing each other (neutral grip) and arms fully extended. Curl the weights toward your shoulders, maintaining the neutral grip throughout, then slowly lower them back. This exercise emphasizes both strength and endurance in the biceps and forearms.",
    },
  ],
};

function SecondaryNav() {
  const [data, setData] = useState("shoulder");
  const passData = exercise[data];

  return (
    <>
      <div className={`${styles.Container}`}>
        <ul>
          <li onClick={() => setData("shoulder")}>Shoulder</li>
          <li onClick={() => setData("chest")}>Chest</li>
          <li onClick={() => setData("thighs")}>thighs</li>
          <li onClick={() => setData("biceps")}>biceps</li>
          <li onClick={() => setData("legs")}>legs</li>
        </ul>
        <div>
          {passData.map((ele, idx) => {
            return (
              <div className={styles.Content} key={idx}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={ele.image ? ele.image : sampleImage}
                    width={355}
                    height={199}
                    alt={ele.head}
                    sizes="@media (max-width: 768px) 387px , 400px"
                    className=" object-cover h-full w-full"
                  />
                </div>
                <div className={styles.textContent}>
                  <h3>{ele.head}</h3>
                  <p>{ele.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SecondaryNav;
