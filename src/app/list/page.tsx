import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { wixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import React, { Suspense } from 'react'


const ListPage = async ({searchParams}:{searchParams: any}) => {

  const myWixClient = await wixClientServer();
  const cat = await myWixClient.collections.getCollectionBySlug(searchParams.cat || "all-products")
  console.log(cat)

  // console.log(searchParams)
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56'>
      {/* campaign */}
      <div className='bg-green-50 p-4 justify-between h-64 hidden sm:flex'>
        <div className='w-2/3 p-5'>
        <h1 className='font-semibold text-4xl leading-[48px] text-gray-700'>House Plants for everyone</h1>
        </div>
        <div className='w-1/3 relative'>
        <Image src={'/hero3.png'} fill sizes='' alt='image' className='object-cover'/>
        </div>
      </div>
      {/* filter */}
      <Filter/>
      {/* products */}
      <h1 className='text-xl font-semibold'>Flowers for you!</h1>
      <Suspense fallback={"loading"}>
      <ProductList categoryId={cat.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams}/>
      </Suspense>
    </div>
  )
}

export default ListPage