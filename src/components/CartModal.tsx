"use client"
import { useWixContext } from '@/hooks/useWixClient';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useCartStore } from '@/hooks/useCartStore';
import {media as WixMedia} from '@wix/sdk'

const CartModal = () => {

    const myWixClient = useWixContext()

    const {cart, isLoading , removeItem} = useCartStore();

  return (
    <div className='absolute p-4 rounded-md shadow-md bg-white right-0 top-12 flex flex-col gap-6 z-10 w-max'>
        {!cart.lineItems ? (
            <div>cart is empty</div>
        ):(
            // list
          <>
          <h2 className='text-xl'>Shopping cart</h2>
          <div className='flex flex-col gap-8'>
                {/* 1st */}
            {cart.lineItems.map((item)=> (
            <div className='flex gap-4' 
            key={item._id}>
               { item.image &&
                <Image src={WixMedia.getScaledToFillImageUrl(item.image,72,96,{})} 
                alt='image' 
                width={72} 
                height={96} 
                className='object-cover rounded-md'/>}
                <div className='flex flex-col justify-between w-full'>
                    {/* top */}
                    <div className=' '>
                    {/* title */}
                        <div className='flex items-center justify-between gap-8'>
                        <h3 className='font-semibold'>{item.productName?.original}</h3>
                        <div className='p-1 bg-gray-50 rounded-sm flex items-center justify-between'>
                            {item.quantity && item.quantity > 1 && <div className='text-xs text-primary mr-2'>{item.quantity} x </div>}ksh {item.price?.amount}
                            </div>
                        </div>
                    {/* desc */}
                    <div className='text-sm text-gray-500'>{item.availability?.status}</div>
                    </div>
                    {/* bottom */}
                    <div className='flex justify-between text-sm'>
                        <span className='text-gray-500'>Qty: {item.quantity}</span>
                        <span className='text-blue-500 '
                        style={{cursor: isLoading ? "not-allowed" : "pointer"}}
                         onClick={()=>removeItem(myWixClient,item._id!)}>Remove</span>
                    </div>
                </div>
            </div>))}
            </div>
            {/* bottom */}
            <div>
            <div className='flex items-center justify-between font-semibold'>
                <span>SubTotal</span>
                {/* <span>ksh {cart.subTotal.amount}</span> */}
            </div>
            <p>Shipping and Taxes calculated</p>
            <div className='flex justify-between text-sm mt-5'>
                <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
                <button className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed' disabled={isLoading}>Checkout</button>
            </div>
            </div>
             </>

        )}
    </div>
  )
}

export default CartModal