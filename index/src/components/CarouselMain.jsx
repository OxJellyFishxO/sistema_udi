import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SwiperLoginUDI from "./dashboard/SwiperLogin";



const Carousel = () => {
    return (
        <Swiper
            // install Swiper modules
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="swiper-Main"
        >
            <SwiperSlide className="swiper-slide-Main"><SwiperLoginUDI /></SwiperSlide>
            
            <SwiperSlide className="swiper-slide-Main"><img className="swiper-img-Main" src="../../public/index/img-inicio.png" /></SwiperSlide>
            
            <SwiperSlide className="swiper-slide-Main"><img className="swiper-img-Main" src="../../public/index/img-inicio.png" /></SwiperSlide>
            
            <SwiperSlide className="swiper-slide-Main"><img className="swiper-img-Main" src="../../public/index/img-inicio.png" /></SwiperSlide>
        </Swiper>
    );
}

export default Carousel;