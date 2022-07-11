import React, { useState } from 'react'
import Drawer from './Drawer'
import LoginModal from './LoginModal'
import SearchBox from './SearchBox'

export default function Header() {
    const [openMenu, setopenMenu] = useState(false)
    const [openDrawer, setopenDrawer] = useState(false)
    const [openSearchBox, setOpenSearchBox] = useState(false)
    const [openModal, setopenModal] = useState(false)
    return (
        <header className='bg-white flex flex-wrap items-center justify-between p-4 shadow-lg fixed z-30  w-full'>
            <div className='text-xl lg:text-2xl'>We<span className='text-yellow'>Build</span></div>
            <nav className='hidden lg:flex lg:items-center lg:justify-between'>
                <a className='text-black mr-4 xl:mr-6 text-xl transition  hover:text-yellow' href="#home">Home</a>
                <a className='text-black mr-4 xl:mr-6 text-xl transition hover:text-yellow' href="#about">About</a>
                <a className='text-black mr-4 xl:mr-6 text-xl transition hover:text-yellow' href="#services">Services</a>
                <a className='text-black mr-4 xl:mr-6 text-xl transition hover:text-yellow' href="#projects">Projects</a>
                <a className='text-black mr-4 xl:mr-6 text-xl transition hover:text-yellow' href="#pricing">Pricing</a>
                <a className='text-black mr-4 xl:mr-6 text-xl transition hover:text-yellow' href="#contact">Contact</a>
                <a className='text-black mr-4 xl:mr-6 text-xl transition hover:text-yellow' href="#blogs">Blogs</a>
            </nav>
            <div className='flex items-center'>
                <div onClick={() => setopenMenu(prev => !prev)} className='bg-light_bg cursor-pointer p-2 sm:p-4 flex items-center justify-center ml-2 hover:bg-black hover:text-white lg:hidden'>
                    <i   class="fa-solid fa-bars text-base sm:text-lg"></i>

                </div>
                <div onClick={() => setopenDrawer(true)} className='bg-light_bg cursor-pointer p-2 sm:p-4 flex items-center justify-center ml-2 hover:bg-black hover:text-white'>
                    <i  class="fa-solid fa-circle-info text-base sm:text-lg"></i>

                </div>
                <div onClick={()=> setOpenSearchBox(prev => !prev)} className='bg-light_bg cursor-pointer p-2 sm:p-4 flex items-center justify-center ml-2 hover:bg-black hover:text-white'>
                    <i  class="fa-solid fa-magnifying-glass text-base sm:text-lg"></i>

                </div>
                <div onClick={() =>setopenModal(prev => !prev) } className='bg-light_bg cursor-pointer p-2 sm:p-4 flex items-center justify-center ml-2 hover:bg-black hover:text-white'>
                    <i  class="fa-solid fa-user text-base sm:text-lg"></i>

                </div>
                
                
                

            </div>
            <nav className={`lg:hidden flex flex-col basis-full  transition-[height] ${openMenu ? 'h-auto' : 'h-0'}  overflow-hidden`}>
                <a className='text-black mb-4 text-sm xl:mr-6 transition  hover:text-yellow' href="#home">Home</a>
                <a className='text-black mb-4 text-sm xl:mr-6 transition hover:text-yellow' href="#about">About</a>
                <a className='text-black mb-4 text-sm xl:mr-6 transition hover:text-yellow' href="#services">Services</a>
                <a className='text-black mb-4 text-sm xl:mr-6 transition hover:text-yellow' href="#projects">Projects</a>
                <a className='text-black mb-4 text-sm xl:mr-6 transition hover:text-yellow' href="#pricing">Pricing</a>
                <a className='text-black mb-4 text-sm xl:mr-6 transition hover:text-yellow' href="#contact">Contact</a>
                <a className='text-black mb-4 text-sm xl:mr-6 transition hover:text-yellow' href="#blogs">Blogs</a>
            </nav>
            <Drawer openDrawer={openDrawer} setopenDrawer={setopenDrawer} />
            <SearchBox openSearchBox={openSearchBox} />
            <LoginModal openModal={openModal} />
        </header>
    )
}
