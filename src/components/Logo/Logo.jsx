import React from "react";
import style from "./Logo.module.css";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";

const Logo = () => {
  return (
    <div>
      <div className={style.allLogo}>
        <img className={style.logos} src={logo1} alt="" />
        <img className={style.logos} src={logo2} alt="" />
        <img className={style.logos} src={logo3} alt="" />
        <img className={style.logos} src={logo4} alt="" />
      </div>
    </div>
  );
};

export default Logo;
