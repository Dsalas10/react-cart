import CardProduct from "./CardProduct";
function Products() {
  const products = [
    {
      id: 1,
      name: "Fernet Branca",
      descripcion: "1 Litro",
      price: "$15",
      image:
        "https://www.fidalga.com/cdn/shop/products/1220001.jpg?v=1653343944",
    },
    {
      id: 2,
      name: "Gin Befeater",
      descripcion: "1 Litro",
      price: "$20",
      image:
        "https://amarket.com.bo/cdn/shop/files/5000329002278_700x700.jpg?v=1712346106",
    },
    {
      id: 3,
      name: "Vodka Absolut",
      descripcion: "1 Litro",
      price: "$18",
      image:
        "https://amarket.com.bo/cdn/shop/files/7312040017683_700x700.jpg?v=1712346652",
    },
    {
      id: 4,
      name: "Vino",
      price: "$12",
      image:
        "https://www.fidalga.com/cdn/shop/products/7772107000285.jpg?v=1656732359",
    },
  ];

  return (
    <section className="products">
      <h1 className="heading">
        Productos <span>Desctacados</span>
      </h1>
      <div className="row-">
        {products.map((product) => (
          <div key={product.id} className="row_box">
            <CardProduct
              key={product.id}
              product={product}
              showAddToCartButton={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
