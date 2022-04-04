import styles from "../../styles/latest-articles.module.scss";

import { ReactComponent as RightArrowIcon } from "../../assets/icons/rightArrow.svg";

import articleImg from "../../assets/article-1.png";
import { LatestArticlesData } from "./LatestArticlesData";
import { HeadingLevel2 } from "../Commons/HeadingLevel2";
import { Divider } from "../Commons/Divider";
import { Button } from "../Commons/Button";

export const LatestArticles = () => {
  return (
    <div className={styles.allContent}>
        <h2 id={styles.heading}>Check out our latest article</h2>
        <Divider />
      <div className={styles.contentGrid}>
        {LatestArticlesData.map((comments) => (
          <div className={styles.articleCard} key={comments.id}>
            <span>{comments.image}</span>

            <div className={styles.articleDescription}>
              <h3>{comments.title}</h3>

              <p>{comments.description}</p>

              <button>
                Read More
                <RightArrowIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Button colorBg="#f8f8f8" colorTx="#458ff6">View All</Button>
    </div>
  );
};
