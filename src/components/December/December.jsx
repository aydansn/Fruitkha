import React from "react";
import style from "./December.module.css";
import portagal from "../../assets/images/portagal.jpg";

const December = () => {
  return (
    <div className={style.allDec}>
      <div className={style.december}>
        <div className={style.leftDec}>
          <h1 className={style.sale}>
            December sale is on! <br /> with big Discount...
          </h1>
          <div className={style.yanashi3}>
            <p className={style.upto}>
              Sale! <br />
              Upto
            </p>
            <h1 className={style.faiz}> 50%</h1>
            <p className={style.upto}>off</p>
          </div>
          <button className={style.now}>Shop Now</button>
        </div>
        <div className={style.rightDec}></div>
      </div>
    </div>
  );
};

export default December;
