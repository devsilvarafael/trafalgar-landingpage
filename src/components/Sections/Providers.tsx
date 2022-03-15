import illustration from "../../assets/icons/trafalgar-illustration-2.svg";

import styles from "../../styles/providers.module.scss";
import { Button } from "../Commons/Button";
import { HeadingLevel2 } from "../Commons/HeadingLevel2";

export const Providers = () => {
  return (
    <section className={styles.container}>
      <img src={illustration} alt="Healthcare providers" />
      <div className={styles.content}>
        <HeadingLevel2
          title="Leading healthcare providers"
          description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
        />
        <Button text="Learn more" colorBg="#fff" colorTx="#458FF6" />
      </div>
    </section>
  );
};
