import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoutVista from "../Routes/RoutVista";

import Footer from "./footer/Footer";

const Content = () => {
  return (
    <>
      <Router>
        <RoutVista />

        <Footer />
      </Router>
    </>
  );
};

export default Content;
