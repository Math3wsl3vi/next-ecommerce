import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import dynamic from 'next/dynamic'
// import NavabarIcons from './NavabarIcons'

const NavabarIcons = dynamic(()=>import("./NavabarIcons"), {ssr: false})

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56 relative'>
      <div className='md:hidden flex justify-between items-center h-full'> 
      {/* Mobile */}
      <Link href={'/'}>
      <div className='text-2xl tracking-wide'>Mauatitude</div>
      </Link>
      <Menu/>
      </div>
      {/* bigger */}
      <div className='hidden md:flex items-center h-full justify-between gap-8'>
        {/* left */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
        <Link href={'/'} className='flex items-center gap-3'>
        <Image src={'/logo2.png'} alt='logo' width={80} height={80}/>
      <div className='text-xl tracking-wide'>Mauatitude</div>
      </Link>
      <div className='hidden xl:flex gap-5'>
            <Link href={'/'}>Home</Link>
            <Link href={'/list'}>Shop</Link>
            <Link href={'/'}>Deals</Link>
            <Link href={'/'}>About</Link>
      </div>
        </div>
        {/* right */}
        <div className='w-2/3 flex items-center justify-between gap-8 xl:w-1/2'>
        <SearchBar/>
        <NavabarIcons/>
        </div>
      </div>
    </div>
  )
}

export default Navbar