import { wixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { collections } from "@wix/stores";

const CategoryList = async () => {

   const myWixClient = await wixClientServer()
   const cats = await myWixClient.collections.queryCollections().find()
  return (
    <div className='px-4  lg:px-52 overflow-x-scroll scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            {/* link */}
            {cats.items.map((item)=> (
                <Link href={`/list?cat=${item.slug}`} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                key={item?._id}
                >
                <div className='relative bg-slate-100 w-full h-60'>
                <Image src={item.media?.mainMedia?.image?.url || "/cat.png"} 
                 alt='image'
                 fill
                 sizes='20vw'
                 className='object-cover'
                    />
                </div>
                <h1 className='mt-8 font-light text-lg tracking-wide'>{item.name}</h1>
             </Link>
            ))
             }
        </div>
    </div>
  )
}

export default CategoryList