import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Support from "../components/Support/Support";
import Products from "../components/Products/Products";
import Deal from "../components/Deal/Deal";
import Organic from "../components/Organic/Organic";
import Year from "../components/Year/Year";
import December from "../components/December/December";
import Our from "../components/Our/Our";
import Logo from "../components/Logo/Logo";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Organic />
      <Support />
      <hr />
      <Deal />
      <Year />
      <December />
      <Our />
      <Logo />
      <Footer />
    </div>
  );
};

export default Home;
