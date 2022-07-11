import React from 'react'

export default function About() {
  return (
    <section className='px-[5%] py-[5%] sm:px-[10%]' id='about'>
        <h3 className='border-l-[8px] border-yellow pl-1'> About Us </h3>
        <div className='my-5 flex flex-col items-start lg:flex-row lg:items-center lg:gap-10'>
            <div>
                <video src="./images/about-vid.mp4" loop muted autoPlay></video>

            </div>
            <div>
                <h4 className='mt-5'>We will provide you the best work which you dreamt for!</h4>
                <p className='text-gray my-5 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.
                </p>
                <a className='btn' href="#">Read More</a>

            </div>
            
            

        </div>
        <div className='grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
            <div className='bg-light_bg p-5 md:p-10 text-center  '>
                <h4>10+</h4>
                <p className='text-gray text-xs  lg:text-sm '>years of experience</p>
            </div>
            <div className='bg-light_bg p-5 md:p-10 text-center  '>
                <h4>1500+</h4>
                <p className='text-gray text-xs lg:text-sm '>project completed</p>
            </div>
            <div className='bg-light_bg p-5 md:p-10 text-center  '>
                <h4>790+</h4>
                <p className='text-gray text-xs lg:text-sm '>satiesfied clients</p>
            </div>
            <div className='bg-light_bg p-5 md:p-10 text-center '>
                <h4>450+</h4>
                <p className='text-gray text-xs lg:text-sm '>active workers</p>
            </div>
        </div>
        

    </section>
  )
}
