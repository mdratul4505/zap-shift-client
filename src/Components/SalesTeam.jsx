import React from "react";
import amajon from "../assets/brands/amazon.png";
import casio from "../assets/brands/casio.png";
import moonstar from "../assets/brands/moonstar.png";
import randstad from "../assets/brands/randstad.png";
import star from "../assets/brands/star.png";
import starPeople from "../assets/brands/start_people.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const SalesTeam = () => {
  return (
    <div className="my-20">
      <h2 className="text-secondary font-bold text-3xl text-center">
        We've helped thousands of_sales teams
      </h2>
      <div className='flex mt-10 px-20 justify-between'>
        <Swiper
      slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}

        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide><img src={casio} alt="" /></SwiperSlide>
        <SwiperSlide><img src={amajon} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moonstar} alt="" /></SwiperSlide>
        <SwiperSlide><img src={star} alt="" /></SwiperSlide>
        <SwiperSlide><img src={starPeople} alt="" /></SwiperSlide>
        <SwiperSlide><img src={randstad} alt="" /></SwiperSlide>
      </Swiper>
                
       </div>

      
    </div>
  );
};

export default SalesTeam;
