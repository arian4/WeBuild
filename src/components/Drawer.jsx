import React from 'react'

export default function Drawer({openDrawer,setopenDrawer}) {
  return (
    <>
        {openDrawer ? (<div className='bg-black fixed inset-0 h-screen opacity-75'></div>) : null}
        <section className={`bg-white absolute transition duration-300  top-0 right-0  ${openDrawer ? 'translate-x-0' : 'translate-x-full'} h-screen p-5`}>
            <div className='flex items-center justify-end'>
                <i onClick={() => setopenDrawer(false)} class="fa-solid fa-xmark text-2xl cursor-pointer "></i>
            </div>
            <div className=' border-b border-b-gray' >
                <div className='flex flex-col items-center justify-center mb-5'>
                    <div className='w-12 h-12 bg-light_bg flex items-center justify-center'>
                        <i  class="fa-solid fa-phone-flip"></i>
                    </div>
                    <h5 className='font-bold my-2'>Phone Number</h5>
                    <p className='text-gray text-sm'>+123-456-7890</p>
                    <p className='text-gray text-sm'>+111-222-3333</p>
                </div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <div className='w-12 h-12 bg-light_bg flex items-center justify-center'>
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <h5 className='font-bold my-2'>Email Address</h5>
                    <p className='text-gray text-sm'>test@test.com</p>
                    
                </div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <div className='w-12 h-12 bg-light_bg flex items-center justify-center'>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <h5 className='font-bold my-2'>Offiec Address</h5>
                    <p className='text-gray text-sm'>tehran , Iran </p>
                    
                </div>

            </div>
            <div className='flex items-center justify-center mt-5'>
                <span className='w-12 h-12 bg-light_bg flex items-center justify-center  mx-2'>
                    <i class="fa-brands fa-facebook-f"></i>

                </span>
                <span className='w-12 h-12 bg-light_bg flex items-center justify-center mx-2'>
                    <i class="fa-brands fa-twitter"></i>

                </span>
                <span className='w-12 h-12 bg-light_bg flex items-center justify-center mx-2'>
                    <i class="fa-brands fa-instagram"></i>

                </span>
                <span className='w-12 h-12 bg-light_bg flex items-center justify-center mx-2'>
                    <i class="fa-brands fa-linkedin"></i>

                </span>
            </div>

        </section>
    </>
    
  )
}
