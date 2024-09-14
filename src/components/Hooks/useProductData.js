
import { useMemo } from "react";
import {getProducts} from "../products/productsMock"
const useProductData= (filters,setFilters) => {

    const products = useMemo(() => getProducts(), []);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
          return (
            product.price >= filters.minPrice &&
            (filters.category === "all" || product.category === filters.category)
          );
        });
      }, [products, filters]);

      const categoryCounts = useMemo(() => {
        return products.reduce((accumulator, product) => {
          const category = product.category;
          accumulator[category] = accumulator[category]
            ? accumulator[category] + 1
            : 1;
          return accumulator;
        }, {});
      }, [products]);

      const handleCategoryClick = (category) => {
        setFilters((prevState) => ({
            ...prevState,
            category: category,
          }));
      };


      return {
        filteredProducts,
        categoryCounts,
        handleCategoryClick,
      };
    };
    
    export default useProductData;
    

