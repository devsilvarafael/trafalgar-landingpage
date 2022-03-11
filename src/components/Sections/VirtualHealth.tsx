import { Heading } from "../Commons/Heading";

import illustration from '../../assets/icons/trafalgar-header-1.svg';

import styles from '../../styles/virtual-health.module.scss';

export const VirtualHealth = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <Heading
        title="Virtual healthcare for you"
        description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
      />
      <img src={illustration} alt="Virtual health" />
    </section>
  );
};
