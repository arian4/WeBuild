import React from 'react'

export default function Contact() {
  return (
    <section className='px-[5%] py-[5%] sm:px-[10%] bg-black' id='contact'>
        <h3 className='border-l-[8px] border-yellow pl-1 text-white '> Contact Us </h3>
        <div className='my-5 flex flex-col lg:flex-row lg:gap-10 '>
            <div className='lg:basis-1/2'>
                <img className='w-full h-full' src="./images/map.jpg" alt="map" />
            </div>
            <div className='bg-white p-4 mt-5 lg:mt-0 lg:basis-1/2'>
                <h4>Get In Touch</h4>
                <form action="">
                    <input className='w-full mb-5 text-gray text-sm p-2 outline-none border-b border-b-gray focus:border-b-yellow '  type="text" placeholder='name' />
                    <input className='w-full mb-5 text-gray text-sm p-2 outline-none border-b border-b-gray focus:border-b-yellow' type="email" placeholder='email' />
                    <input className='w-full mb-5 text-gray text-sm p-2 outline-none border-b border-b-gray focus:border-b-yellow' type="number" placeholder='phone' />
                    <textarea className='w-full mb-5 text-gray text-sm p-2 outline-none border-b border-b-gray focus:border-b-yellow' placeholder='message' id="" cols="30" rows="5"></textarea>
                    <input className='btn' type="submit" value={'send Message'} />
                </form>

            </div>
        </div>
    </section>
  )
}
