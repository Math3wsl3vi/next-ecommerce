"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Pagination = ({currentPage, hasNext, hasPrev}:{currentPage:number; hasNext:boolean; hasPrev:boolean}) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber: number)=>{
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString())
        replace(`${pathname}? ${params.toString()}`)

    }
  return (
    <div className='mt-12 flex w-full justify-end gap-8'>
        <button className='rounded-md bg-primary text-white text-sm w-20 p-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200' disabled={!hasPrev}
        onClick={()=> createPageUrl(currentPage-1)}
        >
            Previous
        </button>
        <button className='rounded-md bg-primary text-white text-sm w-20 p-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200' disabled={!hasNext}
        onClick={()=> createPageUrl(currentPage+1)}
        >
            Next
        </button>
    </div>
  )
}

export default Pagination