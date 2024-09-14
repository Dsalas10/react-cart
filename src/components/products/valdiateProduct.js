export const validateProduct = (product) => {
    if (typeof product.name !== "string") {
      console.warn(`Product with id ${product.id} has an invalid name type.`);
      product.name = "Unknown"; // Valor predeterminado
    }
    if (typeof product.descripcion !== "string") {
      console.warn(`Product with id ${product.id} has an invalid description type.`);
      product.descripcion = "No description"; // Valor predeterminado
    }
    if (typeof product.image !== "string") {
      console.warn(`Product with id ${product.id} has an invalid image type.`);
      product.image = ""; // Valor predeterminado
    }
    return product;
  };