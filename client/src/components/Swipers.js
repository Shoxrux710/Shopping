
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from 'react-bootstrap';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


export default function Swipers() {



  return (
    <div className="swiper">
      <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
      }} pagination={true} className="mySwiper">
        <SwiperSlide><img src="https://images.unsplash.com/photo-1613704193420-a53cab02d194?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk4fHx3cmlzdHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1588444650733-d0767b753fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGVhcnJpbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.pixabay.com/photo/2019/06/20/20/42/bijouterie-4287991__340.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.pixabay.com/photo/2015/05/26/09/44/jewellery-784410__340.jpg" /></SwiperSlide>
      </Swiper>
    </div>
  )
}