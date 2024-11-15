import React from 'react'
// import Button from './Button'
import Image from 'next/image'

const Discover = () => {
  return (
    <div className='flex flex-col gap-10 my-10'>
        <div className='flex flex-row justify-center gap-5'>
            <div className='text-right'>
                <h1 className='font-medium font-sans mb-3'>Discover <span className='text-primary text-2xl'>____</span> </h1>
                <h2 className='font-serif text-5xl'>Indoor Plants</h2>
                <p className='text-[15px] font-light font-sans my-5 text-meow'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
                <div className='my-10'>
                <button>View Now</button>
                </div>
            </div>
            <div className="relative cursor-pointer">
                {/* First image that should be on top */}
                <div className="relative z-50 border border-gray-400 bg-white">
                    <Image
                    src="/img36.jpg"
                    alt="image"
                    width={400}
                    height={400}
                    />
                </div>

                {/* Second image that should be below */}
                <div className="absolute -top-3 -right-3 z-0 bg-white">
                    <Image
                    src="/b-bdr.png"
                    alt="image"
                    width={100}
                    height={100}
                    />
                </div>
                </div>
        </div>
        <div className='flex flex-row-reverse justify-center gap-5'>
            <div className='text-left'>
                <h1 className='font-medium font-sans mb-3'><span className='text-primary text-2xl'>____</span> Discover </h1>
                <h2 className='font-serif text-5xl'>Outdoor Plants</h2>
                <p className='text-[15px] font-light font-sans my-5 text-meow'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
                <div className='my-10'>
                <button>View Now</button>
                </div>
            </div>
            <div className="relative cursor-pointer">
                {/* First image that should be on top */}
                <div className="relative z-50 border border-gray-400 bg-white">
                    <Image
                    src="/img37.jpg"
                    alt="image"
                    width={400}
                    height={400}
                    />
                </div>

                {/* Second image that should be below */}
                <div className="absolute -top-3 -left-3 z-0 bg-white">
                    <Image
                    src="/b-bdr.png"
                    alt="image"
                    width={100}
                    height={100}
                    />
                </div>
                </div>
        </div>
    </div>
  )
}

export default Discover