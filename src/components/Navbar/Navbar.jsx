import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { ShoppingOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import hero from "../../assets/images/hero.jpg";

const Navbar = () => {
  return (
    <div className={style.allNavbars}>
      <div className={style.butunNavbar}>
        <img className={style.logos} src={logo} alt="logo" />
        <div className={style.links}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/shop">Shop</Link>
        </div>
        <div className={style.navRight}>
          <div className={style.basket}>
            <ShoppingOutlined />
          </div>
          <div className={style.search}>
            <SearchOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
