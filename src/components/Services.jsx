import React from 'react'

export default function Services() {
  return (
    <section className='px-[5%] py-[5%] sm:px-[10%] bg-light_bg' id='services'>
      <h3 className='border-l-[8px] border-yellow pl-1'> Our Services </h3>
      <div className='my-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        <div className='flex flex-col items-center justify-center border bg-white border-gray shadow-lg text-center p-5 md:px-10'>
          <img className='w-12 transition hover:-translate-y-4' src="./images/service-1.png" alt="service-1"  />
          <h5 className='text-black text-sm lg:text-base font-bold my-5'>Building Construction</h5>
          <p className='text-gray text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
        </div>
        <div className='flex flex-col items-center justify-center border bg-white border-gray shadow-lg text-center p-5 md:px-10'>
          <img className='w-12 transition hover:-translate-y-4' src="./images/service-2.png" alt="service-2"  />
          <h5 className='text-black text-sm lg:text-base font-bold my-5'>House Renovation</h5>
          <p className='text-gray text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
        </div>
        <div className='flex flex-col items-center justify-center border bg-white border-gray shadow-lg text-center p-5 md:px-10'>
          <img className='w-12 transition hover:-translate-y-4' src="./images/service-3.png" alt="service-3"  />
          <h5 className='text-black text-sm lg:text-base font-bold my-5'>Architechture Design</h5>
          <p className='text-gray text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
        </div>
        <div className='flex flex-col items-center justify-center border bg-white border-gray shadow-lg text-center p-5 md:px-10'>
          <img className='w-12 transition hover:-translate-y-4' src="./images/service-4.png" alt="service-4"  />
          <h5 className='text-black text-sm lg:text-base font-bold my-5'>Material Supply</h5>
          <p className='text-gray text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
        </div>
        <div className='flex flex-col items-center justify-center border bg-white border-gray shadow-lg text-center p-5 md:px-10'>
          <img className='w-12 transition hover:-translate-y-4' src="./images/service-5.png" alt="service-5"  />
          <h5 className='text-black text-sm lg:text-base font-bold my-5'>Construction Consultant</h5>
          <p className='text-gray text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
        </div>
        <div className='flex flex-col items-center justify-center border bg-white border-gray shadow-lg text-center p-5 md:px-10'>
          <img className='w-12 transition hover:-translate-y-4' src="./images/service-6.png" alt="service-6"  />
          <h5 className='text-black text-sm lg:text-base font-bold my-5'>Interior Design</h5>
          <p className='text-gray text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
        </div>
        <div className='flex flex-col items-center justify-center border bg-white border-gray shadow-lg text-center p-5 md:px-10'>
          <img className='w-12 transition hover:-translate-y-4' src="./images/service-7.png" alt="service-7"  />
          <h5 className='text-black text-sm lg:text-base font-bold my-5'>Building Maintenance</h5>
          <p className='text-gray text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
        </div>
        <div className='flex flex-col items-center justify-center border bg-white border-gray shadow-lg text-center p-5 md:px-10'>
          <img className='w-12 transition hover:-translate-y-4' src="./images/service-8.png" alt="service-8"  />
          <h5 className='text-black text-sm lg:text-base font-bold my-5'>Building Renovation</h5>
          <p className='text-gray text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
        </div>
      </div>

    </section>
  )
}
