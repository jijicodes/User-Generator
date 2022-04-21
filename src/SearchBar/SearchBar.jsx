import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit: submitCallback }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          submitCallback(text);
        }}
      >
        <div className={styles.search}>
          <input className={styles.magnifyingGlass} type="submit" value="🔎" />
          <input
            className={styles.inputField}
            type="text"
            placeholder="Enter your name"
            value={text}
            onClick={(e) => (e.target.placeholder = "")}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
