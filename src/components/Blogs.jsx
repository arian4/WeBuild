import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
export default function Blogs() {
  return (
    <section className='px-[5%] py-[5%] sm:px-[10%] bg-light_bg' id='blogs'>
        <h3 className='border-l-[8px] border-yellow pl-1'>Our Blogs</h3>
        <div className='my-5 cursor-grab'>
            <Swiper breakpoints={{
                768 : {
                    slidesPerView : 2,
                    spaceBetween : 20
                },
                1024 : {
                    slidesPerView : 3 ,
                    spaceBetween : 20
                }
            }}>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div>
                            <img src="./images/blog-1.jpg" alt="blog-1" />
                        </div>
                        <div className='text-center'>
                            <h5 className='text-black text-sm font-bold mt-3'>Blog title goes here</h5>
                            <p className='text-xs text-gray my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div>
                            <img src="./images/blog-2.jpg" alt="blog-2" />
                        </div>
                        <div className='text-center'>
                            <h5 className='text-black text-sm font-bold mt-3'>Blog title goes here</h5>
                            <p className='text-xs text-gray my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div>
                            <img src="./images/blog-3.jpg" alt="blog-3" />
                        </div>
                        <div className='text-center'>
                            <h5 className='text-black text-sm font-bold mt-3'>Blog title goes here</h5>
                            <p className='text-xs text-gray my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div>
                            <img src="./images/blog-4.jpg" alt="blog-4" />
                        </div>
                        <div className='text-center'>
                            <h5 className='text-black text-sm font-bold mt-3'>Blog title goes here</h5>
                            <p className='text-xs text-gray my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div>
                            <img src="./images/blog-5.jpg" alt="blog-5" />
                        </div>
                        <div className='text-center'>
                            <h5 className='text-black text-sm font-bold mt-3'>Blog title goes here</h5>
                            <p className='text-xs text-gray my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div>
                            <img src="./images/blog-6.jpg" alt="blog-6" />
                        </div>
                        <div className='text-center'>
                            <h5 className='text-black text-sm font-bold mt-3'>Blog title goes here</h5>
                            <p className='text-xs text-gray my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
            
        </div>

    </section>
  )
}
