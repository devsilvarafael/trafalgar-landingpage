import illustration from "../../assets/icons/trafalgar-illustration-2.svg";
import { Heading } from "../Commons/Heading";

import styles from "../../styles/providers.module.scss";

export const Providers = () => {
  return (
    <section className={styles.container}>
      <img src={illustration} alt="Healthcare providers" />
      <Heading
        title="Leading healthcare providers"
        description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
      />
    </section>
  );
};
