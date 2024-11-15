import Add from '@/components/Add'
import CustomizeProduct from '@/components/CustomizeProduct'
import ProductImages from '@/components/ProductImages'
import { wixClientServer } from '@/lib/wixClientServer'
import { notFound } from 'next/navigation'
import React from 'react'

const SinglePage = async ({params}:{params: {slug: string}}) => {

  console.log(params.slug)

  const myWixClient = await wixClientServer();
  
  const products = await myWixClient.products.
  queryProducts()
  .eq("slug", params.slug)
  .find(); 

  if(!products.items[0]){
    return notFound();
  }

  const product = products.items[0];
  console.log(product.productOptions)

  return (
    <div className='px-5 md:px-8 lg:px-16 xl:px-32 2xl:px-56 relative flex flex-col lg:flex-row gap-16'>
      {/* image */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages items={product.media?.items}/>
      </div>
      {/* text */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
      <h1 className='text-xl font-medium'>{product.name}</h1>
      <p className='text-gray-500'>{product.description}</p>
      <div className='h-[2px] bg-gray-100'/>
      {/* price */}
      <div className='font-medium text-xl'>ksh {product.price?.price}</div>
      <div className='h-[2px] bg-gray-100'/>
      {product.variants && product.productOptions ? (
        <CustomizeProduct 
        productId={product._id!}
        variants={product.variants}
        productOptions={product.productOptions}
    />
      ):(
      <Add productId={product._id!} variantId="00000000-0000-0000-0000-000000000000" stockNumber={product.stock?.quantity || 0}/>
      )}
      
      <div className='h-[2px] bg-gray-100'/>
      {product.additionalInfoSections?.map((section: any)=>(
      <div className='text-sm' key={section.title}>
        <h4 className='font-medium'>{section.title}</h4>
        <p>{section.description}</p>
      </div>
      ))}
      <div className='text-sm'>
        <h4 className='font-medium'>ACTUAL RETURN POLICY</h4>
        <p>We forgot to look into about this so just bear with us.</p>
      </div>
      </div>
    </div>
  )
}

export default SinglePage