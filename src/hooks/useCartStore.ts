import { currentCart } from '@wix/ecom';
import { WixClient } from '@/context/wixContext';
import { create } from 'zustand'

type CartState = {
    cart: currentCart.Cart;
    isLoading: boolean;
    counter: number;
    getCart:(myWixClient:WixClient)=> void
    addItem: (myWixClient:WixClient,productId: string, variantId:string, quantity: number) => void;
    removeItem: (myWixClient:WixClient,itemId: string)=> void;
}


export const useCartStore = create<CartState>((set) => ({
    cart: [],
    isLoading: true,
    counter:0,
    getCart : async (myWixClient)=> {
      try {
        const cart = await myWixClient.currentCart.getCurrentCart();
        set({
          cart: cart || [],
          isLoading: false,
          counter: cart?.lineItems.length || 0,
        });
      } catch (err) {
        set((prev) => ({ ...prev, isLoading: false }));
      }
    },
    addItem : async (myWixClient, productId, variantId, quantity)=> {
      set((state)=>({...state, isLoading:true}))
      const response = await myWixClient.currentCart.addToCurrentCart(
        {
            lineItems: [
                {
                    catalogReference:{
                    appId:process.env.NEXT_PUBLIC_WIX_APP_ID!,
                    catalogItemId:productId,
                    ...(variantId && {options: {variantId}}),
                },
            quantity:quantity,
        }
            ]
        }
    );
    set({cart:response.cart, counter:response.cart?.lineItems.length, isLoading:false})
    },
    removeItem : async (myWixClient,itemId)=> {
      const response = await myWixClient.currentCart.removeLineItemsFromCurrentCart(
        [itemId]
    );
    set({cart:response.cart, counter:response.cart?.lineItems.length, isLoading:false})
    }

}))
