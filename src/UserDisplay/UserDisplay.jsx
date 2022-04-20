import React, { useEffect, useState } from "react";
import styles from "./UserDisplay.module.css";
import { getDogImg } from "./queries/getDogImg";
import { useQueryPersonData } from "./useQueryPersonData";

export const UserDisplay = ({ userName, onBackBtn }) => {
  const [dogImg, setDogImg] = useState("");
  const { age, gender, nationalities, loading } = useQueryPersonData(userName);

  useEffect(() => {
    getDogImg()
      .then((res) => res.message)
      .then((img) => setDogImg(img));
  }, []);
  console.log(loading, "loading", age);
  return (
    <div>
      <div className={styles.box}>
        <p className={styles.title}> Welcome, {userName}</p>
        <div className={styles.container}>
          <img alt="dog" className={styles.img} src={dogImg} />
          <div className={styles.content}>
            {loading ? (
              <>loaddding!!!</>
            ) : (
              <div>
                <p style={{ margin: "0px" }}>Estimated Age</p>
                <p className={styles.result}> {age}</p>
                <p style={{ margin: "0px" }}>Estimated Gender</p>
                <p className={styles.result}> {gender}</p>
                <p style={{ margin: "0px" }}>Estimated Nationality</p>
                {nationalities.map((c) => (
                  <div key={c}>
                    <p className={styles.result}>{c}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className={styles.button} type="button" onClick={onBackBtn}>
          Back to Home
        </button>
      </div>
    </div>
  );
};
