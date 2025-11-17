import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import img from '../assets/customer-top.png'
import RevewsCard from "./RevewsCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="my-20">
        <div className="text-center my-10 ">
            <img className="mx-auto mb-10" src={img} alt="" />
            <h1 className="text-4xl text-secondary font-bold mb-3">What our customers are sayings</h1>
            <p className="text-gray-500">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
        </div>


      <Swiper
         effect={'coverflow'}
         spaceBetween={30}
          loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          
          slideShadows: true,
        }}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        pagination={true}
        modules={[EffectCoverflow, Pagination , Autoplay]}
        className="mySwiper"
      >
        {
            reviews.map(reviwe => (
    <SwiperSlide key={reviwe.id}>
        <RevewsCard reviwe={reviwe} />
    </SwiperSlide>
))

        }
      </Swiper>
    </div>
  );
};

export default Reviews;
