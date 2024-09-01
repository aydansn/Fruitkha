import React, { useContext } from "react";
import style from "./Our.module.css";
import grapes from "../../assets/images/grapes.jpg";
import pomidor from "../../assets/images/pomidor.jpg";
import nar from "../../assets/images/nar.jpg";
import { FreshContext } from "../../contexts/FreshsContext";

const Our = (props) => {
  console.log(props);
  const { infos } = useContext(FreshContext);
  console.log(infos);
  return (
    <div className={style.allOfOur}>
      <div className={style.allOur}>
        <h1 className={style.ours}>Our News</h1>
        <p className={style.impus}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas <br /> itaque eveniet beatae optio.
        </p>
        <div></div>
        <div className={style.allFruits}>
          {infos.map((mehsul, idx) => (
            <div className={style.fruit} key={idx}>
              <div>
                {" "}
                <img
                  className={style.nar}
                  src={mehsul.img}
                  alt=""
                />
              </div>
              <div
                className={style.look}
                style={{ color: "black", fontSize: "20px" }}
              >
                {mehsul.name}
              </div>
              <div className={style.yanashi}>
                <div>{mehsul.titleOne}</div>
                <div>{mehsul.titleTwo}</div>
              </div>
              <div className={style.title}>{mehsul.describtion}</div>
              <div className={style.more}>{mehsul.more}</div>
            </div>
          ))}
          {/* <div className={style.fruit}>
            <img className={style.nar} src={grapes} alt="" />
            <div className={style.name}>
              <h3 className={style.look}>
                You will vainly look for fruit on it in autumn.
              </h3>
            </div>
            <div className={style.yanashi}>
              <p>Admin</p>
              <p></p>
            </div>
            <div className={style.title}>
              Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
              nisi. Praesent vitae mattis nunc, egestas viverra eros.
            </div>

            <h5 className={style.more}>read more </h5>
          </div>

          <div className={style.fruit}>
            <img className={style.nar} src={pomidor} alt="" />
            <div className={style.name}>
              <h3 className={style.look}>
                A man's worth has its season, like tomato.{" "}
              </h3>
            </div>
            <div className={style.yanashi}>
              <p>Admin</p>
              <p>27 December, 2019</p>
            </div>
            <div className={style.title}>
              Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
              nisi. Praesent vitae mattis nunc, egestas viverra eros.
            </div>

            <h5 className={style.more}>read more </h5>
          </div>

          <div className={style.fruit}>
            <img className={style.nar} src={nar} alt="" />
            <div className={style.name}>
              <h3 className={style.look}>
                Good thoughts bear good fresh juicy fruit.{" "}
              </h3>
            </div>
            <div className={style.yanashi}>
              <p>Admin</p>
              <p>27 December, 2019</p>
            </div>
            <div className={style.title}>
              Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
              nisi. Praesent vitae mattis nunc, egestas viverra eros.
            </div>

            <h5 className={style.more}>read more </h5>
          </div> */}
        </div>
        <button className={style.moreN}>More News</button>
      </div>
    </div>
  );
};

export default Our;
