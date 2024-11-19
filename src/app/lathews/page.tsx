import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-row gap-10'>
    <div className='hidden md:flex w-1/4'>

    </div>
    <div className='w-full md:w-3/4 p-10 flex gap-10 flex-col'>
        <div>
        <h1 className='text-primary text-2xl mb-5'>Is Your Plant Planning to Eat You? Signs Your Green Friend Might Be a Little Too Ambitious</h1>
        <p className='text-lg'>Houseplants: the quiet companions that brighten your room, purify your air, and occasionally leave you wondering, “What if it’s plotting against me?” If you’ve ever stared at your cactus a little too long and thought, “This thing has some real villain vibes,” don’t worry—you’re not alone.
        Let’s dive into the hilarious, totally exaggerated (but also slightly concerning) world of whether your leafy roommate might secretly want to snack on you.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10 w-full'>
            <div className='w-full md:w-1/3'>
                <Image 
                    src={'/img30.jpg'}
                    alt='image' 
                    width={400}
                    height={30}
                />
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-4'>
                <h1 className='text-xl text-primary'>The Staring Contest</h1>
                <p className='text-lg'>Ever feel like your plant is watching you? Sure, it doesn’t have eyes (that we know of), but don’t pretend those little cactus spikes don’t look like they’re bristling in silent judgment. You miss one watering session, and suddenly it’s giving you The Look. Is it plotting? Maybe. Is it just a plant? Probably. But let’s not rule out the possibility of revenge.</p>
                <h1 className='text-xl text-primary'>The Suspicious Growth Spurt</h1>
                <p className='text-lg'>Remember that innocent little aloe vera you bought last month? Well, now it’s twice its size and leaning ominously toward your desk. Coincidence? Or is it positioning itself to lunge when you least expect it? You tell me. Any plant that grows that fast must be hiding something.</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10 w-full'>
            <div className='w-full md:w-2/3 flex flex-col gap-4'>
                <h1 className='text-xl text-primary'> Venus Flytrap: The OG Villain</h1>
                <p className='text-lg'>
                Now, if you’ve got a Venus flytrap, you’re basically living with a tiny green mafia boss. Sure, it starts small, eating bugs and minding its business. But don’t get too comfortable. First, it eats flies; next, it’s eyeing your fingers. Drop one Cheeto too close to its jaws, and you’re playing a dangerous game of Who’s the Apex Predator?</p>

                <h1 className='text-xl text-primary'>Cactus: Nature’s Porcupine</h1>
                <p className='text-lg'>
                Let’s talk about cacti for a second. These spiky little drama queens look like they belong in an action movie. “Don’t touch me, or I’ll stab you,” is basically their whole personality. And honestly? Respect. But have you noticed how they just… sit there? Watching. Waiting. Who are they texting with all those antenna-like needles? Big Cactus? We may never know.</p>
            </div>
            <div className='w-full md:w-1/3'>
                <Image 
                    src={'/img30.jpg'}
                    alt='image' 
                    width={400}
                    height={30}
                />
            </div>
        </div>
        <div>
            <h1 className='text-2xl text-primary'>Final Thoughts: Should You Sleep with One Eye Open?</h1>
            <p className='text-xl'>Honestly? No. Your plant isn’t plotting your demise. It doesn’t have the brainpower—or the Wi-Fi—to organize a revolt. But it is silently judging you for forgetting to water it or, worse, overwatering it like an overzealous helicopter parent.

            So go ahead, give your cactus a little side-eye, apologize to your neglected fern, and maybe steer clear of any plant named “Audrey II.” Because while your green pals aren’t trying to eat you (probably), they sure do make for some hilarious, slightly sinister company.

            Stay safe out there, and remember: keep your friends close, but your houseplants closer. They might be on your side—or just really good at pretending.</p> 🌵</div>
    </div>
    </div>
  )
}

export default page