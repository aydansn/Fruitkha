import React, { useCallback, useContext, useEffect, useState } from "react";
import style from "./Products.module.css";
import { ProductContext } from "../../contexts/ProductsContext";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = (props) => {
  console.log(props, "product props");
  const { datas } = useContext(ProductContext);
  console.log(datas);

  let [searchParams] = useSearchParams();
  const tip = searchParams.get("type");
  console.log(tip, "TIP");

  const [butunMehsullar, setButunMehsullar] = useState(datas);
  console.log(butunMehsullar);

  useEffect(() => {
    if (tip === "all") {
      setButunMehsullar(datas);
    } else {
      const filterlenmishdata = datas.filter((data) => data.type === tip);
      setButunMehsullar(filterlenmishdata);
    }
  }, [tip]);

  return (
    <div className={style.allProducts}>
      <div className={style.allTexts}>
        <h1 className={style.our}>Our Products</h1>
        <p className={style.lorem}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas <br /> itaque eveniet beatae optio.
        </p>
      </div>
      <div className={style.yanYanashiPro}>
        <Link to={"/shop?type=all"} className={style.lemon}>
          All
        </Link>
        <Link
          to={"/shop?type=strawberry"}
          className={style.lemon}
        >
          Strawberry
        </Link>
        <Link to={"/shop?type=berry"} className={style.lemon}>
          Berry
        </Link>
        <Link to={"/shop?type=lemon"} className={style.lemon}>
          Lemon
        </Link>
      </div>
      <div className={style.products}>
        {butunMehsullar.map((mehsul, idx) => (
          <div key={idx} className={style.one}>
            <div>
              <img className={style.cilek} src={mehsul.img} alt="" />
            </div>
            <div>{mehsul.name}</div>
            <div className={style.per}>{mehsul.title}</div>
            <div className={style.dollar}>{mehsul.price}</div>
            <div className={style.card}>{mehsul.button}</div>
          </div>
          // <Link key={idx} to={`/shop?hansiproduct=${id}`}>

          // </Link>
        ))}
      </div>
      {/* <div className={style.products}>
        <div className={style.one}>
          <img className={style.cilek} src={cilek} alt="" />
          <h3>Strawberry</h3>
          <p className={style.per}>Per Kg</p>
          <h1 className={style.dollar}>85$</h1>
          <button className={style.card}>Add to Cart</button>
        </div>

        <div className={style.one}>
          <img className={style.cilek} src={uzum} alt="uzum" />
          <h3>Berry</h3>
          <p className={style.per}>Per Kg</p>
          <h1 className={style.dollar}>70$</h1>
          <button className={style.card}>Add to Cart</button>
        </div>

        <div className={style.one}>
          <img className={style.cilek} src={lemon} alt="lemon" />
          <h3>Lemon</h3>
          <p className={style.per}>Per Kg</p>
          <h1 className={style.dollar}>35$</h1>
          <button className={style.card}>Add to Cart</button>
        </div>
      </div> */}
    </div>
  );
};

export default Products;
