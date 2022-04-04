import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../../styles/customers.module.scss";

import { Pagination } from "swiper";

import { CustomersData } from "./CustomersData";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export const Customers = () => {
  return (
    <Swiper
      slidesPerView={1}
      className={styles.swiperContainer}
      pagination={true}
      modules={[Pagination]}
    >
      {CustomersData.map((comments) => (
        <SwiperSlide key={comments.id}>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>What our Lorem Ipsum are saying</h2>
              <div className={styles.divider} />

              <div className={styles.content}>
                <div className={styles.profile}>
                  <img src={comments.avatar} alt="" />
                </div>

                <div className={styles.profileInfo}>
                  <h3>{comments.name}</h3>
                  <p>{comments.occupation}</p>
                </div>

                <div className={styles.comment}>
                  <p>
                    “{comments.comment}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
