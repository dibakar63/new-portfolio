import React from 'react'
import './testimonals.css'
import { Data } from './Data';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonal = () => {
  return (
    <section className='testimonal container section'>
        <h3 className='testimonal_title'>My clients say</h3>
        <h6 className='testimonal_subtitle'>Testimonal</h6>

        <Swiper className='testimonal_container'
        loop={true}
        grabCurson={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          
        }}
        modules={[Pagination]}>
            {Data.map(({id,image,title,description})=>{
                return(
                    <SwiperSlide className='testimonal_card' key={id}>
                        <img src={image} alt="" className='testimonal_img'/>
                        <h3 className='testimonal_name'>{title}</h3>
                        <p className='testimonal_description'>{description}</p>
                        
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonal
