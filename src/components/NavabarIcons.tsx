"use client"
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CartModal from './CartModal';
import { useWixContext } from '@/hooks/useWixClient';
import { useCartStore } from '@/hooks/useCartStore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';



const NavabarIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [isLoading, setIsLoading ] = useState(false);
    const [isLoggedIn, setIsLoggedIn ] = useState(false);

    const pathName = usePathname()

    // const auth = getAuth();
    const router = useRouter();
    const myWixClient = useWixContext();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      setIsLoggedIn(!!user);
      if (user) {
        console.log('user is signed in', user)
      }else {
        console.log('not signed in')
      }
    })
    return () => unsubscribe()
  },[auth])


    const handleProfile = ()=>{
        if(!isLoggedIn){
        router.push('/login')
     } else
     {
    setIsProfileOpen((prev)=> !prev)
    }
    }

    const handleLogout = async ()=>{
      setIsLoading(true)
      try {
        await signOut(auth);
        alert('successfully logged out')
        setIsProfileOpen(false);
        router.push('/')
      } catch (error) {
        console.log('Error logging out', error)
      }finally{
        setIsLoading(false)
      }
     } 
    const {cart, getCart, counter } = useCartStore();

    useEffect(()=>{
        getCart(myWixClient);
    },[myWixClient, getCart])

    // console.log(cart)

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
        <Image src={'/profile.png'} alt='icon' width={22} height={22} className='cursor-pointer' onClick={handleProfile}/>
        {/* {isProfileOpen &&
        <div className='absolute p-4 rounded-md text-sm top-12 left-0 z-20 shadow-md'>
            <Link href={'/'} >Profile</Link>
            <div className='cursor-pointer mt-2' onClick={handleLogout}>{isLoading ? "Logging out" : "Logout"}</div>
        </div>} */}

        {isProfileOpen && (
        <div
          className="absolute p-4 rounded-md text-sm top-12 left-0 z-20 shadow-md bg-white"
          onClick={(e) => e.stopPropagation()} // Prevent clicks from closing modal
        >
          <Link href={'/'}>Profile</Link>
          <div className="cursor-pointer mt-2" onClick={handleLogout}>
            {isLoading ? 'Logging out...' : 'Logout'}
          </div>
        </div>
      )}
        <Image src={'/notification.png'} alt='icon' width={22} height={22} className='cursor-pointer' />
        
        <div className='relative cursor-pointer' onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image src={'/cart.png'} alt='icon' width={22} height={22} className='cursor-pointer' />
        <div className='absolute -top-4 -right-3 w-6 h-6 bg-primary flex items-center justify-center rounded-full text-white'>{counter}</div>
        </div>

        {isCartOpen && (
            <CartModal/>
           )}
    </div>
  )
}

export default NavabarIcons


