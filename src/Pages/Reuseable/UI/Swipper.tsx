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
        rotate: 30,
        stretch: 50,
        depth: 150,
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
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery1} alt="Gallery 1" />
          <p className="slide-text">Focus on Connectivity</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery2} alt="Gallery 2" />
          <p className="slide-text">Core Services</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery3} alt="Gallery 3" />
          <p className="slide-text">Our Core Values</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery1} alt="Gallery 1" />
          <p className="slide-text">Focus on Connectivity</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery2} alt="Gallery 2" />
          <p className="slide-text">Core Services</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery3} alt="Gallery 3" />
          <p className="slide-text">Our Core Values</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery1} alt="Gallery 1" />
          <p className="slide-text">Focus on Connectivity</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery2} alt="Gallery 2" />
          <p className="slide-text">Core Services</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery3} alt="Gallery 3" />
          <p className="slide-text">Our Core Values</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery1} alt="Gallery 1" />
          <p className="slide-text">Focus on Connectivity</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery2} alt="Gallery 2" />
          <p className="slide-text">Core Services</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery3} alt="Gallery 3" />
          <p className="slide-text">Our Core Values</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiperComponent;
