import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardLoginUDI from "./layout/CardLoginUDI";



const Carousel = () => {
    return (
        <Swiper
            // install Swiper modules
            effect={'slide'}
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            navigation={true}
            pagination={{clickable: true}}
            modules={[Navigation, Pagination]}
            className="swiper-Main"
        >
            <SwiperSlide className="swiper-slide-Main"><CardLoginUDI /></SwiperSlide>
            
            <SwiperSlide className="swiper-slide-Main"><CardLoginUDI /></SwiperSlide>
            
            <SwiperSlide className="swiper-slide-Main"><CardLoginUDI /></SwiperSlide>
            
        </Swiper>
    );
}

export default Carousel;