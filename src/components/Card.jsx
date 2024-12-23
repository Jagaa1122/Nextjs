import React from "react";
import styles from "./card.module.css";

export const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.imgUrl} alt="" />
    </div>
  );
};
