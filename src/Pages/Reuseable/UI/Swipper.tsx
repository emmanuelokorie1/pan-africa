import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import gallery1 from "../../../assets/focus.svg";
import gallery2 from "../../../assets/coreServices.svg";
import gallery3 from "../../../assets/coreValue.svg";

const MySwiperComponent = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img src={gallery1} alt="Gallery 1" /></SwiperSlide>
      <SwiperSlide><img src={gallery2} alt="Gallery 2" /></SwiperSlide>
      <SwiperSlide><img src={gallery3} alt="Gallery 3" /></SwiperSlide>
      <SwiperSlide><img src={gallery1} alt="Gallery 1" /></SwiperSlide>
      <SwiperSlide><img src={gallery2} alt="Gallery 2" /></SwiperSlide>
      <SwiperSlide><img src={gallery3} alt="Gallery 3" /></SwiperSlide>
    </Swiper>
  );
};

export default MySwiperComponent;
