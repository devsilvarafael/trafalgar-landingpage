import styles from "../../styles/header.module.scss";

import logoIcon from "../../assets/icons/logo.svg";

export const Header = (): JSX.Element => {
  return (
    <div className={styles.headerNav}>
      <img src={logoIcon} alt="" />
      <div>
        <ul>
            <li><strong>Home</strong></li>
            <li>Find a doctor</li>
            <li>Apps</li>
            <li>Testimonials</li>
            <li>About us</li>
        </ul>
      </div>
    </div>
  );
};
