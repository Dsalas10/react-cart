import React, { useId, useState } from "react";
import "./Filters.css";
// import { useFilters } from "../Hooks/UseFilter";

const Filters = ({ filters, setFilters }) => {
  const minPriceFilterId = useId();
  const categoryFilterID = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCatergory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div className="filter-price">
        <label htmlFor="price" className="price">
          Price
        </label>
        <input
          type="range"
          min="0"
          max="50"
          id={minPriceFilterId}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div className="filter-category">
        <label htmlFor="category" className="category">
          Categoria
        </label>
        <select name="" id={categoryFilterID} onChange={handleChangeCatergory}>
          <option value="all">Todas</option>
          <option value="havana">Havana</option>
          <option value="befeater">Befeater</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
