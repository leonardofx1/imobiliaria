'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export const SwiperDetails = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{delay:5000,disableOnInteraction:false}}
        className="mySwiper"
      >
        <SwiperSlide><img src='/casa.jpg' alt="Descrição da imagem" /></SwiperSlide>
        <SwiperSlide><img src='/casa.jpg' alt="Descrição da imagem" /></SwiperSlide>
      </Swiper>
    </>
  )
}
