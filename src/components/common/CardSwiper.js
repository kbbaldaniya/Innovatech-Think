import React from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from './Title'
import {CardSwiperData} from '../StaticData'

const CardSwiper = () => {
  return (
    <div className='swiper-card'>
      <Title title='Specialization' />
      <Swiper
        modules={[Pagination, EffectCoverflow,Autoplay]}
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        speed={1000}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true
        }}
        pagination={{
          el: 'swiper-pagination'
        }}
      >
        <div className="swiper">
          <div className="swiper-wrapper">
            {CardSwiperData?.map((data, ind) =>
              <SwiperSlide key={ind} className='swiper-slide'>
                <div className="card">
                  <div className="slider-text">
                    <h3>
                      {data.icon}
                    </h3>
                  </div>

                  <div className="card-content">
                    <div>
                      {data.heading}
                    </div>
                    <p>
                      {data.disc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default CardSwiper
