import { createContext } from "react";
import uzum from "../../src/assets/images/uzum.jpg";
import cilek from "../../src/assets/images/cilek.jpg";
import lemon from "../../src/assets/images/lemon.jpg";

export const ProductContext = createContext();

export const ProductsProvider = (props) => {
  console.log(props);
  const datas = [
    {
      img: cilek,
      id: 1,
      name: "Strawberry",
      title: "Per Kg",
      price: 85,
      button: "Add to Cart",
      type: "strawberry",
    },
    {
      img: uzum,
      id: 2,
      name: "Berry",
      title: "Per Kg",
      price: 70,
      button: "Add to Cart",
      type: "berry",
    },
    {
      img: lemon,
      id: 3,
      name: "Lemon",
      title: "Per Kg",
      price: 30,
      button: "Add to Cart",
      type: "lemon",
    },
  ];

  return (
    <ProductContext.Provider value={{ datas }}>
      {props.children}
    </ProductContext.Provider>
  );
};
