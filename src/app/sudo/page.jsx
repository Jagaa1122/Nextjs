"use client";
import { useState } from "react";
import styles from "@/app/sudo/sudo.module.css";
import Square from "@/components/Square";
export default function Sudo() {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const inc = () => {
    const sorted = number.sort((a, b) => {
      return a - b;
    });
    setNumber([...sorted]);
  };
  const dec = () => {
    const sortedd = number.sort((a, b) => {
      return b - a;
    });
    setNumber([...sortedd]);
  };

  return (
    <div style={{ fontSize: "100px" }}>
      <button onClick={inc} style={{ fontSize: "50px" }}>
        inc
      </button>
      <button onClick={dec} style={{ fontSize: "50px" }}>
        dec
      </button>
      <div className={styles.sudo}>
        {number.map((too) => {
          return <Square value={too} />;
        })}
      </div>
    </div>
  );
}
