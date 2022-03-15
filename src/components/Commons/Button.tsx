import styles from "../../styles/Commons/button.module.scss";
import React from "react";

interface ButtonProps {
  text: string;
  colorBg: string;
  colorTx: string;
}

export const Button = ({ text, colorBg, colorTx }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.btn} style={{ background: colorBg, color: colorTx }}>
      {text}
    </button>
  );
};
