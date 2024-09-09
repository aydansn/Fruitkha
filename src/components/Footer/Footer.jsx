import React from "react";
import style from "./Footer.module.css";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <div className={style.allFooter}>
        <div className={style.dortlu}>
          <ul>
            {" "}
            <h2 className={style.pages}> About us</h2>
            <li>
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error
              sit <br /> voluptatem accusantium doloremque <br /> laudantium,
              totam rem aperiam, <br /> eaque ipsa quae.
            </li>
          </ul>
          <ul>
            <h2 className={style.pages}> Get in Touch</h2>

            <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
            <li>support@fruitkha.com</li>
            <li>+00 111 222 3333</li>
          </ul>
          <ul>
            <h2 className={style.pages}> Pages </h2>

            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
          <ul style={{ padding: "0px 0px 70px 0px" }}>
            <h2 className={style.pages}>Subscribe</h2>

            <li style={{ paddingBottom: "20px" }}>
              Subscribe to our mailing list to get the latest updates.
            </li>
            <input className={style.email} type="text" placeholder="Email" />
          </ul>
        </div>
      </div>
      <div className={style.lastFood}>
        <div className={style.leftLas}>
          <h4 className={style.copy}>
            Copyrights © 2019 - Imran Hossain, All Rights Reserved.
          </h4>
        </div>
        <div className={style.rightLas}>
          <FacebookOutlined />
          <TwitterOutlined />
          <InstagramOutlined />
          <LinkedinOutlined />
          <GlobalOutlined />
        </div>
      </div>
    </div>
  );
};

export default Footer;
