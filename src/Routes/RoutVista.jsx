import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import ListaProducts from "../components/products/ListaProducts";
import Cart from "../components/cart/Cart";
import Contact from "../components/contact/Contact";
import Pago from "../components/Pago/Pago";
// import Cart2 from "../components/cart/Cart2";
const RoutVista = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Aquí van tus secciones principales */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListaProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/pago" element={<Pago />} />
        </Routes>
      </main>
    </>
  );
};

export default RoutVista;
