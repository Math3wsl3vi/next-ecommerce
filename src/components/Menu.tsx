"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {

    const [open, setOpen] = useState(false)
    const handleClose: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
      setOpen(false);
    };
  return (
    <div className='overflow-hidden z-50'>
        <Image src={'/menu.png'} alt='menu' width={28} height={28} className='cursor-pointer' onClick={()=> setOpen((prev) => !prev)}/>
        {open && (
            <div className=' absolute overflow-hidden bg-green-50 text-black left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                <Image src={'/hero3.png'} alt='image' width={250} height={250} className='absolute -top-16 -right-12'/>
                <Link href={'/'} onClick={handleClose}>Home</Link>
                <Link href={'/list'} onClick={handleClose}>Shop</Link>
                <Link href={'/'} onClick={handleClose}>Deals</Link>
                <Link href={'/'} onClick={handleClose}>About</Link>
                <Link href={'/'} onClick={handleClose}>Logout</Link>
                <Link href={'/'} onClick={handleClose}>Cart</Link>
                <Image src={'/hero3.png'} alt='image' width={250} height={250} className='absolute -bottom-12 -left-40'/>


            </div>
        )}
    </div>
  )
}

export default Menu