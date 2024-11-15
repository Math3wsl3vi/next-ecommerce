import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56 bg-gray-100 text-sm mt-24'>
      {/* top */}
      <div className='flex md:flex-row flex-col gap-24 justify-between'>
        {/* left */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
        <Link href={'/'}>
        <div className='text-2xl tracking-wide'>Mauatitude</div>
        </Link>
        <p>550 Lanet, Nakuru</p>
        <span className='font-semibold'>mauatitude@gmail.com</span>
        <span className='font-semibold'>0717271815</span>
        <div className='flex gap-6 '>
          <Image src={'/facebook.png'} alt='image' width={16} height={16}/>
          <Image src={'/instagram.png'} alt='image' width={16} height={16}/>
          <Image src={'/youtube.png'} alt='image' width={16} height={16}/>
          <Image src={'/pinterest.png'} alt='image' width={16} height={16}/>
          <Image src={'/x.png'} alt='image' width={16} height={16}/>
        </div>
        </div>
        {/* center */}
        <div className='w-2/4 hidden lg:flex justify-between'>
        {/* links */}
         <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-xl'>COMPANY</h1>
          <div className='flex flex-col gap-6'>
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Career</Link>
            <Link href={'/'}>Affiliates</Link>
            <Link href={'/'}>Blog</Link>
            <Link href={'/'}>Conatact Us</Link>
          </div>
         </div>
         {/* links */}
         <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-xl'>INFO</h1>
          <div className='flex flex-col gap-6'>
            <Link href={'/'}>Terms and Conditions</Link>
            <Link href={'/'}>Privacy Policy</Link>
            <Link href={'/'}>Biscuit Policy</Link>
            <Link href={'/'}>FAQ's</Link>
            <Link href={'/'}>Conatact Us</Link>
          </div>
         </div>
         {/* links */}
         <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-xl'>COMPANY</h1>
          <div className='flex flex-col gap-6'>
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Career</Link>
            <Link href={'/'}>Affiliates</Link>
            <Link href={'/'}>Blog</Link>
            <Link href={'/'}>Conatact Us</Link>
          </div>
         </div>
        </div>
        {/* right */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
        <h1>Subscribe</h1>
        <p>Be the first to hear from us about the latest news and promotions</p>
        <div className='flex'>
          <input type="text" placeholder='Email Address' 
          className='p-4 w-3/4'/>
          <button className='w-1/4 bg-primary text-white'>JOIN</button>
        </div>
        <span>Secure Payments</span>
        <div className='flex flex-row gap-12'>
          <Image src={'/mpesa.png'} alt='image' width={50} height={50} className='cursor-pointer'/>
          <Image src={'/discover.png'} alt='image' width={40} height={40} className='cursor-pointer'/>
          <Image src={'/skrill.png'} alt='image' width={40} height={40} className='cursor-pointer'/>
          <Image src={'/paypal.png'} alt='image' width={40} height={40} className='cursor-pointer'/>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className='text-center mt-20'>
        <h1>Copyright 2024 Mauatitude by Mantle Networks</h1>
      </div>
    </div>
  )
}

export default Footer