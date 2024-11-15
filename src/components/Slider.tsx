"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const slides = [
    {
        id:1,
        title: "House plant collections",
        img: require('./../../public/hero.png'),
        url: '/',
        bg: 'bg-gradient-to-r from-green-50 to-slate-50'
    },
    {
        id:2,
        title: "Outdoor plant collections",
        img: require('./../../public/hero2.png'),
        url: '/',
        bg: 'bg-gradient-to-r from-green-50 to-slate-50'
    },
    {
        id:3,
        title: "Terrarium collections",
        img: require('./../../public/hero3.png'),
        url: '/',
        bg: 'bg-gradient-to-r from-green-50 to-slate-50'
    },
]

const Slider = () => {
    const [current, setCurrent ] = useState(0)

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setCurrent(prev => (prev === slides.length-1 ? 0 : prev+1))
    //     }, 5000)

    //     return () => clearInterval(interval);
    // },[])
  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
        <div className='w-max h-full flex transition-all ease-in-out duration-1000'
        style={{transform: `translateX(-${current * 100}vw)`}}
        >
            {slides.map((slide)=>(
                <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                {/* text */}
                <div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12'>
                    <h2 className='text-3xl pl-10 lg:text-6xl 2xl:text-8xl'>{slide.title}</h2>
                    <Link href={slide.url}><button className='rounded-md bg-black text-white py-3 px-4'>SHOP NOW</button></Link>
                </div>
                {/* img */}
                <div className='h-1/2 xl:w-1/2 xl:h-full relative'>
                    <Image src={slide.img} fill sizes='100%' alt='image' className='object-cover'/>
                </div>
                </div>
            ))}
        </div>
        <div className='absolute m-auto left-1/2 bottom-8 gap-4 flex'>
        {
            slides.map((slide, index)=>(
                <div key={index} className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""} `}
                onClick={()=> setCurrent(index)}>
                    {current === index && (<div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>)}
                </div>
            ))
        }
        </div>
        
    </div>
  )
}

export default Slider