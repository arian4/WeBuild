import React from 'react'

export default function LightGallery({openLightGallery,setopenLightGallery,LightGalleryImage,setLightGalleryImage}) {
    const CloseBtnHandler = () =>{
        setopenLightGallery(false)
        setLightGalleryImage(null)
        
    }
    
    return (
        <>
            {
            openLightGallery ? (
                <section className='fixed z-50 bg-black inset-0 h-screen p-5 flex flex-col  '>
                    <div className='flex items-center justify-end'>
                        <i onClick={CloseBtnHandler}  class="fa-solid fa-xmark text-2xl cursor-pointer text-gray "></i>
                    </div>
                    <div className=' sm:max-w-[80%] sm:max-h-[80%] mx-auto mt-10 '>
                        <img className='w-full h-full' src={LightGalleryImage} alt='lg-image' />
                    </div>

                </section>

            ):
            null
            }   
        </>
        
        
    )
}
