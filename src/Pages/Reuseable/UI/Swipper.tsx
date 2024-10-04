import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import gallery1 from "../../../assets/homeSwipper/img1.png";
import gallery2 from "../../../assets/homeSwipper/img2.png";
import gallery3 from "../../../assets/homeSwipper/img3.png";
import gallery4 from "../../../assets/homeSwipper/img4.png";
import gallery5 from "../../../assets/homeSwipper/img5.png";
// import gallery6 from "../../../assets/homeSwipper/img6.png";

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
      loop={true}
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
          <p className="slide-text">Buy-lease-back</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery2} alt="Gallery 2" />
          <p className="slide-text">Managed services</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery3} alt="Gallery 3" />
          <p className="slide-text">Colocation</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery4} alt="Gallery 1" />
          <p className="slide-text">Built to suit</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={gallery5} alt="Gallery 2" />
          <p className="slide-text">DAS Solution</p>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="slide-content">
          <img src={gallery6} alt="Gallery 3" />
          <p className="slide-text">Wifi Deployement</p>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default MySwiperComponent;
