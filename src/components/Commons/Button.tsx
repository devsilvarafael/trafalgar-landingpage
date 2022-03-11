import styles from '../../styles/Commons/button.module.scss';

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps): JSX.Element => {
  return <button className={styles.btn}>{ text }</button>;
};
