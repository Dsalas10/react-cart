import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const UseCart = () => {

    const context =useContext(CartContext)

    if(context ===undefined){
        throw new Error ("cart no esta envuelto en un provider")
    }
  return context
}

export default UseCart;
