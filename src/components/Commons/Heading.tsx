import styles from "../../styles/Commons/heading.module.scss";
import { Button } from "./Button";
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
      </div>
    </div>
  );
};
