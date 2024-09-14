import "./cart.css";
import useCart2 from "../Hooks/useCart2";
import { useState } from "react";
import { Link } from "react-router-dom";
function Cart() {
  //utilizando zustand para el estado global
  const {
    cart: cartItems,
    incrementQuantity,
    decrementQuantity,
    removeCart,
    calculateSubtotal,
    totalCart,
  } = useCart2((state) => ({
    cart: state.cart,
    incrementQuantity: state.incrementQuantity,
    decrementQuantity: state.decrementQuantity,
    removeCart: state.removeCart,
    calculateSubtotal: state.calculateSubtotal,
    totalCart: state.totalCart,
  }));
  const handleIncreaseQuantity = (itemId) => {
    console.log("Increase quantity for item:", itemId);
    incrementQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    console.log("Decrease quantity for item:", itemId);
    decrementQuantity(itemId);
  };

  const handleRemoveItem = (itemId, e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    console.log("Remove item:", itemId);
    removeCart(itemId);
  };

  const handleQuantityChange = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <section className="cart_container">
      <h2 className="heading">
        Carrito de <span>Compras</span>
      </h2>
      <div className="row">
        <div className="col-md-7  bordered-col">
          <table className="table fs-3 shop-table">
            <thead>
              <tr>
                <th colSpan={3}>PRODUCTO</th>
                <th>PRECIO</th>
                <th>CANTIDAD</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody className="cart-item">
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="6" className="fs-1 text-danger">
                    Carrito Vacio
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="product-remove">
                      <button
                        className="remove"
                        onClick={(e) => handleRemoveItem(item.id, e)}
                        aria-label={`Remove itemArial ${item.id}`} // Mejora la accesibilidad
                      >
                        x
                      </button>
                    </td>
                    <td className="product-img">
                      <img src={item.image} alt={item.name} />
                    </td>
                    <td>
                      {item.name} {item.descripcion}
                    </td>
                    <td>
                      <span>Bs.</span>
                      {item.price}
                    </td>
                    <td>
                      <div className="btncontrols">
                        <input
                          type="button"
                          value={"-"}
                          className="btn-decrement"
                          onClick={() => {
                            handleDecreaseQuantity(item.id);
                          }}
                        />
                        <input
                          type="text"
                          value={item.quantity}
                          className="input-quantity"
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value) || 0
                            )
                          }
                        />
                        <input
                          type="button"
                          value={"+"}
                          className="btn-increment"
                          onClick={() => {
                            handleIncreaseQuantity(item.id);
                          }}
                        />
                      </div>
                    </td>
                    <td>{calculateSubtotal(item)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="cart-actions">
            <Link to="/products" className="btn- w-50 fs-3">
              {"← Seguir comprando"}
            </Link>
          </div>
        </div>
        <div className="col-md-4 m-lg-1 container-total-carrito ">
          <div className="">
            <h3 className="title-total-carrito">TOTAL DEL CARRITO</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td className="label-total-carrito">Total:</td>
                  <td className="amount fs-1">Bs.{totalCart()}</td>
                </tr>
              </tbody>
            </table>
            <Link to="/pago" className="btn btn-danger w-100 fs-3">
              {" FINALIZAR COMPRA "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
