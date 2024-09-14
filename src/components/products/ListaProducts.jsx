import Filter from "./Filter";
import CardProduct from "./CardProduct";
import "./ListaProducts.css";
import CategoryList from "./categoryList";
import useProductData from "../Hooks/useProductData";
import { CartContextProvider } from "../Context/CartContext";
import { useState } from "react";
import PaginatedProducts from "./PaginationProduct";
function ListaProducts() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 5,
  });
  const { filteredProducts, categoryCounts, handleCategoryClick } =
    useProductData(filters, setFilters);

  return (
    <CartContextProvider>
      <div className="Listaproducts ">
        <h1 className="heading">
          Lista de <span>Productos</span>{" "}
        </h1>
        <div className="container">
          <div className="row border  ">
            <div className="col-md-3 ">
              <CategoryList
                categoryCounts={categoryCounts}
                onCategoryClick={handleCategoryClick}
              />
            </div>
            <div className="col-md-9 ">
              <Filter filters={filters} setFilters={setFilters} />
              <div className="">
                {filteredProducts.length === 0 ? (
                  <div className="alert alert-info  no-products ">
                    <p className="mb-0 text-center">
                      No hay productos que coincidan con los filtros
                      seleccionados.
                    </p>
                  </div>
                ) : (
                  <PaginatedProducts
                    products={filteredProducts}
                    itemsPerPage={5}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartContextProvider>
  );
}

export default ListaProducts;
