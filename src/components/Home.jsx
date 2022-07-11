import React from 'react'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide  } from 'swiper/react';
import "swiper/css/navigation";
import 'swiper/css';

export default function Home() {
  return (
    <section id='home'>
        <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
            <section className='bg-[url("../public/images/home-slide-1.jpg")] bg-no-repeat bg-cover bg-center text-center lg:text-left  w-full min-h-[80vh] flex flex-col items-center lg:items-start justify-center  px-[5%] sm:px-[10%]'>
                <h3>we provide best service</h3>
                <p className='text-gray text-xs sm:text-sm lg:text-base  my-5 lg:max-w-[500px]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur beatae iusto pariatur laborum magnam eos!
                </p>
                <a  className='btn' href="#">Get Started</a>
            </section>

        </SwiperSlide>
        <SwiperSlide>
            <section className='bg-[url("../public/images/home-slide-2.jpg")] bg-no-repeat bg-cover bg-center text-center lg:text-left  w-full min-h-[80vh] flex flex-col items-center lg:items-start justify-center px-[5%] sm:px-[10%]'>
                <h3>Making Dream Come To Life</h3>
                <p className='text-gray text-xs sm:text-sm lg:text-base  my-5 lg:max-w-[500px]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur beatae iusto pariatur laborum magnam eos!
                </p>
                <a  className='btn' href="#">Get Started</a>
            </section>

        </SwiperSlide>
        <SwiperSlide>
            <section className='bg-[url("../public/images/home-slide-3.jpg")] bg-no-repeat bg-cover bg-center text-center lg:text-left  w-full min-h-[80vh] flex flex-col items-center lg:items-start justify-center px-[5%] sm:px-[10%]'>
                <h3>From Concept To Creation</h3>
                <p className='text-gray text-xs sm:text-sm lg:text-base  my-5 lg:max-w-[500px]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur beatae iusto pariatur laborum magnam eos!
                </p>
                <a  className='btn' href="#">Get Started</a>
            </section>

        </SwiperSlide>
    </Swiper>

    </section>
    
    
  )
}
