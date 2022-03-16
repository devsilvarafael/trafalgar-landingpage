import styles from "../../styles/Commons/button.module.scss";
import React, { ReactNode } from "react";

interface ButtonProps {
  colorBg: string;
  colorTx: string;
  children?: ReactNode;
}

export const Button = ({
  children,
  colorBg,
  colorTx,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={styles.btn}
      style={{ background: colorBg, color: colorTx }}
    >
      {children}
    </button>
  );
};
