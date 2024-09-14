import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useCart2 from "../Hooks/useCart2";
import "./cartDropdown.css";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  // Usa el hook de Zustand para obtener los valores necesarios
  const cart = useCart2((state) => state.cart);
  const countCart = useCart2((state) => state.countCart());
  const cartotal = useCart2((state) => state.totalCart());
  const removeCart = useCart2((state) => state.removeCart);

  const handleRemoveItem = (itemId, event) => {
    event.preventDefault();
    removeCart(itemId);
  };
  const handleVerCarrito = (event) => {
    event.preventDefault();

    navigate("/carrito");
  };
  const handleFinalizarCompra = (event) => {
    event.preventDefault();

    navigate("/pago");
  };
  const handleIconClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-icon">
        <span>CARRITO / </span>
        <span> BS.{cartotal}</span>
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <span className="cart-count">{countCart}</span>
      </div>
      <div className="cart-dropdown-content" onClick={handleIconClick}>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <span className="name">{item.name} </span>
                <span className="quantity"> x {item.quantity}</span>
              </div>
              <button
                className="remove"
                onClick={(event) => handleRemoveItem(item.id, event)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          ))}
        </ul>
        <div className="cart-footer">
          <button className="view-cart-btn" onClick={handleVerCarrito}>
            VER CARRITO
          </button>
          <button className="checkout-btn" onClick={handleFinalizarCompra}>
            Finalizar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
