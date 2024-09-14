import { useMemo } from 'react';

const useCalculateCart = (items) => {
  const calculateSubtotal = (item) => {
    return parseFloat(item.price * item.quantity); // Calcular el subtotal
  };

  const totalCart = useMemo(() => {
    return items.reduce((total, item) => {
      return total + calculateSubtotal(item);
    }, 0);
  }, [items]);
  const countCart=useMemo(()=> {
    return items.reduce((count,item) =>{
      return count+item.quantity
    },0 )
  })

  return { calculateSubtotal, totalCart ,countCart};
};

export default useCalculateCart;