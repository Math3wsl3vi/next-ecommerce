import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='pb-10'>
        <h1 className='text-center text-4xl font-serif'>From Our Blog</h1>
        <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
      </div>
      <h1 className='text-center font-sans text-meow'>There are many variations of passages of lorem ipsum available</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-10'>
        <Link href={'/lathews'}>
        <div className='flex flex-col max-w-[400px] cursor-pointer hover:shadow-sm'>
       <div>
       <Image 
         src='/img30.jpg'
         alt='thing'
         width={400}
         height={30}
         className='mb-3'
        />
       </div>
       <div className='p-2 text-center'>
        <h4 className='text-[13px]'>Post by: <span className='text-meow'> Deborah Liberty</span></h4>
        <h1 className='font-medium font-sans'>Is Your plant plant planning to eat you?</h1>
        <p className='text-[13px] font-sans font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
       </div>
        </div>
        </Link>
       <Link href={'/liberty'}>
       <div className='flex flex-col max-w-[400px] cursor-pointer hover:shadow-sm'>
       <div>
       <Image 
         src='/img31.jpg'
         alt='thing'
         width={400}
         height={30}
         className='mb-3'
        />
       </div>
       <div className='p-2 text-center'>
        <h4 className='text-[13px]'>Post by: <span className='text-meow'>Mevi Lathews</span></h4>
        <h1 className='font-medium font-sans'>How to know if your plant moves at night</h1>
        <p className='text-[13px] font-sans font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
       </div>
        </div>
        </Link>
        <Link href={'/mathematics'}>
        <div className='flex flex-col max-w-[400px] cursor-pointer hover:shadow-sm'>
       <div>
       <Image 
         src='/img32.jpg'
         alt='thing'
         width={400}
         height={30}
         className='mb-3'
        />
       </div>
       <div className='p-2 text-center'>
        <h4 className='text-[13px]'>Post by: <span className='text-meow'> Levi Mathematics</span></h4>
        <h1 className='font-medium font-sans'>Studies show plants are not what they seem</h1>
        <p className='text-[13px] font-sans font-light'>Plants are plotting against us. Don’t trust their leafy smiles...”</p>
       </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Blog