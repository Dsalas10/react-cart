import "./pago.css";
import useCart2 from "../Hooks/useCart2";
import useCalculateCart from "../Hooks/useCalculeCart";
const Pago = () => {
  const { cart, calculateSubtotal, totalCart, countCart } = useCart2(
    (state) => ({
      cart: state.cart,
      calculateSubtotal: state.calculateSubtotal,
      totalCart: state.totalCart,
      countCart: state.countCart,
    })
  );
  // const { countCart } = useCalculateCart(cart);

  return (
    <section className="container-pago">
      <div className="container">
        <h3 className="heading">
          Finalizar <span>Compra</span>
        </h3>
        <form action="">
          <div className="row">
            <div className="col-md-6">
              <div className="datos-cliente">
                <h3>Tipo de Envío</h3>
                <div className="tipo-envio">
                  <select className="tipo-envio-select">
                    <option value="" disabled>
                      Elige una Opcion
                    </option>
                    <option value="tienda">Recoger en Tienda</option>
                    <option value="delibery">Delivery</option>
                  </select>
                </div>
                <h3>Detalle de Facturación</h3>
                <div className="detalles-facturacion">
                  <label>Nombre o Razón Social para la Factura</label>
                  <input type="text" />
                  <label>NIT (opcional)</label>
                  <input type="text" />
                  <label htmlFor="phone">Teléfono</label>
                  <div className="phone-container">
                    <img src="https://flagcdn.com/w20/us.png" alt="Bandera" />
                    <input
                      id="phone"
                      type="text"
                      placeholder="Número de teléfono"
                    />
                  </div>
                  <label>Correo</label>
                  <input type="email" />
                </div>
                <div className="informacion-adicional">
                  <h3>Informacion Adicional</h3>
                  <label>Notas del Pedido (opcional)</label>
                  <textarea></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="pedido-cliente">
                <h3 className="title-total-carrito">Tu Pedido</h3>
                <table className="table shop-table-pago ">
                  <thead>
                    <tr>
                      <th className="fs-2">PRODUCTO</th>
                      <td className="amountPago">SUBTOTAL</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="fs-1 text-danger">
                          Pedido Vacio
                        </td>
                      </tr>
                    ) : (
                      <>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <th className="fs-3 thmargin">
                              {item.name},{item.descripcion} X {item.quantity}
                            </th>
                            <td className="amountPago">
                              <span>Bs.</span>
                              {calculateSubtotal(item)}
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="fs-2">Cantidad</th>
                      <td className="amountPago">{countCart}</td>
                    </tr>
                    <tr>
                      <th className="fs-2">Total</th>
                      <td className="amountPago">Bs.{totalCart()}</td>
                    </tr>
                  </tfoot>
                </table>
                <div className="paymente">
                  <div className="btn- text-light">Realizar Pedido o Pago</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Pago;
