import { Heading } from "../Commons/Heading";

import illustration from "../../assets/icons/trafalgar-header-1.svg";

import styles from "../../styles/virtual-health.module.scss";
import { Button } from "../Commons/Button";

export const VirtualHealth = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <div className={styles.texts}>
        <Heading
          title="Virtual healthcare for you"
          description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
        />
        
        <Button text="Consult today" colorBg="#458FF6" colorTx="#fff" />
      </div>

      <img src={illustration} alt="Virtual health" />
    </section>
  );
};
