// "use client"

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import Newsletter from "@/components/Newsletter"


import { Suspense, useContext, useEffect } from "react"
import Blog from "@/components/Blog"
import Image from "next/image"
import AboutUs from "@/components/AboutSection"
import Discover from "@/components/Discover"

const HomePage = async () => {

  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56">
        <Discover/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56">
        <AboutUs/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56 ">
      <h1 className='text-center text-4xl font-serif mb-3'>Featured Products</h1>
        <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
        </div>
        <Suspense fallback={"loading"}>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
        limit={4}
        showPagination={false}/>
        </Suspense>
      </div>
      <div className="mt-24">
      <h1 className='text-center text-4xl font-serif mb-3'>Categories</h1>
        <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
        </div>
        <Suspense fallback={"loading"}>
        <CategoryList/>
        </Suspense>
      </div>
      {/* <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56 ">
      <h1 className='text-center text-4xl font-serif mb-3'>All Products</h1>
        <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
        </div>
        <Suspense fallback={"loading"}>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
        limit={10}/>
        </Suspense>
      </div> */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56">
        <Blog/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56">
        <Newsletter/>
      </div>
      
    </div>
  )
}

export default HomePage