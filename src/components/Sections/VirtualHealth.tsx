import { Heading } from "../Commons/Heading";

import illustration from "../../assets/icons/trafalgar-header-1.svg";

import styles from "../../styles/virtual-health.module.scss";
import { Button } from "../Commons/Button";

export const VirtualHealth = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Heading
          title="Virtual healthcare for you"
          description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
        />

        <Button colorBg="#458FF6" colorTx="#ffffff">
          Consult today
        </Button>
      </div>

      <img src={illustration} alt="Virtual health" />
    </section>
  );
};
