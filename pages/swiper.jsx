import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import cx from 'classNames';
import styles from 'styles/swiper.module.css';

SwiperCore.use([Autoplay]);
const SwiperPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Swiper
        spaceBetween={0}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
        onSwiper={swiper => setActiveIndex(swiper.activeIndex)}
        className={styles.container}
        slidesPerView={3}
        effect="coverflow"
        loop={true}
        initialSlide={1}
        centeredSlides
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
      >
        <SwiperSlide
          className={cx(styles.swiperItem, styles.box1, {
            [styles.prev]: activeIndex === 0,
            [styles.active]: activeIndex === -1,
            [styles.next]: activeIndex === -2,
          })}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          className={cx(styles.swiperItem, styles.box2, {
            [styles.prev]: activeIndex === 1,
            [styles.active]: activeIndex === 0,
            [styles.next]: activeIndex === -1,
          })}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          className={cx(styles.swiperItem, styles.box3, {
            [styles.prev]: activeIndex === 2,
            [styles.active]: activeIndex === 1,
            [styles.next]: activeIndex === 0,
          })}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          className={cx(styles.swiperItem, styles.box4, {
            [styles.prev]: activeIndex === 3,
            [styles.active]: activeIndex === 2,
            [styles.next]: activeIndex === 1,
          })}
        >
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          className={cx(styles.swiperItem, styles.box5, {
            [styles.prev]: activeIndex === 4,
            [styles.active]: activeIndex === 3,
            [styles.next]: activeIndex === 2,
          })}
        >
          Slide 5
        </SwiperSlide>{' '}
        <SwiperSlide
          className={cx(styles.swiperItem, styles.box6, {
            [styles.prev]: activeIndex === 5,
            [styles.active]: activeIndex === 4,
            [styles.next]: activeIndex === 3,
          })}
        >
          Slide 6
        </SwiperSlide>{' '}
        <SwiperSlide
          className={cx(styles.swiperItem, styles.box7, {
            [styles.prev]: activeIndex === 6,
            [styles.active]: activeIndex === 5,
            [styles.next]: activeIndex === 4,
          })}
        >
          Slide 7
        </SwiperSlide>
      </Swiper>
      asdas
    </div>
  );
};

export default SwiperPage;
