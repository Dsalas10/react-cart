import { createContext, useContext, useState } from "react";

//crear contexto
export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updateCart = [...cart];
      updateCart[existingItemIndex].quantity += quantity;
      setCart(updateCart);
      console.log("producto ya existe , aumentando quantity:", updateCart); // Mostrar el producto que se está agregando
    } else {
      const newItem = { ...product, quantity };
      setCart((prevCart) => [...prevCart, newItem]);
      console.log("Agregando al carrito:", product); // Mostrar el producto que se está agregando
    }
  };

  const removeFromCart = (itemID) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemID));
  };

  const incrementQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("cart no esta envuelto en un provider");
  }
  return context;
};
