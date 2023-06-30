import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

const VerticleSwiper = () => {
  return (
    <Swiper
      direction={"vertical"} //use horizontal also for horizontal scrolling
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      modules={[Mousewheel]}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  )
}

export default VerticleSwiper
