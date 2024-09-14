
import { validateProduct } from "./valdiateProduct";

const productsList = [
    {
      id: 1,
      name: "Fernet Branca",
      descripcion: "1 Litro",
      category: "fernet",
      price: 15,
      image:
        "https://www.fidalga.com/cdn/shop/products/1220001.jpg?v=1653343944",
    },
    {
      id: 2,
      name: "Gin Befeater",
      descripcion: "1 Litro",
      price: 20,
      category: "befeater",
      image:
        "https://amarket.com.bo/cdn/shop/files/5000329002278_700x700.jpg?v=1712346106",
    },
    {
      id: 3,
      name: "Vodka Absolut",
      descripcion: "1 Litro",
      price: 18,
      category: "vodka",
      image:
        "https://amarket.com.bo/cdn/shop/files/7312040017683_700x700.jpg?v=1712346652",
    },
    {
      id: 4,
      name: "vino",
      descripcion: "1 Litro",
      price: 12,
      category: "vino",
      image:
        "https://www.fidalga.com/cdn/shop/products/7772107000285.jpg?v=1656732359",
    },
    {
      id: 5,
      name: "Whisky",
      descripcion: "1 Litro",
      price: 25,
      category: "jhony walker",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWL6aNgkkwePdJoHN2aANaPAnYbN3ljPCyg&s",
    },
    {
      id: 6,
      name: "Tequila",
      descripcion: "1 Litro",
      price: 22,
      category: "jose cuervo",
      image: "https://www.fidalga.com/cdn/shop/products/13824.jpg?v=1653344909",
    },
    {
      id: 7,
      name: "Ron",
      price: 19,
      descripcion: "1 Litro",
      category: "havana",
      image:
        "https://amarket.com.bo/cdn/shop/files/8501110080446_700x700.jpg?v=1712346017",
    },
    {
      id: 8,
      name: "Cerveza",
      descripcion: "1 Litro",
      price: 8,
      category: "cervesa",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAXNN5Hw0Zh3dJ_ZE72237koQA1c_KTQ2LQ&s",
    },
    {
      id: 9,
      name: "Champane",
      descripcion: "1 Litro",
      price: 30,
      category: "champane",
      image:
        "https://latinflores.com/cdn/shop/products/FR0726_L.jpg?v=1705076923",
    },
    {
      id: 10,
      name: "Papas Fritas",
      descripcion: "1 Litro",
      price: 5,
      category: "otros",
      image:
        "https://m.media-amazon.com/images/I/51ON2r1q5sL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 11,
      name: "Papas Fritas",
      descripcion: "1 Litro",
      price: 5,
      category: "otros",
      image:
        "https://m.media-amazon.com/images/I/51ON2r1q5sL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 12,
      name: "Papas Fritas",
      descripcion: "1 Litro",
      price: 5,
      category: "otros",
      image:
        "https://m.media-amazon.com/images/I/51ON2r1q5sL._AC_UF894,1000_QL80_.jpg",
    },
  ]


  export const getProducts = () => {
    const validatedProducts = productsList.map((product) => validateProduct(product));
    return validatedProducts;
  };

  // export const getProducts = () => {
              
  //   return   productsList.map((product) => validateProduct(product));
  // };