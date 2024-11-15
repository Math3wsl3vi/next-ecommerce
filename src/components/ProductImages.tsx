"use client"
import Image from 'next/image'
import React, { useState } from 'react'


// const images =[
//   {
//     id:1,
//     url: 'https://images.pexels.com/photos/28948702/pexels-photo-28948702/free-photo-of-reflection-of-historic-cathedral-in-puddle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
//   },
//   {
//     id:2,
//     url: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   {
//     id:3,
//     url: 'https://images.pexels.com/photos/2076494/pexels-photo-2076494.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   {
//     id:4,
//     // url: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=600'
//     url: 'https://www.mauatitude.co.ke/_next/image?url=%2Fimg03.jpg&w=256&q=75'

//   },
// ]

const ProductImages = ({items}:{items: any}) => {

  const [index, setIndex] = useState(0);
  return (
    <div className=''>
      {/* top */}
      <div className='h-[500px] relative'>
        <Image src={items[index].image?.url}
        alt='image'
        fill
        sizes='50vw'
        className='object-cover rounded-md'
        />
      </div>
      {/* bottom */}
      <div className='flex justify-start gap-4 mt-8'>
      {items.map((item: any, i:number)=>(
        <div className='w-1/4 h-32 relative gap-2 mt-8 cursor-pointer' 
        key={item.id}
        onClick={()=> setIndex(i)}>
          <Image
          src={item.image?.url}
          alt='images'
          fill
          sizes='30vw'
          className='object-cover rounded-md'
          />
        </div>
      ))}
        </div>
        
      </div>
  )
}

export default ProductImages