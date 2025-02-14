import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TarjetaIngresoUDI from "../layout/TarjetaIngresoUDI";

const NavegacionInicio = () => {
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
            <SwiperSlide className="swiper-slide-Main"><TarjetaIngresoUDI /></SwiperSlide>
            
            <SwiperSlide className="swiper-slide-Main"><TarjetaIngresoUDI /></SwiperSlide>
            
            <SwiperSlide className="swiper-slide-Main"><TarjetaIngresoUDI /></SwiperSlide>
            
        </Swiper>
    );
}

export default NavegacionInicio;