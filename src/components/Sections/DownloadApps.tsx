import styles from "../../styles/download-apps.module.scss";
import illustration from "../../assets/icons/trafalgar-illustration-3.svg";
import { HeadingLevel2 } from "../Commons/HeadingLevel2";
import { Button } from "../Commons/Button";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download-arrow.svg";

export const DownloadApps = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <HeadingLevel2
          title="Download our mobile apps"
          description="Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely"
        />
        <Button colorBg="#f8f8f8" colorTx="#458FF6">
          <span>Download</span> <DownloadIcon />
        </Button>
      </div>

      <img src={illustration} alt="" />
    </section>
  );
};
