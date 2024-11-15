"use client"
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


const Filter = () => {

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter();

  const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=>{
    const {name, value} = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value)
    replace(`${pathname}? ${params.toString()}`)
  }
  return (
    <div className='mt-12 flex justify-center md:justify-end gap-8 '>
      <div>
        <input
        type='text'
        name='min'
        placeholder='min-price'
        className='text-xs rounded-md p-2 w-24 ring-1 ring-gray-400 outline-none hidden md:block'
        // onChange={handleFilterChange} 
        />
      </div>
      <div>
        <input
        type='text'
        name='max'
        placeholder='max-price'
        className='text-xs rounded-md p-2 w-24 ring-1 ring-gray-400 outline-none hidden md:block'
        // onChange={handleFilterChange}
        />
      </div>
      <div className='flex gap-6'>
        <select name="cat" className='py-2 px-4 rounded-md text-xs font-medium bg-gray-100 outline-none cursor-pointer hidden md:block' id=""
        // onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="Indoor Plants">Indoor</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Terrarium">Terrarium</option>
          {/* <option value="Vases">Vases</option> */}

        </select>
      </div>
      <div>
      <select name="type" className='py-2 px-4 rounded-md text-xs font-medium bg-gray-100 outline-none cursor-pointer hidden md:block' id=""
        // onChange={handleFilterChange}
        >
          <option>Sort by</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>

    </div>
  )
}

export default Filter