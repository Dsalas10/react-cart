// import { useState } from "react";

import {create} from "zustand"

//utilizando zustand para manejo de estado global
const useCart2 =create((set) => {
    return ({
        cart: [],
        // addToCart: (product, quantity = 1) => set(state => ({
        //     cart: state.cart.some(item => item.id === product.id)
        //       ? state.cart.map(item => item.id === product.id
        //         ? { ...item, quantity: item.quantity + quantity }
        //         : item)
        //       : [...state.cart, { ...product, quantity }]
        //   })),
        addToCart: (product, quantity = 1) => set(state => {
            const existItemIndex = state.cart.findIndex(item => item.id === product.id);        
            if (existItemIndex !== -1) {
              const updateCart = [...state.cart];
              updateCart[existItemIndex].quantity += quantity;
              return { cart: updateCart };
            } else {
              const newItem = { ...product, quantity };
              return { cart: [...state.cart, newItem] };
            }
          }),
        incrementQuantity: (itemId) => set((state) => ({
            cart: state.cart.map((item) => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            ),
        })),
        decrementQuantity: (itemID) => set((state) => ({
            cart: state.cart.map((item) => item.id === itemID ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item)
        })),
        removeCart:(itemID)=> set((state)=> ({
            cart:state.cart.filter(item =>  item.id !==itemID)
        })),
        calculateSubtotal: (item) => {
            return parseFloat(item.price * item.quantity);
          },
        totalCart:()=>{
           // Obtener el estado actual para calcular el total
            const { cart, calculateSubtotal } = useCart2.getState();
            return cart.reduce((total, item) => {
            return total + calculateSubtotal(item);
            }, 0);
        },
        countCart:()=>{
          const{cart} =useCart2.getState();
          return cart.reduce((count,item)=>{
            return count + item.quantity
          },0)
        }
      
    });
});


export default useCart2