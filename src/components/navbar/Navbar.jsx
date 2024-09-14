import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faBars,
  faGlassWhiskey,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { useCart } from "../Context/CartContext";

import CartDropdown from "../cart/CartDropdown";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(setMenuOpen(!menuOpen));
  };
  return (
    <header>
      <a href="#" className="logo">
        <i className="">
          <FontAwesomeIcon icon={faGlassWhiskey} />
        </i>
        Liqueur
      </a>

      <div id="menu-bar" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <div className="navbar-item">
          <Link to="/">Inicio</Link>
          <Link to="/products">Tienda</Link>
          <a href="#gallery">Galeria</a>
          <Link to="/contact">Contacto </Link>
        </div>

        <div className="navbar-carrito">
          <Link to="/carrito">
            <CartDropdown />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
