import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import Fruits from "../components/Fruits/Fruits";

const Shop = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <Fruits />
      <Products products={props.products} />
      <Footer />
    </div>
  );
};

export default Shop;
