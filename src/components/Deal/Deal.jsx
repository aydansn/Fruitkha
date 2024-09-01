import React from 'react'
import style from "./Deal.module.css";
import a from "../../assets/images/a.jpg";

const Deal = () => {
  return (
    <div>
        <div className={style.allDeal}>
            <div className={style.leftDeal}>
                <img  className={style.a} src={a} alt="" />
            </div>
            <div className={style.rightDeal}>
                <h1 className={style.deal}>Deal of the month</h1>
                <h2 className={style.hikan}>Hikan Strwaberry</h2>
                <p className={style.minus}>Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant
                </p>
                <div className={style.yanashilar}>
                    <div className={style.day}>
                            <h2 className={style.zero}>00</h2>
                            <p>Days</p>
                    </div>
                    <div className={style.day}>
                            <h2 className={style.zero}>00</h2>
                            <p>Days</p>
                    </div>
                    <div className={style.day}>
                            <h2 className={style.zero}>00</h2>
                            <p>Days</p>
                    </div>
                    <div className={style.day}>
                            <h2 className={style.zero}>00</h2>
                            <p>Days</p>
                    </div>
                </div>
                <button className={style.cat}>Add to Cart</button>

            </div>
        </div>
    </div>
  )
}

export default Deal