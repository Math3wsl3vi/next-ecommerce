import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-row gap-10'>
    <div className='w-1/4 hidden md:flex'>

    </div>
    <div className='w-full md:w-3/4 p-10 flex gap-10 flex-col '>
        <div>
        <h1 className='text-primary text-2xl mb-5'>How to Know If Your Plant Moves at Night (And What to Do About It)</h1>
        <p className='text-lg'>You’re lying in bed, scrolling your phone, and suddenly, a thought creeps into your mind: What if my plant is sneaking around the house while I’m asleep? Maybe you heard a rustle. Maybe your cactus looks just a little closer to the door than it did this morning. Whatever it is, you’re now suspicious. Welcome to the club, my friend. Here’s how to tell if your leafy roommate is moonlighting as a secret agent—or just plotting its escape.
            </p>
        </div>
        <div className='flex flex-col md:flex-row gap-10 w-full'>
            <div className='md:w-1/3'>
                <Image 
                    src={'/img31.jpg'}
                    alt='image' 
                    width={400}
                    height={30}
                />
            </div>
            <div className='md:w-2/3 flex flex-col gap-4'>
                <h1 className='text-xl text-primary'> The Pot Shuffle</h1>
                <p className='text-lg'>First clue: Is your plant’s pot not where you left it? Sure, you could blame it on the cat or your clumsy roommate, but why jump to boring conclusions? Plants are sneaky creatures, and nighttime is their playground. If your aloe vera is suddenly closer to the Wi-Fi router, maybe it’s just trying to stream Netflix. Or worse, upload your secrets.</p>
                <h1 className='text-xl text-primary'>Leaf Positioning: The Silent Clue</h1>
                <p className='text-lg'>You’ve probably heard of plants doing “photosynthesis.” But did you know some plants move their leaves at night? Scientists call this nyctinasty, but let’s call it what it is: suspicious behavior. If your fern looks extra smug in the morning, it might’ve spent the night flexing its leaves to assert dominance.</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10 w-full'>
            <div className='md:w-2/3 flex flex-col gap-4'>
                <h1 className='text-xl text-primary'> Caught on Camera</h1>
                <p className='text-lg'>
                Here’s your ultimate weapon: a motion-activated camera. Set it up, go to sleep, and let the magic happen. If you wake up to footage of your pothos army-crawling across the kitchen floor, congrats—you’ve got proof. If not, well, at least you’ll know your paranoia is still under control.</p>

                <h1 className='text-xl text-primary'>Mysterious Messes</h1>
                <p className='text-lg'>
                Did you find soil in places it shouldn’t be? Are leaves scattered on the floor like some kind of plant crime scene? Before you blame gravity, consider this: your fiddle leaf fig could be staging a dramatic escape attempt—or hosting an underground plant rave.</p>
            </div>
            <div className='md:w-1/3'>
                <Image 
                    src={'/cactus.jpg'}
                    alt='image' 
                    width={400}
                    height={30}
                />
            </div>
        </div>
        <div>
            <h1>What to Do If Your Plant Is Moving</h1>
            <p>So, what now? You’ve got a mobile plant on your hands. Here’s how to handle it:</p>
            <ul>
                <li>Reassure It: Tell your plant you’re cool with its nighttime adventures. Sometimes they just need validation.</li>
                <li>Lock the Doors: You wouldn’t want your ficus sneaking off to start a new life.</li>
                <li>Start Charging Rent: If your plant wants to live like a roommate, it might as well pay its share.</li>
            </ul>
        </div>
        <div>
            <h1 className='text-2xl text-primary'>Final Thoughts</h1>
            <p className='text-xl'>The truth is, most plants don’t move much at night—unless they’re part of a highly organized botanical rebellion. So relax, water your leafy friends, and maybe give them a little pep talk before bed. Because whether they’re dancing, plotting, or just chilling, one thing’s for sure: plants are way more interesting than we give them credit for.And hey, if your cactus does make it to the fridge for a midnight snack, make sure it doesn’t finish your leftovers. That’s just rude. 🌱</p> 🌵</div>
    </div>
    </div>
  )
}

export default page