import React, { useEffect, useState } from "react";
import styles from "./UserDisplay.module.css";
import { getDogImg } from "./queries/getDogImg";
import { useQueryPersonData } from "./useQueryPersonData";

export const UserDisplay = ({ userName }) => {
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
      <div
        className={styles.box}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className={styles.title}>{userName}</p>

        <p
          style={{
            color: "wheat",
            fontSize: "30px",
            marginTop: "6px",
          }}
        >
          Welcome, {userName}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <img
            className={styles.img}
            style={{ width: "20vw", height: "30vh", opacity: "" }}
            src={dogImg}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              color: "wheat",
            }}
          >
            {loading ? (
              <>loaddding!!!</>
            ) : (
              <>
                <div>
                  <p style={{ fontWeight: "bold" }}>Estimated Age</p>
                  {age}
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Estimated Gender</p>
                  {gender}
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Estimated Nationality</p>
                  {nationalities.map((c) => (
                    <div key={c}>
                      <p>{c}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <button className={styles.button} type="button">
        Back to Home
      </button>
    </div>
  );
};
