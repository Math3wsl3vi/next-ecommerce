import { wixClientServer } from '@/lib/wixClientServer';
import { products } from '@wix/stores';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DOMPurify from 'isomorphic-dompurify'
import Pagination from './Pagination';


const PRODUCT_PER_PAGE = 10;

const ProductList = async ({
    categoryId,
    limit,
    searchParams,
  }: {
    categoryId: string;
    limit?: number;
    searchParams?: any;
  }) => {
    const myWixClient = await wixClientServer();
  
    const productQuery = myWixClient.products
      .queryProducts()
      .startsWith("name", searchParams?.name || "")
      .eq("collectionIds", categoryId)
    //   .hasSome("productType" , searchParams?.type || "") 
      .gt("priceData.price", searchParams?.min || 0)
      .lt("priceData.price", searchParams?.max || 999999)
      .limit(limit || PRODUCT_PER_PAGE)
      .skip(
        searchParams?.page
          ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
          : 0
      );
    // .find();
  
    if (searchParams?.sort) {
      const [sortType, sortBy] = searchParams.sort.split(" ");
  
      if (sortType === "asc") {
        productQuery.ascending(sortBy);
      }
      if (sortType === "desc") {
        productQuery.descending(sortBy);
      }
    }
  
    const res = await productQuery.find();

  
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-start flex-wrap'>
        {res.items.map((product:products.Product)=>(
        <Link href={'/'+ product.slug} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
        key={product._id}>
        <div className='relative w-full h-80'>
        <Image src={product.media?.mainMedia?.image?.url || "/product.png"} 
        fill 
        sizes='25vw' 
        alt='image' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        {product.media?.items && (<Image src={product.media?.items[1].image?.url || "/product.png"} 
        fill 
        sizes='25vw' 
        alt='image'
        className='absolute object-cover rounded-md'/>)}
        </div>
        <div className='flex justify-between'>
            <span className='font-semibold'>{product.name}</span>
            <span className='font-medium'>ksh {product.price?.price}</span>
        </div>
        <div className='flex justify-between'>
       { product.additionalInfoSections && (
        <div className='text-sm text-gray-500' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(
            product.additionalInfoSections?.find(
                (section: any)=>section.title === "shortDesc")?.description || ""
        ),
        }}></div>)}
        <button className='rounded-md ring-1 ring-gray-300 w-max text-primary py-2 px-3 hover:bg-primary hover:text-white'
        >Add To Cart</button>
        </div>
        </Link>
        ))}
        <Pagination currentPage={res.currentPage || 0} hasPrev={res.hasPrev()} hasNext={res.hasNext()}/>
    </div>
  )
}

export default ProductList