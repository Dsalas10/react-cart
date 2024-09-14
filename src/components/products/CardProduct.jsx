// import { useCart } from "../Context/CartContext";
import useCart2 from "../Hooks/useCart2";
const CardProduct = ({ product, showAddToCartButton }) => {
  // const { addToCart } = useCart();
  const addToCart = useCart2((state) => state.addToCart); //con la biblioteca zustand

  const handleAddToCart = () => {
    addToCart(product); // Agregar el producto al carrito
    console.log("Producto agregado:", product);
  };
  return (
    <div className="box">
      <div className="box-img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="box-body mt-3">
        <h4>Categoria</h4>
        <h5 className="fs-2">{product.name}</h5>
        <h6 className="fs-3">{product.descripcion}</h6>
        <p className="fs-3">${product.price}</p>
      </div>

      {showAddToCartButton && (
        <div className="card-footer">
          <button className="btn-" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default CardProduct;
