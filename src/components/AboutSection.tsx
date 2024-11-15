import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row md:justify-around mx-5 md:mx-32 mt-10'>
        <div className='w-full md:w-1/2'>
            <Image
            src='/about1.jpg'
            alt='about'
            width={600}
            height={604}
            />
        </div>
        <div className='w-full md:w-1/2 mt-10'>
            <h1 className='text-3xl font-semibold font-serif'>Why Choose us?</h1>
            <hr  className='w-32 mt-2 mb-5'/>
            <p className='text-[14px] text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Porro voluptatibus quo iste nihil impedit, ipsa nostrum, reprehenderit magnam sint dolore vero facilis aut aliquam quidem neque aliquid eos soluta quae... <span className='text-primary'>Learn more</span> </p>
            <div className='flex flex-row gap-10 md:gap-3 items-center mb-10 mt-10'>
                <div>
                <Image
                    src='/alocasia.png'
                    alt='about'
                    width={70}
                    height={70}
                />
                </div>
                <div>
                    <h1 className='font-medium'>Hand Planted</h1>
                    <p className='text-meow'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>
            <div className='flex flex-row gap-10 md:gap-3 items-center mb-10'>
                <div>
                <Image
                    src='/spider-plant.png'
                    alt='about'
                    width={70}
                    height={70}
                />
                </div>
                <div>
                    <h1 className='font-medium'>Eco-Friendly Solutions</h1>
                    <p className='text-meow'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>
            <div className='flex flex-row gap-10 md:gap-3 items-center'>
                <div>
                <Image
                    src='/monstera.png'
                    alt='about'
                    width={70}
                    height={70}
                />
                </div>
                <div>
                    <h1 className='font-medium'>Natural Sunlight</h1>
                    <p className='text-meow'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs