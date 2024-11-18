"use client"
import React, { useState } from 'react'
// import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from './../../../FirebaseConfig.js'
import { useRouter } from 'next/navigation'



const SignUp = () => {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [username, setUsername ] = useState('');
  const router = useRouter()



  const handleSignUp = () => {
    console.log('user signed up', {email, password})
  }

  const signUp = async () =>{
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response)
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, {
          displayName: username,
        });
      }
      alert('account created successfully')
      router.push('/')
    } catch (error) {
      console.log(error)
      alert('account creation failed')  
    }
  }

  return (
    <div className='md:mx-32 md:p-24 p-3 bg-slate-100 items-center flex justify-center flex-col relative my-10 overflow-hidden'>
        <div className='absolute -top-40 -left-[280px] hidden md:block '>
        <Image 
         src='/hero3.png'
         alt='thing'
         width={500}
         height={500}
         className='mb-5'
        />
        </div>
        <h1 className='text-2xl md:text-4xl font-serif my-4'>Welcome to Mauatitude</h1>
        <h1 className='text-2xl md:text-xl font-sans my-4 text-meow'>Sign Up To Continue</h1>
        <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
      </div>
      <div className='flex gap-4 flex-col w-[90%] md:w-1/2'>
      <div className='flex flex-col gap-2'>
        <input 
        type="text"
         name='name' 
         placeholder='Enter your Name' 
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         className='outline-none border border-gray-300 p-2 bg-transparent rounded-md'/>
      </div>
      <div className='flex flex-col gap-2'>
        <input 
        type="text" 
        name='name' 
        placeholder='Enter your Email' 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        className='outline-none border border-gray-300 p-2 bg-transparent rounded-md'/>
      </div>
      <div className='flex flex-col gap-2 relative'>
        <input 
        type="password" 
        name='name' 
        placeholder='Enter your Password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='outline-none border border-gray-300 p-2 bg-transparent rounded-md'/>
        <div className='absolute top-2.5 right-2 cursor-pointer font-sans text-meow text-sm'>Show</div>
      </div>
      <div>
        <p className='font-sans text-meow'>Already have an Account?<Link href='/Login'> <span className='font-medium text-primary cursor-pointer'>Login</span></Link></p>
      </div>
      <div className='flex justify-center' 
      onClick={()=> signUp()}>
        <button className='ring-1 ring-primary p-2 rounded-md text-primary hover:bg-primary hover:text-white'>Continue</button>
      </div>
      </div>
      <div className='absolute -bottom-40 -right-[130px] hidden md:block '>
        <Image 
         src='/hero.png'
         alt='thing'
         width={500}
         height={500}
         className='mb-5'
        />
        </div>
    </div>
  )
}

export default SignUp