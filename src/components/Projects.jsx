import React, { useState } from 'react'
import LightGallery from './LightGallery'

export default function Projects() {
    const [projects] = useState([
        {
            title : 'Dream Home',
            desc : 'construction, design',
            image : './images/project-1.jpg'
        },
        {
            title : 'Dream Home',
            desc : 'construction, design',
            image : './images/project-2.jpg'
        },
        {
            title : 'Dream Home',
            desc : 'construction, design',
            image : './images/project-3.jpg'
        },
        {
            title : 'Dream Home',
            desc : 'construction, design',
            image : './images/project-4.jpg'
        },
        {
            title : 'Dream Home',
            desc : 'construction, design',
            image : './images/project-5.jpg'
        },
        {
            title : 'Dream Home',
            desc : 'construction, design',
            image : './images/project-6.jpg'
        },
    ])
    const [openLightGallery, setopenLightGallery] = useState(false)
    const [LightGalleryImage, setLightGalleryImage] = useState(null)
    const LightGalleryHandler = (image) =>{
        setopenLightGallery(true)
        setLightGalleryImage(image)

    }
  return (
    <section className='px-[5%] py-[5%] sm:px-[10%] bg-black' id='projects'>
        <h3 className='border-l-[8px] border-yellow pl-1 text-white'>Our Projects</h3>
        <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3 mt-8 '>
            {projects.map((p,index) => (
                <div onClick={()=> LightGalleryHandler(p.image)} key={index} className='flex flex-col cursor-pointer'>
                    <div className='h-[300px] overflow-hidden '><img className='w-full h-full transition hover:scale-125' src={p.image} alt="project-img" /></div>
                    <div className='p-4  bg-white relative'>
                        <div>
                            <h5 className='text-black font-bold text-sm'>{p.title}</h5>
                            <p className='text-gray text-xs'>{p.desc}</p>
                        </div>
                        <div className='bg-yellow absolute right-0 bottom-0 top-0 p-5'><i class="fa-solid fa-plus text-white text-2xl"></i></div>
                    </div>
                
                </div>

            ))}
            
            
        </div>
        <LightGallery 
        openLightGallery={openLightGallery} 
        setopenLightGallery={setopenLightGallery}
        LightGalleryImage = {LightGalleryImage}
        setLightGalleryImage ={setLightGalleryImage}

         />
    </section>
  )
}
