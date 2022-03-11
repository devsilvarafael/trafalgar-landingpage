import styles from "../../styles/Commons/heading.module.scss";
import { Button } from "./Button";

import illustration from '../../assets/icons/trafalgar-header-1.svg';

interface IHeading {
  title: string;
  description: string;
}

export const Heading = ({ title, description }: IHeading) => {
  return (
    <div className={styles.content}>
      <div className={styles.mainHeading}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button text="Consult today" />
      </div>
      <div>
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};