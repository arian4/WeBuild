import React from 'react'

export default function Pricing() {
  return (
    <section className='px-[5%] py-[5%] sm:px-[10%] bg-light_bg' id='pricing'>
        <h3 className='border-l-[8px] border-yellow pl-1 '> Our Pricing </h3>
        <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3 my-5'>
            <div className='flex flex-col items-center justify-center bg-white border border-gray p-8'>
                <div className='w-16 h-16 rounded-full bg-yellow flex items-center justify-center'><i class="fa-solid fa-house text-2xl "></i></div>
                <h5 className='text-black mt-3'>Basic Plan</h5>
                <p className='text-black my-8'>$ <span className='text-4xl '>250</span>/Mo</p>
                <div>
                    <p className='text-gray text-xs lg:text-sm  mb-5 '>interior design</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>interior design</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>material supply</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>maintenance</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>24/7 support</p>
                </div>
                <button className='btn'>Choose Plan</button>
            </div>
            
            <div className='flex flex-col items-center justify-center bg-white border border-gray p-8'>
                <div className='w-16 h-16 rounded-full bg-yellow flex items-center justify-center'><i class="fa-solid fa-building text-2xl"></i></div>
                <h5 className='text-black mt-3'>Premium plan</h5>
                <p className='text-black my-8'>$ <span className='text-4xl '>650</span>/Mo</p>
                <div>
                    <p className='text-gray text-xs lg:text-sm mb-5 '>interior design</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>interior design</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>material supply</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>maintenance</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>24/7 support</p>
                </div>
                <button className='btn'>Choose Plan</button>
            </div>
            <div className='flex flex-col items-center justify-center bg-white border border-gray p-8'>
                <div className='w-16 h-16 rounded-full bg-yellow flex items-center justify-center'><i class="fa-solid fa-city text-2xl"></i></div>
                <h5 className='text-black mt-3'>Ultimate Plan</h5>
                <p className='text-black my-8'>$ <span className='text-4xl '>1250</span>/Mo</p>
                <div>
                    <p className='text-gray text-xs lg:text-sm  mb-5 '>interior design</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>interior design</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>material supply</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>maintenance</p>
                    <p className='text-gray text-xs lg:text-sm mb-5'>24/7 support</p>
                </div>
                <button className='btn'>Choose Plan</button>
            </div>
        </div>
    </section>
  )
}
