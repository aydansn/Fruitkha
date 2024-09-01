import React from 'react'
import style from "./Fruits.module.css";

const Fruits = () => {
    return (
        <div>
          <div className={style.shop}>
            <h2 className={style.min}>Fresh and Organic</h2>
            <h1 className={style.textBig}>Shop</h1>
          </div>
        </div>
      );
}

export default Fruits