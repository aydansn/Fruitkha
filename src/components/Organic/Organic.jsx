import React from "react";
import style from "./Organic.module.css";
import hero from "../../assets/images/hero.jpg";

const Organic = () => {
  return (
    <div className={style.allNavbars}>
      <div className={style.allFresh}>
        <h2 className={style.organic}>Fresh & Organic</h2>
        <h1 className={style.delicious}>Delicious Seasonal Fruits</h1>
        <div className={style.yanYanashi}>
          {/* <button className={style.btn1}>Fruit Collection</button>
          <button className={style.btn2}>Contact Us</button> */}
        </div>
      </div>
    </div>
  );
};

export default Organic;
