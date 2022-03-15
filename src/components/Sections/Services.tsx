import styles from "../../styles/services.module.scss";
import { Button } from "../Commons/Button";

import { servicesData } from "./ServicesData";

export const Services = (): JSX.Element => {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.introduction}>
        <h2>Our services</h2>

        <p>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>

      <div className={styles.servicesContainer}>
        <div className={styles.servicesGrid}>
          {servicesData.map((item) => (
            <div className={styles.servicesItems} key={item.id}>
              <div className={styles.Icons}>{item.icon}</div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Button text="Learn more" colorBg="#f8f8f8" colorTx="#458FF6" />
      </div>
    </section>
  );
};
