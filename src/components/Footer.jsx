import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
export default function Footer() {
  return (
    <footer className='px-[5%] py-[5%] sm:px-[10%]'>
        <div className='my-5 cursor-grab'>
            <Swiper breakpoints={{
                640 : {
                    slidesPerView : 3 ,
                    spaceBetween : 20
                },
                768 : {
                    slidesPerView : 4 ,
                    spaceBetween : 20
                },
                1024 : {
                    slidesPerView : 5 ,
                    spaceBetween : 20
                }
            }}>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <img className='w-20' src="./images/client-logo-1.png" alt="client-logo-1" />

                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <img className='w-20' src="./images/client-logo-2.png" alt="client-logo-2" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <img className='w-20' src="./images/client-logo-3.png" alt="client-logo-3" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <img className='w-20' src="./images/client-logo-4.png" alt="client-logo-4" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <img className='w-20' src="./images/client-logo-5.png" alt="client-logo-5" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <img className='w-20' src="./images/client-logo-6.png" alt="client-logo-6" />

                    </div>
                </SwiperSlide>
                
                
            </Swiper>

        </div>
        <div className='flex items-center justify-center flex-wrap'>
            <a href="#home" className='btn mx-2 my-2'>Home</a>
            <a href="#about" className='btn mx-2 my-2'>About</a>
            <a href="#services" className='btn mx-2 my-2'>Services</a>
            <a href="#projects" className='btn mx-2 my-2'>Projects</a>
            <a href="#pricing" className='btn mx-2 my-2'>Pricing</a>
            <a href="#contact" className='btn mx-2 my-2'>Contact</a>
            <a href="#blogs" className='btn mx-2 my-2'>Blogs</a>
        </div>
        <p className='text-black text-center'>Created By <span className='text-yellow'>Arian Hajiaghaei</span></p>

    </footer>
  )
}
