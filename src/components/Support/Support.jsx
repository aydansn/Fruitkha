import React from "react";
import style from "./Support.module.css";
import {
  ShoppingCartOutlined,
  PhoneOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";

const Support = () => {
  return (
    <div>
      <div className={style.shipping}>
        <div className={style.uchluYan}>
          <div className={style.ikiliyan}>
            <div className={style.icons}>
              {" "}
              <ShoppingCartOutlined className={style.icon1} />
            </div>
            <div className={style.texts}>
              {" "}
              <h3 className={style.free}>Free Shipping</h3>
              <p className={style.when}>When order over $75</p>
            </div>
          </div>

          <div className={style.ikiliyan}>
            <div className={style.icons}>
              {" "}
              <PhoneOutlined className={style.icon1} />
            </div>
            <div className={style.texts}>
              {" "}
              <h3 className={style.free}>24/7 Support</h3>
              <p className={style.when}>Get support all day</p>
            </div>
          </div>

          <div className={style.ikiliyan}>
            <div className={style.icons}>
              {" "}
              <ArrowsAltOutlined className={style.icon1} />
            </div>
            <div className={style.texts}>
              {" "}
              <h3 className={style.free}>Refund</h3>
              <p className={style.when}>Get refund within 3 days!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
