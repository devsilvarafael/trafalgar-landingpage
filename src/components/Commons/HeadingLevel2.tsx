import styles from '../../styles/Commons/heading2.module.scss';
import { Divider } from './Divider';

interface Props {
  title: string;
  description?: string;
}

export const HeadingLevel2 = ({ title, description }: Props): JSX.Element => {
  return (
    <div className={styles.content}>
      <div className={styles.mainHeading}>
        <h2>{title}</h2>
        <Divider />
        <p>{description}</p>
      </div>
    </div>
  );
};
