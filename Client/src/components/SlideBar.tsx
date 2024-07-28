// src/components/Slidebar.tsx
import React from 'react';
import 'tailwindcss/tailwind.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import the fade effect CSS
import { Pagination, EffectFade } from 'swiper/modules'; // Import the EffectFade module
import '../App.css';

const Slidebar: React.FC = () => {
    return (
        <div className="flex justify-center mt-[40px]">
            <div className="w-[1020px] h-[345px]">
                <Swiper
                    modules={[Pagination, EffectFade]} // Include EffectFade module
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }}
                    effect="fade" // Add the fade effect
                    fadeEffect={{ crossFade: true }} // Optional: cross-fade effect
                    className="h-full"
                >
                    <SwiperSlide>
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img src="https://cdn.shopify.com/s/files/1/0061/5687/7924/files/DSC06221_Large_a20664e1-a249-4870-a377-d395402bc3c3.jpg?v=1666253927" alt="Slide 1" className="object-cover w-full h-full" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-full flex items-center justify-center">
                            <img src="https://cdn-www.angrymiao.com/am_afa_r2/am_afa_r2_16.png" alt="Slide 2" className="object-cover w-full h-full" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-full flex items-center justify-center">
                            <img src="https://cdn-www.angrymiao.com/am_afa_r2/am_afa_r2_10.png" alt="Slide 3" className="object-cover w-full h-full" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slidebar;
