import React from 'react'

export default function SearchBox({openSearchBox}) {
  return (
    <div className={`p-2 flex items-center transition ${openSearchBox ? 'scale-1' : 'scale-0'} justify-between absolute left-10  top-20 sm:top-28 bg-white w-4/5 `}>
        <input className='outline-0 bg-light_bg text-gray text-sm p-2 w-full' type="text" placeholder='Search here ...' />
        <i class="fa-solid fa-magnifying-glass ml-2"></i>
    </div>
  )
}
