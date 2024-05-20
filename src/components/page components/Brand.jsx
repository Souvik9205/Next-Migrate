"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Brand = () => {
  return (
    <Swiper
      spaceBetween={24}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      speed={2000}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
      modules={[Autoplay]}
      className="py-6 border-t border-b border-black-text-100"
    >
      <SwiperSlide>
        <img
          className="mx-auto block"
          src="assets/images/brand/logo1.svg"
          alt=" brandlogo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto block"
          src="assets/images/brand/logo2.svg"
          alt=" brandlogo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto block"
          src="assets/images/brand/logo3.svg"
          alt=" brandlogo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto block"
          src="assets/images/brand/logo4.svg"
          alt=" brandlogo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto block"
          src="assets/images/brand/logo5.svg"
          alt=" brandlogo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto block"
          src="assets/images/brand/logo6.svg"
          alt=" brandlogo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto block"
          src="assets/images/brand/logo3.svg"
          alt=" brandlogo"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Brand;
