"use client"
import { useCartStore } from '@/hooks/useCartStore';
import { useWixContext } from '@/hooks/useWixClient';
import React, { useState } from 'react'

const Add = ({productId, variantId, stockNumber}:{productId:string; variantId:string; stockNumber:number}) => {

    const [quantity, setQuantity] = useState(1);

    // temp solution since we dont have backend stock

    // const stock = stockNumber;
    const handleQuantity = (type: "i" | "d") =>{
        if (type === "d" && quantity >1 ) {
            setQuantity((prev)=> prev-1)
        }
        if (type === "i" && quantity < stockNumber) {
            setQuantity((prev)=> prev+1)
        }
    }

    const myWixClient = useWixContext();
    const { addItem, isLoading } = useCartStore()

  return (
    <div className='flex flex-col gap-4 '>
        <h1 className='font-medium'>Choose A Quantity</h1>
        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
            <div className='flex items-center ga-4 bg-gray-100 py-2 px-4 rounded-2xl w-32 justify-between'>
            <button className='cursor-pointer text-xl' onClick={()=> handleQuantity("d")}>-</button>
            {quantity}
            <button className='cursor-pointer text-xl' onClick={()=> handleQuantity("i")}>+</button>
            </div>
            {stockNumber < 1?
             (
                <div className='text-xs'>Product is out of socks</div>
            ): (
                <div className='text-xs'>
                Only <span className='text-orange-500'>{stockNumber} items </span> left! 
                <br /> {"Don't"} miss it
            </div>
            ) }
            </div>

            <button
            onClick={()=>addItem(myWixClient,productId,variantId,quantity)}
             className='w-36 text-sm rounded-md ring-1 ring-primary text-primary py-2 px-4 hover:bg-primary hover:text-white disabled:bg-pink-200 disabled:text-white'
             disabled={isLoading}
             >Add to cart</button>
        </div>
    </div>
  )
}

export default Add