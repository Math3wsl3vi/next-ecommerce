import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-row gap-10'>
    <div className='hidden md:flex w-1/4'>

    </div>
    <div className='w-full md:w-3/4 p-10 flex gap-10 flex-col'>
        <div>
        <h1 className='text-primary text-2xl mb-5'>Studies Show Plants Are Not What They Seem</h1>
        <p className='text-lg'>“Plants are plotting against us. Don’t trust their leafy smiles.”

            We’ve always thought of plants as chill, passive housemates. You water them occasionally, talk to them when you’re lonely, and they vibe silently in their pots. But science now says they’re far sneakier than we ever imagined. Turns out, plants are basically the drama queens of the natural world—always scheming, communicating, and plotting world domination.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10 w-full'>
            <div className='w-full md:w-1/3'>
                <Image 
                    src={'/img32.jpg'}
                    alt='image' 
                    width={400}
                    height={30}
                />
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-4'>
                <h1 className='text-xl text-primary'>Plants Are Gossip Kings</h1>
                <p className='text-lg'>Remember when you thought your cactus was just vibing on your desk? Wrong. It’s spilling tea about you to the succulents on the windowsill. Researchers have discovered plants send chemical signals to warn their leafy buddies about pests, drought, or, I don’t know, that you’ve started playing Taylor Swift again. Your ficus might be quietly screaming to the fern, “Help! She’s singing ‘Anti-Hero’ at me again!”</p>
                <h1 className='text-xl text-primary'>Roots Are Basically Wi-Fi Hotspots</h1>
                <p className='text-lg'>Underneath the soil, plants are connected by a secret fungal internet called the “wood wide web.” They use this underground network to share resources, nutrients, and, presumably, memes about humans overwatering them. It’s like plants have their own group chat, but instead of texting, they’re just like, “Hey, bro, I’m low on nitrogen. Can you spot me some?”</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10 w-full'>
            <div className='w-full md:w-2/3 flex flex-col gap-4'>
                <h1 className='text-xl text-primary'> Plants Can Hear You, So Be Nice</h1>
                <p className='text-lg'>
                If you’ve ever yelled at your pothos for not growing, it heard you. Studies show plants can detect sound vibrations, like the gentle buzz of a bee or your neighbor’s leaf blower at 7 a.m. They probably judge your taste in music too. “Oh, Coldplay again? I guess I’ll die.”</p>

                <h1 className='text-xl text-primary'>Plant Intelligence: Smarter Than They Look</h1>
                <p className='text-lg'>
                You’d think plants are simpletons, right? No brain, no worries? Wrong again. Some climbing plants have shown they can “choose” the best path to grow based on their surroundings. They’re out here making life decisions while I can’t even decide what to eat for lunch. What’s next? Plants taking the SATs?</p>
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
            <h1 className='text-2xl text-primary'>Conclusion: Trust No Plant</h1>
            <p className='text-xl'>Plants are more than just pretty décor—they’re active, conniving, and probably plotting your downfall. But hey, they make oxygen, so we kind of owe them. Just remember: next time your orchid refuses to bloom, it’s not lazy. It’s judging you.

                So go ahead, keep watering your “innocent” little plants. Just know that in the grand scheme of things, they might be the ones running the show.</p> 🌵</div>
    </div>
    </div>
  )
}

export default page