import React from "react";
import "./cart.css";
import { useCart } from "../Context/CartContext";
function Cart2() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();
  console.log("cart count:", cart);

  const handleIncreaseQuantity = (itemId) => {
    incrementQuantity(itemId);
    console.log("Increase quantity for item:", itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decrementQuantity(itemId);
    console.log("Decrease quantity for item:", itemId);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
    console.log("Remove item:", itemId);
  };

  const calculateSubtotal = (item) => {
    return parseFloat(item.price * item.quantity); // Calcular el subtotal
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += calculateSubtotal(item);
    });
    return total;
  };
  return (
    <section className="carrito">
      <div className="cart">
        <h2 className="heading text-center mb-4">
          Carrito <span>de Compras</span>
        </h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-thumbnail"
                    style={{ maxWidth: "150px" }}
                  />
                  <div className="flex-grow-1 m-lg-3">
                    <h5 className="fs-2">{item.name}</h5>
                    <p className="fs-3">{item.descripcion}</p>
                    <p className="fs-3">Precio: {item.price}$</p>
                    <p className="fs-3 ">
                      Subtotal: {calculateSubtotal(item)}$
                    </p>
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="btn-quantity"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="btn-quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="btn btn-danger btn-sm p-3 fs-4"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total text-right mb-4">
              <h5 className="fs-2">Total a pagar: {calculateTotal}$</h5>
            </div>
            <form className="border p-3">
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary p-3 fs-3 w-100">
                Enviar Pedido
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart2;
